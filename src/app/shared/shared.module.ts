import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [CarouselComponent,FooterComponent,ProductsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatStepperModule,
    MatDialogModule
  ],
  exports:[
    CarouselComponent,FooterComponent,ProductsComponent,MatStepperModule
  ]
})
export class SharedModule { }
