import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'net';
import { ElectronService } from '../../core/services/electron/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  client: Socket;
  money = 0;
  services: string[] =
    ['cfe', 'virgin', 'tetv',
      'telcel', 'netflix', 'movistar',
      'cfe', 'virgin', 'tetv',
      'telcel', 'netflix', 'movistar']

  constructor(private router: Router,
    private ref: ChangeDetectorRef,
    private electron: ElectronService) { }

  ngOnInit(): void {
    console.log(this.electron.net)
    // this.client = new this.electron.net.Socket;
    // this.client.connect(2021, '192.168.1.156', () => {
    //   console.log('conexion iniciada');
    // });

    // this.client.on('data', (data) => {
    //   this.action(data)
    // })
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
