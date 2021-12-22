import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'recharges',
    loadChildren: () => import('./components/recharges/recharges.module').then(m => m.RechargesModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule)
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
