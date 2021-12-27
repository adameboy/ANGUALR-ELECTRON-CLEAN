import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-coupon',
  template: `

  <div class="container">
    <!-- TITLE -->
    <div class="container text-center mb-3">
     <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
         <h1 class="blue m-0 p-0 " style="font-weight: 700;">CUPÓN DE DESCUENTO</h1>
     </div>
    </div>

    <h3 class="blue d-inline">Ingresa tu <h3 class="orange d-inline">Cupón o Escanealo</h3>  para utilizar tu descuento.</h3>

    <div class="form-group round mt-4">
      <label>
        <span class="blue">Número de teléfono:</span>
      </label>
      <input id="cupon" class="form-control form-control-lg py-4" type="text" placeholder="h563rfht5123e">
    </div>

    <div class="container">
      <div class="row m-0 p-0 justify-content-center">
        <div class="col-12">
          <div class="row m-0 p-0">
            <div *ngFor="let number of [1,2,3,4,5,6,7,8,9,'BORRAR',0,'X']" class="col-4">
              <button (click)="pressPad(number)" class="btn w-100 priceContainer  text-center my-3 padNumber">
                <h2 class="p-0 m-0 blue fw-bold">{{number}}</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0 p-0 justify-content-center mt-3">
      <div class="col-5">
        <button (click)="dialogRef.close()"  class="btn w-100 orange-button">
            <h3 class="text-light">
                CANCELAR
            </h3>
        </button>
      </div>
      <div class="col-5">
        <button (click)="applyCoupon()"  class="btn w-100 blue-button">
            <h3 class="text-light">
                CONTINUAR
            </h3>
        </button>
      </div>
    </div>

  </div>
  `,
  styles: [
  ]
})
export class CouponComponent implements OnInit {
  @Output() couponEvent = new EventEmitter<boolean>();
  input: HTMLInputElement;
  constructor(public dialogRef: MatDialogRef<CouponComponent>) { }

  ngOnInit(): void {
  }

  changeView() {
    this.couponEvent.emit(false);
  }

  close() {
    this.dialogRef.close();
  }

  applyCoupon() {
    this.dialogRef.close({ event: 'cupon' });
  }

  ngAfterViewInit(): void {
    this.input = <HTMLInputElement>document.getElementById('cupon');
  }

  pressPad(action: string | number) {
    if (action === 'BORRAR' || action === 'X') {
      this.input.value = this.input.value.slice(0, -1);
    } else {
      this.input.value += action;
    }
  }

}
