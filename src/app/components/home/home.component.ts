import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'net';
import { ElectronService } from '../../core/services/electron/electron.service';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../../services/database.service';
import { MAS_VENDIDOS } from '../../data/queries';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  client: Socket;
  money = 0;
  query = MAS_VENDIDOS;
  apiUrl = 'https://localhost:44378/Totem';
  services: string[] =
    ['cfe', 'virgin', 'tetv',
      'telcel', 'netflix', 'movistar',
      'cfe', 'virgin', 'tetv',
      'telcel', 'netflix', 'movistar'];
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b3RlbUB2ZW50ZWtzLmNvbSIsImp0aSI6IjY4NTZiYmIwLWZmNmItNDZmYS04ZTllLWRkNDcyYTNjOWY2ZiIsImVtYWlsIjoidG90ZW1AdmVudGVrcy5jb20iLCJNYWNoaW5lR1VJRCI6IkJEMzUwMEQ2LTk2OEMtNERGQS04NEZFLTk1NjJEMDlERTU2NyIsInVpZCI6ImE3MTFiODhkLTI3ODktNDhmOS1iNmY5LWJmOTgxM2NlYjc3YSIsInJvbGVzIjoiVG90ZW0iLCJleHAiOjE2NDA3ODEwMjYsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.Eok2BmIPYo4BG2HO70FFYVu9tpQJ3l2vZbYdUJVyd3o";
  constructor(private router: Router,
    private ref: ChangeDetectorRef,
    private httpClient: HttpClient,
    private dbService: DatabaseService,
    private electron: ElectronService) { }

  ngOnInit(): void {
    // this.client = new this.electron.net.Socket;
    // this.client.connect(2021, '192.168.1.156', () => {
    //   console.log('conexion iniciada');
    // });

    // this.client.on('data', (data) => {
    //   this.action(data)
    // })
  }



  // createProducts(items:any){
  //   items.forEach((item)=> {
  //     var stmtString = `insert into cat_GruposProductoProveedores(ID_GrupoProveedor,ID_ProveedorServicio,ID_GrupoProducto,EsPredeterminado) 
  //     values (${item.id},${item.iD_ProveedorServicio},${item.iD_GrupoProducto},${item.esPredeterminado})
  //     ON CONFLICT(ID_GrupoProveedor) DO UPDATE SET ID_GrupoProveedor=${item.id}, ID_ProveedorServicio=${item.iD_ProveedorServicio}, ID_GrupoProducto=${item.iD_GrupoProducto}, EsPredeterminado=${item.esPredeterminado}`;

  //     var stmt = this.db.prepare(stmtString);
  //     stmt.run();
  //     stmt.finalize();
  // })
  // }

  getAll() {
    this.httpClient.get(`${this.apiUrl}/GetAll`, {
      headers: { 'Authorization': `Bearer ${this.token}`, 'Access-Control-Allow-Origin': '*' },
    }).subscribe((data: any) => {
      this.dbService.fillTableProveedoresServicios(data.cat_ProveedoresServicios);
    });
  }

  action(data) {
    const order = JSON.parse(data.toString());
    console.log(JSON.parse(data.toString()));
    if (order.event) {
      switch (order.event.type) {
        case 'moneyInsertedEvent':
          this.money += order.event.data[0].value;
          this.ref.detectChanges()
          break;
        default:
          break;
      }
    }
  }

  openCoins() {
    let orden = { "version": "2.0", "method": "startMoneyInsertion", "params": { "amount": 253 }, "id": 1 }
    this.client.write(Buffer.from(JSON.stringify(orden)))
  }
  closeCoins() {
    let orden = { "version": "2.0", "method": "finishInsertion", "id": 2 };
    this.client.write(Buffer.from(JSON.stringify(orden)));
  }

  connect() {
    this.electron.ipcRenderer.send('connect')
  }
  disconnect() {
    this.electron.ipcRenderer.send('disconnect')
  }

}
