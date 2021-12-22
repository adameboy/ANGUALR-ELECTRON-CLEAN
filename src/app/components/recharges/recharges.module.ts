import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargesRoutingModule } from './recharges-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RechargesComponent } from './recharges.component';
@NgModule({
  declarations: [RechargesComponent],
  imports: [
    CommonModule,
    RechargesRoutingModule,
    SharedModule  ]
})
export class RechargesModule { }
