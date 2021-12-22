import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechargeProcessComponent } from './recharge-process.component';

const routes: Routes = [
  {path:'',component:RechargeProcessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechargeProcessRoutingModule { }
