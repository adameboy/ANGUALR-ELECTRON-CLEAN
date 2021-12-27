import { Component, Input, OnInit } from '@angular/core';
import { HelpService } from '../../services/help.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() title = '';
  @Input() services = [];
  carrierSelected = '';
  routes = [{
    name: 'VENDIDOS',
    route: '/home'
  },
  {
    name: 'RECARGAS',
    route: '/recharges'
  },
  {
    name: 'SERVICIOS',
    route: '/services'
  },
  {
    name: 'REPORTAR PROBLEMA',
    route: '/support'
  },
  ];

  setCarrier(carrier: string) {
    this.helpService.changeCarrier({ carrier, amount: 0 ,number:''});
  }
  constructor(private helpService: HelpService) { }

  ngOnInit(): void {
  }

}
