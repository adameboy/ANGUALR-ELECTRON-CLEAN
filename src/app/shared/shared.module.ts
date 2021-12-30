import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import { InsertMoneyComponent } from '../components/recharge-process/Views/insert-money.component';
import { CouponComponent } from '../components/recharge-process/Views/coupon.component';
import { ChooseBalanceComponent } from '../components/recharge-process/Views/choose-balance.component';
import { SucessPayComponent } from '../components/service-process/Views/sucess-pay.component';


@NgModule({
  declarations: [SucessPayComponent,ChooseBalanceComponent, CouponComponent,InsertMoneyComponent, CarouselComponent,FooterComponent,ProductsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatStepperModule,
    MatDialogModule
  ],
  exports:[
    SucessPayComponent,ChooseBalanceComponent,CouponComponent,InsertMoneyComponent,CarouselComponent,FooterComponent,ProductsComponent,MatStepperModule
  ]
})
export class SharedModule { }
