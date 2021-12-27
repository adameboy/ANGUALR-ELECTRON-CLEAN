import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  private carrierSource = new BehaviorSubject({ carrier: '', amount: 0,number:''});
  currentCarrier = this.carrierSource.asObservable();


  constructor(private router: Router) { }

  changeCarrier(data: { carrier: string, amount: number,number:string}) {
    this.carrierSource.next(data);
  }

  isRechargeSelected() {
    if (this.carrierSource.value.carrier === '') this.router.navigate(['/recharge']);
    return this.carrierSource.value.carrier != '';
  }
}
