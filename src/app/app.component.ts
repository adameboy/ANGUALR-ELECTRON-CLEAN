import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { DatabaseService } from './services/database.service';
import { MAS_VENDIDOS, RECARGAS, SERVICIOS } from './data/queries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private dbService: DatabaseService
  ) {
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    if (electronService.isElectron) {
    } else {
    }
  }

  async ngOnInit() {
    this.dbService.masVendidosSubject.next(await this.dbService.getProvedoresServicios(MAS_VENDIDOS));
    this.dbService.recargasSubject.next(await this.dbService.getProvedoresServicios(RECARGAS));
    this.dbService.serviciosSubject.next(await this.dbService.getProvedoresServicios(SERVICIOS));
  }

}

