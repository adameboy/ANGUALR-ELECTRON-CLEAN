import { Component, Input, OnInit } from '@angular/core';
import { HelpService } from '../../../services/help.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entry-number',
  template: `
<div class="d-flex flex-column justify-content-between h-100">

  <!-- TITLE -->
  <div class="container text-center mt-5">
     <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
         <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">NÚMERO DE CUENTA</h1>
     </div>
 </div>
 <!-- CARRIER IMAGE -->
    <div class="container text-center my-3">
        <div class="row gx-5">
            <div class="col-6">
                <div class="imageContainer text-center">
                <img class="mt-3 w-50" *ngIf="service" [src]="'data:image/jpeg;base64,'+service.Base64Imagen" alt="">
                </div>
            </div>
            <div *ngIf="product" class="col-6 grayContainer my-3">
                <h1 class="blue m-0 p-0" style="font-weight: 700;">{{service.NombreServicio}} {{product.Monto| currency : 'USD' : 'symbol' : '1.0-0' }}</h1>
            </div>
        </div>
    </div>
 
 <div class="container mb-3">
    <div class="form-group round">
      <label for="exampleFormControlSelect1">
        <span class="blue">Número de teléfono:</span>
      </label>
      <input id="phoneNumber" class="form-control form-control-lg py-4" type="text" placeholder="39213671823">
    </div>
 </div>

 <!-- DPAD # -->
 <div class="container">
   <div class="row m-0 p-0 justify-content-center">
      <div class="col-12">
        <div class="row m-0 p-0">
          <div *ngFor="let number of [1,2,3,4,5,6,7,8,9,'BORRAR',0,'X']" class="col-4">
            <button (click)="pressPad(number)" class="btn w-100 priceContainer  text-center my-2 padNumber">
              <h2 class="p-0 m-0 blue">{{number}}</h2>
            </button>
          </div>
        </div>
      </div>
   </div>
 </div>


 <div class="row m-0 p-0 justify-content-center mt-3">
   <div class="col-9">
     <div class="row m-0 p-0">
       <div class="col-4">
        <button matStepperPrevious  class="btn w-100 orange-button">
            <h3 class="text-light">
                REGRESAR
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
        <button (click)="setNumber()" matStepperNext  class="btn w-100 blue-button">
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
export class EntryNumberComponent implements OnInit {
  constructor(private helpService: HelpService) { }
  @Input() service = null;
  product = null;
  subscription: Subscription = new Subscription();
  input: HTMLInputElement;
  ngOnInit(): void {
    this.subscription = this.helpService.productSelectedSubject.subscribe(data => this.product = data);
  }

  ngAfterViewInit(): void {
    this.input = <HTMLInputElement>document.getElementById('phoneNumber');
  }

  pressPad(action: string | number) {
    if (action === 'BORRAR' || action === 'X') {
      this.input.value = this.input.value.slice(0, -1);
    } else {
      this.input.value += action;
    }
  }

  setNumber() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
