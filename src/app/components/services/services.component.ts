import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  routes = [{
    name:'VENDIDOS',
    route:'/home'
  },
  {
    name:'RECARGAS',
    route:'/recharges'
  },
  {
    name:'SERVICIOS',
    route:'/services'
  },
  {
    name:'REPORTAR PROBLEMA',
    route:'/support'
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
