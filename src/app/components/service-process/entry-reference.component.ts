import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-reference',
  template: `
  <div class="container">
    <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
        <!-- <i class='bx bx-plus-medical bx-sm blue mt-1'></i> -->
        <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">DATOS DE LA TRANSACCIÓN</h1>
    </div>
    <div class="imageContainer text-center">
      <img class="mt-3 w-25" *ngIf="service" [src]="'data:image/jpeg;base64,'+service.Base64Imagen" alt="">
    </div>
  </div>
  <div class="container">
    <h3 class="blue" style="font-weight: 500;">TU PAGO</h3>
    <h4 class="blue">
        Para poder pagar tu servicio selecciona la primera casilla “Referencia” para poder agregarla 
    </h4>
  </div>

  <div class="container mt-5">
    <div class="row gx-5 m-0 p-0">

      <div class="col-6 d-flex flex-column justify-content-between">

        <div class="form-group round">
              <label>
                  <span class="blue">Referencia:</span>
              </label>
              <input class="form-control form-control-lg py-3" type="text" placeholder="ASDH#123D">
        </div>
        <div class="form-group round">
              <label>
                  <span class="blue">Monto:</span>
              </label>
              <input class="form-control form-control-lg py-3" type="text" placeholder="$000.00">
        </div>
        <div class="form-group round">
              <label>
                  <span class="blue">Cargo por transacción:</span>
              </label>
              <input class="form-control form-control-lg py-3" type="text" placeholder="$000.00">
        </div>
        <div class="form-group round mb-3">
              <label>
                  <span class="blue">Total por cobrar:</span>
              </label>
              <input class="form-control form-control-lg py-3" type="text" placeholder="$000.00">
        </div>
        
      </div>
      <div class="col-6">
                  <!-- DPAD # -->
          <div class="row m-0 p-0 g-0 justify-content-center">
              <div class="col-12">
                <div class="row  m-0 p-0">
                    <div *ngFor="let number of [1,2,3,4,5,6,7,8,9,'.',0,'X']" class="col-4">
                      <button class="btn w-100 priceContainer  text-center mb-3 padNumber">
                          <h2 class="p-0 m-0 blue">{{number}}</h2>
                      </button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-3">
         <button matStepperPrevious  class="btn w-100 orange-button">
              <h3 class="text-light">
                  CANCELAR
              </h3>
          </button>
      </div>
      <div class="col-3">
         <button matStepperPrevious  class="btn w-100 blue-button">
              <h3 class="text-light">
                  CONTINUAR
              </h3>
          </button>
      </div>
      <!-- <div class="col-3">
         <button matStepperPrevious  class="btn w-100 blue-button">
              <h3 class="text-light">
                  CONTINUAR
              </h3>
          </button>
      </div> -->
    </div>
  </div>
  `,
  styles: [

  ]
})
export class EntryReferenceComponent implements OnInit {
  @Input() service = null;

  constructor() { }

  ngOnInit(): void {
  }

}
