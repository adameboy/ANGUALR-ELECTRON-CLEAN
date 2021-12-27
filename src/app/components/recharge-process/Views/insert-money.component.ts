import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { HelpService } from '../../../services/help.service';
import { CouponComponent } from './coupon.component';

@Component({
  selector: 'app-insert-money',
  template: `
  <!-- TITLE -->
  <div class="container text-center">
     <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
         <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">INTRODUCIR DINERO</h1>
     </div>
 </div>
 <!-- CARRIER IMAGE -->
 <div class="container text-center mt-3">
   <div class="row">
     <div *ngIf="dataCarrier.carrier != ''" class="col-6">
     <img [src]='"assets/"+dataCarrier.carrier+".svg"' alt="">
     </div>
     <div class="col-6 grayContainer my-3">
        <h1 class="blue m-0 p-0" style="font-weight: 700;">{{dataCarrier.carrier| titlecase}} {{dataCarrier.amount| currency : 'USD' : 'symbol' : '1.0-0' }}</h1>
     </div>
   </div>
 </div>

 <div class="container my-5">
   <div class="row">
      <div class="col-6">
        <div class="form-group round">
        <label>
          <span class="blue">Cantidad a ingresar:</span>
        </label>
        <input id="totalAmount" disabled class="form-control form-control-lg py-2" type="text">
        </div>
      </div>
      <div class="col-6">
      <div class="form-group round">
        <label>
          <span class="blue">Cantidad ingresada en la máquina:</span>
        </label>
        <input id="amount" disabled class="form-control form-control-lg py-2" type="text">
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
  `,
  styles: [
  ]
})
export class InsertMoneyComponent implements OnInit {
  dataCarrier = { carrier: '', amount: 0, number: '' };
  subscription: Subscription = new Subscription();
  dialogSubscription: Subscription = new Subscription();
  inputTotalAmount: HTMLInputElement;
  @Output() stepperEvent = new EventEmitter();

  constructor(private helpService: HelpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.helpService.currentCarrier.subscribe(data => {
      this.dataCarrier = data;
      if (data.amount != 0)
        this.inputTotalAmount.value = '$' + String(data.amount);
    });
  }

  openCouponView() {
    const dialog = this.dialog.open(CouponComponent, {
      width: '700px',
    });
    this.dialogSubscription = dialog.afterClosed().subscribe(result => {
      if (result.event === 'cupon') {
        console.log('me ejecute')
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