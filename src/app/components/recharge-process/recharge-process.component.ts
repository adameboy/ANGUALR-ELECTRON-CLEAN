import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelpService } from '../../services/help.service';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-recharge-process',
  templateUrl: './recharge-process.component.html',
  styleUrls: ['./recharge-process.component.scss']
})
export class RechargeProcessComponent implements OnInit {
  subscription: Subscription;
  viewCoupon: boolean = false;
  constructor(private helpService: HelpService, private router: Router) { }

  ngOnInit(): void {
    // this.subscription = this.helpService.currentCarrier.subscribe(data => {
    //   console.log('esto trae data',data);
    //   if (data.carrier === '')
    //     return this.router.navigate(['/recharge']);
    // });
  }

  changeView(event:boolean){
    this.viewCoupon = event;
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  stepperEvent(stepper:MatStepper){
    stepper.next();
  }

}
