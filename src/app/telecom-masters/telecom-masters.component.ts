import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../service/list.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, of as observableOf, pipe } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-telecom-masters',
  templateUrl: './telecom-masters.component.html',
  styleUrls: ['./telecom-masters.component.scss']
})
export class TelecomMastersComponent {
  status: boolean = false;
  listUserDetails : any;
  listsingleUserDetails: any;
  telecomFormInput = new FormControl('');
  telecomList: string[] = ['Airtel', 'Idea'];
  telecomServiceTypeInput = new FormControl('');
  telecomServiceType: string[] = ['All', 'Top UP', 'Data Plan', 'Special Offer']; 
  closeResult: string = '';
  editProfileForm!: FormGroup;
  isLoading = false;
  totalData!: number;
 
  constructor(
    private _listService: ListService, 
    public _MatPaginatorIntl: MatPaginatorIntl, 
    private modalService: NgbModal,
    private fb: FormBuilder) {
     
  }  
  @ViewChild('paginator') paginator!: MatPaginator;
  ngAfterViewInit() {    
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoading = true;
          return this._listService.getListingDetails(
            this.paginator.pageIndex + 1,
            this.paginator.pageSize
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((empData) => {
          if (empData == null) return [];
          this.totalData = empData.total;
          this.isLoading = false;
          return empData;
        })
      )
      .subscribe((empData) => {
        this.listUserDetails = empData;
      });
    
  }


  ngOnInit(){
    this._MatPaginatorIntl.itemsPerPageLabel = 'Show';
    // this._listService.getListingDetails().subscribe((data: {}) => {
    //   this.listUserDetails = data;
    // })
    this.editProfileForm = this.fb.group({
      firstname: [''],
      lastname: [''],      
      email: ['']
     });
  }

  clickEvent(){
    this.status = !this.status;       
  }

  openModal(targetModal:any, userId:any) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
    this._listService.getEditById(userId).subscribe((data: {}) => {
      this.listsingleUserDetails = data;
      this.editProfileForm.patchValue({
        firstname: this.listsingleUserDetails.data.first_name,
        lastname: this.listsingleUserDetails.data.last_name,
        email: this.listsingleUserDetails.data.email
       });
    })
    
   }
   onSubmit(userId:number) {
    this.modalService.dismissAll();
    const formValue = this.editProfileForm.getRawValue();
    const body = {
                  "name": formValue.firstname,
                  "job": formValue.lastname
                }
    this._listService.updateEditById(userId, body).subscribe((data: {}) => {
      this.listsingleUserDetails = data;      
    })
   this.ngOnInit();
   }
}
