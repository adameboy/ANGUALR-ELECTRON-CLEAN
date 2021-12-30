import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  public productSelectedSubject = new BehaviorSubject(null);
  public selectedService = new BehaviorSubject(null);
  currentService = this.selectedService.asObservable();
  productSelected$ = this.productSelectedSubject.asObservable();


  constructor(private router: Router) { }

  selectProduct(data:any) {
    this.productSelectedSubject.next(data);
  }

  // isRechargeSelected() {
  //   if (this.carrierSource.value.carrier === '') this.router.navigate(['/recharge']);
  //   return this.carrierSource.value.carrier != '';
  // }

  setConsultService(products: any[]) {
    this.selectedService.next(products);
  }

  isServiceSelected(){
    if (!this.selectedService.value) this.router.navigate(['/home']);
    return this.selectedService.value != null;
  }
}
