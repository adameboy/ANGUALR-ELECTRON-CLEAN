import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeProcessRoutingModule } from './recharge-process-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { EntryNumberComponent } from './Views/entry-number.component';
import { VerifyAmountComponent } from './Views/verify-amount.component';
import { RechargeProcessComponent } from './recharge-process.component';


@NgModule({
  declarations: [RechargeProcessComponent,EntryNumberComponent,VerifyAmountComponent],
  imports: [
    CommonModule,
    RechargeProcessRoutingModule,
    SharedModule
  ]
})
export class RechargeProcessModule { }
