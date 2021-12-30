import { Component, OnInit } from '@angular/core';
import { RECARGAS } from '../../data/queries';

@Component({
  selector: 'app-recharges',
  templateUrl: './recharges.component.html',
  styleUrls: ['./recharges.component.scss']
})
export class RechargesComponent implements OnInit {
  query = RECARGAS;
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

  services: string[] =
    ['telcel', 'movistar', 'virgin',
      'telcel', 'movistar', 'virgin',
      'telcel', 'movistar', 'virgin',
      'telcel', 'movistar', 'virgin'
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
