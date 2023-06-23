import { Component } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  status: boolean = false;
  constructor(private service: ListService) {}
  clickEvent(){
    this.status = !this.status;      
    this.service.newEvent(this.status); 
}
}
