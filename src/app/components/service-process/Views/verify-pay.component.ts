import { Component, Input, OnInit } from '@angular/core';
import { HelpService } from '../../../services/help.service';
import { Subscription } from 'rxjs';
import { typeService } from '../service-process.component';

@Component({
  selector: 'app-verify-pay',
  template: `
  <!-- TITLE -->

  <div class="d-flex flex-column justify-content-between h-100">
    <!-- TITLE -->
    <div class="container text-center mt-5">
      <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
          <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">TU PAGO</h1>
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
    <div class="row justify-content-between gx-5">
      <div *ngIf="typeService === 'REF1' || typeService === 'REF2' " class="col-6">
        <div  class="form-group round">
        <label>
          <span class="blue">Referencia:</span>
        </label>
        <input id="phone" disabled class="form-control form-control-lg py-2" type="text" placeholder="33 3656 6544">
        </div>
      </div>
      <div class="col-6">
        <div class="form-group round">
          <label>
            <span class="blue">Monto:</span>
          </label>
          <input id="amount" disabled class="form-control form-control-lg py-2" type="text" placeholder="$000.00">
          </div>
        </div>
      <div class="col-6 mt-3">
        <div class="form-group round">
          <label>
            <span class="blue">Total por cobrar:</span>
          </label>
          <input id="amount" disabled class="form-control form-control-lg py-2" type="text" placeholder="$000.00">
          </div>
        </div>
      <div class="col-6 mt-3">
        <div class="form-group round">
          <label>
            <span class="blue">Cargo por transación:</span>
          </label>
          <input id="amount" disabled class="form-control form-control-lg py-2" type="text" placeholder="$000.00">
          </div>
        </div>
    </div>
  </div>
        <!-- BUTTONS -->
    <div class="row  p-0 justify-content-center mt-5">
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
          <button routerLink="/home" class="btn w-100 orange-button">
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
  </div>


`,
  styles: [
  ]
})
export class VerifyPayComponent implements OnInit {
  product = null;
  subscription: Subscription = new Subscription();
  @Input() service = null;
  @Input() typeService: typeService = null;
  constructor(private helpService: HelpService) { }

  ngOnInit(): void {
    this.subscription = this.helpService.productSelectedSubject.subscribe(data => this.product = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
