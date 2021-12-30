import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess-pay',
  template: `
  <div class="d-flex flex-column justify-content-between h-100">
    <!-- TITLE -->
    <div class="container text-center mt-5">
      <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
          <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">{{'transacción exitosa'|uppercase}}</h1>
      </div>
    </div>

    <div *ngIf="service" class="container">
      <div class="text-center mb-5">
        <img style="width: 13%;" src="assets/check.svg" alt="">
      </div>
      <h3 style="font-weight: 400;" class="blue d-inline">Tu operación por <h3 class="orange d-inline">{{service.NombreServicio}}</h3> al número
      <h3 class="orange d-inline">21342314123</h3> fue realizada con éxito.</h3>

      <div class="row my-5">
        <div class="col-6">
          <label class="blue fw-normal">Folio:</label>
          <span class="blue d-block fs-3 fw-light">4234</span>
          <div style="border: 0.930149px solid #C4C4C4;"></div>
        </div>
        <div class="col-6">
          <label class="blue fw-normal">Cantidad:</label>
          <span class="blue d-block fs-3 fw-light">4234</span>
          <div style="border: 0.930149px solid #C4C4C4;"></div>
        </div>
        <div class="col-6 mt-3">
          <label class="blue fw-normal">ID de operación:</label>
          <span class="blue d-block fs-3 fw-light">4234</span>
          <div style="border: 0.930149px solid #C4C4C4;"></div>
        </div>
        <div class="col-6 mt-3">
          <label class="blue fw-normal">Cambio:</label>
          <span class="blue d-block fs-3 fw-light">4234</span>
          <div style="border: 0.930149px solid #C4C4C4;"></div>
        </div>
      </div>
      
      <h3 style="font-weight: normal;" class="blue">
      Servicio operado por tring! sa de cv el periodo para la aplicación del pago es de 24 hrs para cualquier duda llame al xxx xxx xxx ATENCIÓN SOBRE EL CAJERO TRING! (33) XX XX XX XX GUARDE SU RECIBO HASTA RECIBIR EL PAGO. 
      </h3>
    </div>

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-3">
          <button routerLink="/home"  class="btn w-100 blue-button">
                <h3 class="text-light">
                    FINALIZAR
                </h3>
            </button>
        </div>
        <div class="col-3">
          <button matStepperNext class="btn w-100 orange-button">
                <h3 class="text-light">
                    IMPRIMIR TICKET
                </h3>
            </button>
        </div>
      </div>
  </div>

  </div>
  `,
  styles: [
    `label{
      font-size: 1.5em
    }`
  ]
})
export class SucessPayComponent implements OnInit {
  @Input() service = null;
  constructor() { }

  ngOnInit(): void {
  }

}
