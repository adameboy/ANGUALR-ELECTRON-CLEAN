import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelpService } from '../../services/help.service';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { typeService } from '../service-process/service-process.component';

@Component({
  selector: 'app-recharge-process',
  templateUrl: './recharge-process.component.html',
  styleUrls: ['./recharge-process.component.scss']
})
export class RechargeProcessComponent implements OnInit {
  service = null;
  typeService: typeService = 'PREPAGO';
  subscription: Subscription = new Subscription();
  viewCoupon: boolean = false;
  constructor(private helpService: HelpService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.helpService.selectedService.subscribe(data => this.service = data);
  }

  changeView(event: boolean) {
    this.viewCoupon = event;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  stepperEvent(stepper: MatStepper) {
    stepper.next();
  }

}
