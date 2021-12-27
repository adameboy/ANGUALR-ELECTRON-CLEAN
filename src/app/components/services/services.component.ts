import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
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

  services: string[] =
    ['services/luz', 'services/agua', 'services/tv',
      'services/internet', 'services/gas', 'services/telefono',
      'services/entretenimiento', 'services/tag', 'services/impuestos',
      'services/catalogo', 'services/otros',
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
