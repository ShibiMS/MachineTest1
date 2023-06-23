import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable, throwError, Subject  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private url = environment.apiUrl;
  private _subject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getListingDetails1(){
    return this.http.get(this.url+'/users?page=1&per_page=10');    
  }
  getListingDetails(
    pageNumber: Number,
    pageSize: Number
  ): Observable<any> {    
    return this.http.get(this.url+`/users?page=${pageNumber}&per_page=${pageSize}`);  
  }
  getEditById(id: number){
    return this.http.get(this.url+'/users/'+id);
  }
  updateEditById(id: number, body: any){
    return this.http.put(this.url+'/users/'+id, body);
  }
  newEvent(event: any) {
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }



}
