import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import { TelecomMastersRoutingModule } from './telecom-masters-routing.module';
import { TelecomMastersComponent } from './telecom-masters.component';
import { ListService } from '../service/list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    TelecomMastersComponent
  ],
  imports: [
    CommonModule,
    TelecomMastersRoutingModule,
    MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule,MatIconModule,MatPaginatorModule
  ],
  providers: [ListService],
})
export class TelecomMastersModule { }
