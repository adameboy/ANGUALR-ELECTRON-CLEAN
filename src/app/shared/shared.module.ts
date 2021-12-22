import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CarouselComponent,FooterComponent,ProductsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CarouselComponent,FooterComponent,ProductsComponent
  ]
})
export class SharedModule { }
