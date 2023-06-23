import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelecomMastersComponent } from './telecom-masters.component';

const routes: Routes = [{ path: '', component: TelecomMastersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelecomMastersRoutingModule { }
