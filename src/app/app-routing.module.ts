import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechargeGuard } from './guards/recharge.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'recharges',
    loadChildren: () => import('./components/recharges/recharges.module').then(m => m.RechargesModule)
  },
  {
    path: 'recharge-process',
    canActivate:[RechargeGuard],
    loadChildren: () => import('./components/recharge-process/recharge-process.module').then(m => m.RechargeProcessModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./components/support/support.module').then(m => m.SupportModule)
  },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
