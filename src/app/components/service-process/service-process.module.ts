import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProcessRoutingModule } from './service-process-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ServiceProcessComponent } from './service-process.component';
import { EntryReferenceComponent } from './entry-reference.component';


@NgModule({
  declarations: [ServiceProcessComponent, EntryReferenceComponent],
  imports: [
    CommonModule,
    ServiceProcessRoutingModule,
    SharedModule
  ]
})
export class ServiceProcessModule { }
