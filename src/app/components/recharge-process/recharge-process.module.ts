import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeProcessRoutingModule } from './recharge-process-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RechargeProcessComponent } from './recharge-process.component';
import { ChooseBalanceComponent } from './Views/choose-balance.component';
import { EntryNumberComponent } from './Views/entry-number.component';
import { VerifyAmountComponent } from './Views/verify-amount.component';
import { InsertMoneyComponent } from './Views/insert-money.component';
import { CouponComponent } from './Views/coupon.component';


@NgModule({
  declarations: [RechargeProcessComponent, ChooseBalanceComponent, EntryNumberComponent, VerifyAmountComponent, InsertMoneyComponent, CouponComponent],
  imports: [
    CommonModule,
    RechargeProcessRoutingModule,
    SharedModule
  ]
})
export class RechargeProcessModule { }
