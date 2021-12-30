import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { HelpService } from '../../../services/help.service';
import { typeService } from '../../service-process/service-process.component';
import { CouponComponent } from './coupon.component';

@Component({
  selector: 'app-insert-money',
  template: `
<div class="d-flex flex-column justify-content-between h-100">
  <!-- TITLE -->
  <div class="container text-center mt-5">
     <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
         <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">INTRODUCIR DINERO</h1>
     </div>
 </div>
 <!-- CARRIER IMAGE -->
 <div class="container text-center my-5">
        <div class="row gx-5">
            <div class="col-6">
                <div class="imageContainer text-center">
                <img class="mt-3 w-50" *ngIf="service" [src]="'data:image/jpeg;base64,'+service.Base64Imagen" alt="">
                </div>
            </div>
            <!-- PREPAGO -->
            <div *ngIf="product && typeService == 'PREPAGO'" class="col-6 grayContainer my-3">
                <h1 class="blue m-0 p-0" style="font-weight: 700;">{{service.NombreServicio}} {{product.Monto| currency : 'USD' : 'symbol' : '1.0-0' }}</h1>
            </div>
            <!-- REFERENCIA DIRECTA -->
            <div *ngIf="typeService === 'REF1' || typeService === 'REF2'" class="col-6 grayContainer my-3">
                <h1 class="blue m-0 p-0" style="font-weight: 700;">{{service.NombreServicio}} {{700| currency : 'USD' : 'symbol' : '1.0-0' }}</h1>
            </div>
        </div>
  </div>


 <div class="container my-5">
   <div class="row gx-5">
      <div class="col-6">
        <div class="form-group round">
        <label>
          <span class="blue">Cantidad a ingresar:</span>
        </label>
        <input id="totalAmount" placeholder="$150.00" disabled class="form-control form-control-lg py-2" type="text">
        </div>
      </div>
      <div class="col-6">
      <div class="form-group round">
        <label>
          <span class="blue">Cantidad ingresada en la máquina:</span>
        </label>
        <input placeholder="$000.00" id="amount" disabled class="form-control form-control-lg py-2" type="text">
        </div>
      </div>
   </div>
 </div>

 <div class="container">
   <h3 class="blue">BILLETES Y MONEDAS:</h3>
   <div class="row">
     <div *ngFor="let cash of ['200','100','50','20']" class="col-3">
       <img class="w-100" [src]="'assets/'+cash+'.svg'" alt="">
     </div>
     <div class="col-6">
      <img class="w-100" src="assets/coins.svg" alt="">
     </div>
   </div>
 </div>

 <div class="container mt-5">
  <div class="row m-0 p-0 justify-content-between">
       <div class="col-3">
              <button matStepperPrevious  class="btn w-100 orange-button">
                  <h3 class="text-light">
                      REGRESAR
                  </h3>
              </button>
          </div>
          <div class="col-3">
              <button routerLink="/recharges"  class="btn w-100 orange-button">
                  <h3 class="text-light">
                      CANCELAR
                  </h3>
              </button>
          </div>
          <div class="col-3">
              <button matStepperNext  class="btn w-100 blue-button">
                  <h3 class="text-light">
                      CONTINUAR 
                  </h3>
              </button>
          </div>
          <div class="col-3">
              <button (click)="openCouponView()"  class="btn w-100 orange-button">
                  <h3 class="text-light">
                      CUPÓN
                  </h3>
              </button>
          </div>
  </div>

 </div>
</div>
  `,
  styles: [
  ]
})
export class InsertMoneyComponent implements OnInit {
  @Input() service = null;
  product = null;
  dataCarrier = { carrier: '', amount: 0, number: '' };
  subscription: Subscription = new Subscription();
  dialogSubscription: Subscription = new Subscription();
  inputTotalAmount: HTMLInputElement;
  @Output() stepperEvent = new EventEmitter();
  @Input() typeService: typeService = null;
  constructor(private helpService: HelpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.helpService.productSelectedSubject.subscribe(data => this.product = data);
  }

  openCouponView() {
    const dialog = this.dialog.open(CouponComponent, {
      width: '700px',
    });
    this.dialogSubscription = dialog.afterClosed().subscribe(result => {
      if (result && result.event === 'cupon') {
        this.stepperEvent.emit();
      }
    })
  }


  ngAfterViewInit(): void {
    this.inputTotalAmount = <HTMLInputElement>document.getElementById('totalAmount');
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.dialogSubscription.unsubscribe();
  }


}