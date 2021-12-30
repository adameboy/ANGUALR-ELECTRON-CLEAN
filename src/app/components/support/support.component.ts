import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  routes = [{
    name: 'MÁS VENDIDOS',
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
