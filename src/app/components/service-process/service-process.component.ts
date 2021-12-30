import { Component, OnInit } from '@angular/core';
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
  `
  ]
})


export class ServiceProcessComponent implements OnInit {
  service = null;
  typeService: typeService = null;
  constructor(private helpService: HelpService) { }
  ngOnInit(): void {
    this.service = this.helpService.selectedService.value;
    switch (true) {
      case (this.service.products.length <= 1 && this.service.EsPin === 0):
        this.typeService = 'REF1'
        break;
      case (this.service.EsPin === 1):
        this.typeService = 'PREPAGO'
        break;
      default:
        this.typeService = 'REF2'
        break;
    }

  }


  async getProducts() {
    // this.dbService.
  }

}
