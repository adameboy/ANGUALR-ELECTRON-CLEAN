import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HelpService } from '../../../services/help.service';

@Component({
    selector: 'app-choose-balance',
    template: `
             <!-- TITLE -->
             <div class="container text-center">
                <div class="w-100 vendidos py-1 d-flex align-items-center justify-content-center">
                    <!-- <i class='bx bx-plus-medical bx-sm blue mt-1'></i> -->
                    <h1 class="blue m-0 p-0 ms-3" style="font-weight: 700;">RECARGAS</h1>
                </div>
            </div>
            <!-- CARRIER IMAGE -->
            <div *ngIf="dataCarrier.carrier!=''" class="container text-center my-5">
                <img [src]='"assets/"+dataCarrier.carrier+".svg"' alt="">
            </div>



            <div class="container">
                <!-- BUTTONS PRICE -->
                <div class="row">
                    <div *ngFor="let price of prices" class="col-6">
                        <button (click)="setAmount(price)"  matStepperNext class="btn w-100 priceContainer  text-center py-3 my-3">
                            <h1 class="p-0 m-0 blue">{{price| currency : 'USD' : 'symbol' : '1.0-0' }}</h1>
                        </button>
                    </div>
                </div>
            </div>

            <div class="w-100 text-center mt-3">
                <button routerLink="/recharges" class="btn blue-button" style="width: 23%;">
                    <h3 class="text-light">
                        CANCELAR
                    </h3>
                </button>
            </div>
  `,
    styles: [
    ]
})
export class ChooseBalanceComponent implements OnInit {
    dataCarrier = {carrier:'',amount:0,number:''};
    prices: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    subscription: Subscription;
    constructor(private route: ActivatedRoute, private helpService: HelpService) { }

    ngOnInit(): void {
        this.subscription = this.helpService.currentCarrier.subscribe(data =>this.dataCarrier = data);
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    setAmount(amount:number){
        this.helpService.changeCarrier({...this.dataCarrier,amount})
    }

}
