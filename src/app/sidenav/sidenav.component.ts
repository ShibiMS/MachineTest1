import { Component } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  status: boolean = false;
  constructor(private service: ListService) {}
  
  ngOnInit(){
    this.service.events$.forEach(event => {
      this.status = event;
    }); 
  }
}
