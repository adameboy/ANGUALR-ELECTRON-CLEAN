import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProcessComponent } from './service-process.component';

const routes: Routes = [
  {path:'',component:ServiceProcessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProcessRoutingModule { }
