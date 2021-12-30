import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { DatabaseService } from '../../services/database.service';
import { HelpService } from '../../services/help.service';


export type typeService = 'REF1' | 'REF2' | 'PREPAGO' | null;

@Component({
  selector: 'app-service-process',
  templateUrl: './service-process.component.html',
  styles: [`
  ::ng-deep .mat-horizontal-stepper-header-container {
    display: none !important;
  }
    ::ng-deep .mat-horizontal-content-container{
    height: 100%;
    }
    ::ng-deep .mat-horizontal-stepper-content{
    height: 100%;
    }
  `

  ]
})


export class ServiceProcessComponent implements OnInit {
  service = null;
  typeService: typeService = null;
  constructor(private helpService: HelpService) { }
  ngOnInit(): void {
    this.service = this.helpService.selectedService.value;
    console.log(this.service)
    switch (true) {
      case (this.service.products.length <= 1 && this.service.EsPin === 0):
        this.typeService = 'REF1'
        break;
      case (this.service.EsPin === 1 && this.service.products.length >= 1):
        this.typeService = 'PREPAGO'
        break;
      case (this.service.EsPin === 0 && this.service.products.length > 1):
        this.typeService = 'REF2'
        break;
    }

  }


  async getProducts() {
    // this.dbService.
  }

  stepperEvent(stepper: MatStepper) {
    stepper.next();
  }

}
