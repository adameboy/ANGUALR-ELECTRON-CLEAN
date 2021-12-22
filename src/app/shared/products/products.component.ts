import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() title = ''; // decorate the property with @Input()
  @Input() services = []; // decorate the property with @Input()

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
  constructor() { }

  ngOnInit(): void {
  }

}
