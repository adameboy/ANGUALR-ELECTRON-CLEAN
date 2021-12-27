import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../../services/help.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entry-number',
  template: `
  <!-- TITLE -->
  <div class="container text-center">
     <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
         <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">NÚMERO DE CUENTA</h1>
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
            <button (click)="pressPad(number)" class="btn w-100 priceContainer  text-center my-3 padNumber">
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
`,
  styles: [
  ]
})
export class EntryNumberComponent implements OnInit {
  constructor(private helpService: HelpService) { }
  dataCarrier = { carrier: '', amount: 0, number: '' };
  subscription: Subscription;
  input: HTMLInputElement;
  ngOnInit(): void {
    this.subscription = this.helpService.currentCarrier.subscribe(data => this.dataCarrier = data);
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
    this.helpService.changeCarrier({ ...this.dataCarrier, number: this.input.value })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
