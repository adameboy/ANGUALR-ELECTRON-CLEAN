import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { HelpService } from '../../services/help.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


export type MenuOptions = 'MÁS VENDIDOS' | 'RECARGAS' | 'SERVICIOS' | 'REPORTAR UN PROBLEMA' | '';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() title: MenuOptions = '';
  @Input() visible = true;
  @Input() query = '';
  carrierSelected = '';

  servicios: any[] = [];
  subscription: Subscription = new Subscription();

  setCarrier(carrier) {
    console.log(carrier.ID_GrupoProducto)
    // this.helpService.changeCarrier({ carrier, amount: 0 ,number:''});
  }
  constructor(
    private dbService: DatabaseService,
    private helpService: HelpService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProvedoresServicios();
  }

  ngAfterViewInit(): void {
    // let height = document.querySelector('.content').clientHeight
    // let container = document.getElementById('containerServices');
    // console.log(height*4);
    // container.style.maxHeight = '400px';
    // console.log(container.clientHeight)

  }

  async redirect(service) {
    let products = await this.dbService.getProductsOfService(service.ID_ProveedorServicios);
    this.helpService.setConsultService({ products: [...products], ...service });
    if (service.ID_GrupoProducto === 13) {
      this.router.navigate(['/service-process']);
    } else {
      this.router.navigate(['/recharge-process'])
    }
  }

  async getProvedoresServicios() {
    switch (true) {
      case (this.title === 'MÁS VENDIDOS'):
        this.subscription = this.dbService.masVendidos$.subscribe(servicios => this.servicios = servicios);
        break;
      case (this.title === 'RECARGAS'):
        this.subscription = this.dbService.recargas$.subscribe(servicios => this.servicios = servicios);
        break;
      case (this.title === 'SERVICIOS'):
        this.subscription = this.dbService.servicios$.subscribe(servicios => this.servicios = servicios);
        break;
    }
  }

  ngOnDestroy(): void {
    console.log('desuscrito')
    this.subscription.unsubscribe();
  }
}
