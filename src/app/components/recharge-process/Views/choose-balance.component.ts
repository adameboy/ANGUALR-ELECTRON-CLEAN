import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HelpService } from '../../../services/help.service';

@Component({
    selector: 'app-choose-balance',
    template: `
  <div class="d-flex flex-column justify-content-between h-100">

             <!-- TITLE -->
             <div class="container text-center mt-5">
                <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
                    <!-- <i class='bx bx-plus-medical bx-sm blue mt-1'></i> -->
                    <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">{{title}}</h1>
                </div>
            </div>
            <!-- CARRIER IMAGE -->
            <div class="imageContainer text-center">
                <img class="mt-3 w-25" *ngIf="service" [src]="'data:image/jpeg;base64,'+service.Base64Imagen" alt="">
            </div>

            <div *ngIf="service" class="container">
                <div class="row">
                        <div *ngFor="let product of service.products" class="col-12">
                            <button (click)="selectProduct(product)"  matStepperNext class="btn w-100 priceContainer  text-center py-3 my-3">
                                <h1 class="p-0 m-0 blue">{{product.NombreProducto}}</h1>
                            </button>
                        </div>
                    </div>
            </div>



            <!-- <div class="container">
                <div class="row">
                    <div *ngFor="let price of prices" class="col-6">
                        <button (click)="setAmount(price)"  matStepperNext class="btn w-100 priceContainer  text-center py-3 my-3">
                            <h1 class="p-0 m-0 blue">{{price| currency : 'USD' : 'symbol' : '1.0-0' }}</h1>
                        </button>
                    </div>
                </div>
            </div> -->

            <div class="w-100 text-center mt-3">
                <button routerLink="/home" class="btn blue-button" style="width: 23%;">
                    <h3 class="text-light">
                        CANCELAR
                    </h3>
                </button>
            </div>
  </div>
  `,
    styles: [
    ]
})
export class ChooseBalanceComponent implements OnInit {
    @Input() title = null;
    @Input() service = null;
    dataCarrier = { carrier: '', amount: 0, number: '' };
    prices: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    subscription: Subscription = new Subscription();
    constructor(private route: ActivatedRoute, private helpService: HelpService) { }

    ngOnInit(): void {
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    selectProduct(product) {
        this.helpService.selectProduct(product);
    }



}
