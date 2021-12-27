import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HelpService } from '../services/help.service';

@Injectable({
  providedIn: 'root'
})
export class RechargeGuard implements CanActivate {
  constructor(private helperService: HelpService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.helperService.isRechargeSelected();
  }

}
