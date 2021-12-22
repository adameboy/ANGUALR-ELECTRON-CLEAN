import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeProcessRoutingModule } from './recharge-process-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RechargeProcessComponent } from './recharge-process.component';


@NgModule({
  declarations: [RechargeProcessComponent],
  imports: [
    CommonModule,
    RechargeProcessRoutingModule,
    SharedModule
  ]
})
export class RechargeProcessModule { }
