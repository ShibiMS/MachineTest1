import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../service/list.service';
import { FormControl } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-telecom-masters',
  templateUrl: './telecom-masters.component.html',
  styleUrls: ['./telecom-masters.component.scss']
})
export class TelecomMastersComponent {
  status: boolean = false;
  listUserDetails : any;
  telecomFormInput = new FormControl('');
  telecomList: string[] = ['Airtel', 'Idea'];
  telecomServiceTypeInput = new FormControl('');
  telecomServiceType: string[] = ['All', 'Top UP', 'Data Plan', 'Special Offer']; 

  constructor(private _listService: ListService, public _MatPaginatorIntl: MatPaginatorIntl) {
     
  }  

  ngOnInit(){
    this._MatPaginatorIntl.itemsPerPageLabel = 'Show';
    this._listService.getListingDetails().subscribe((data: {}) => {
      this.listUserDetails = data;
    })
  }
  clickEvent(){
    this.status = !this.status;       
  }
}
