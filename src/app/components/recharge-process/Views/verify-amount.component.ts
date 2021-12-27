import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelpService } from '../../../services/help.service';

@Component({
  selector: 'app-verify-amount',
  template: `
     <!-- TITLE -->
  <div class="container text-center">
     <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
         <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">VERIFICA LA INFO DE TU PAGO</h1>
     </div>
 </div>
 <!-- CARRIER IMAGE -->
 <div class="container text-center my-5">
   <div class="row">
     <div *ngIf="dataCarrier.carrier != ''" class="col-6">
     <img [src]='"assets/"+dataCarrier.carrier+".svg"' alt="">
     </div>
     <div class="col-6 grayContainer my-3">
        <h1 class="blue m-0 p-0" style="font-weight: 700;">{{dataCarrier.carrier| titlecase}} {{dataCarrier.amount| currency : 'USD' : 'symbol' : '1.0-0' }}</h1>
     </div>
   </div>
 </div>

 <div class="container">
   <h3 class="blue" style="font-weight: 500;">TU PAGO</h3>
   <h4 class="blue">
     Verifique el monto y el número
   </h4>
   <ul class="blue">
      <li><h4>Si es correcto dar click en “Continuar”</h4></li>
       <li><h4>De ser incorrecto introduzcalo nuevamente click en “Editar”</h4></li>
  </ul>
 </div>

 <div class="container my-5">
   <div class="row justify-content-between">
      <div class="col-5">
        <div class="form-group round">
        <label>
          <span class="blue">Número de teléfono:</span>
        </label>
        <input id="phone" disabled class="form-control form-control-lg py-2" type="text">
        </div>
      </div>
      <div class="col-5">
      <div class="form-group round">
        <label>
          <span class="blue">Cantidad:</span>
        </label>
        <input id="amount" disabled class="form-control form-control-lg py-2" type="text">
        </div>
      </div>
   </div>
 </div>

 <div class="row m-0 p-0 justify-content-center mt-5">
   <div class="col-9">
     <div class="row m-0 p-0">
       <div class="col-4">
        <button matStepperPrevious  class="btn w-100 orange-button">
            <h3 class="text-light">
                EDITAR
            </h3>
        </button>
      </div>
      <div class="col-4">
        <button routerLink="/recharges" class="btn w-100 orange-button">
            <h3 class="text-light">
                CANCELAR
            </h3>
        </button>
      </div>
      <div class="col-4">
        <button matStepperNext  class="btn w-100 blue-button">
            <h3 class="text-light">
                CONTINUAR
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
export class VerifyAmountComponent implements OnInit {
  constructor(private helpService: HelpService) { }
  dataCarrier = { carrier: '', amount: 0, number: '' };
  subscription: Subscription;
  inputPhone: HTMLInputElement;
  inputAmount: HTMLInputElement;
  ngOnInit(): void {
    this.subscription = this.helpService.currentCarrier.subscribe(data => {
      this.dataCarrier = data;
      if (data.number != '') {
        this.inputAmount.value = '$' + String(this.dataCarrier.amount);
        this.inputPhone.value = this.dataCarrier.number;
      }
    });
  }

  ngAfterViewInit(): void {
    this.inputPhone = <HTMLInputElement>document.getElementById('phone');
    this.inputAmount = <HTMLInputElement>document.getElementById('amount');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
