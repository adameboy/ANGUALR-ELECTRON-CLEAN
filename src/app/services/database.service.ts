import { Injectable } from '@angular/core';
import { Connection } from 'mysql';
import { BehaviorSubject } from 'rxjs';
import { ElectronService } from '../core/services/electron/electron.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  connection: Connection;
  public masVendidosSubject = new BehaviorSubject(null);
  masVendidos$ = this.masVendidosSubject.asObservable();
  public recargasSubject = new BehaviorSubject(null);
  recargas$ = this.recargasSubject.asObservable();
  public serviciosSubject = new BehaviorSubject(null);
  servicios$ = this.serviciosSubject.asObservable();
  constructor(
    private electron: ElectronService
  ) {

    this.connection = this.electron.mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'totem'
    });

    this.connection.connect(function (err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
    });


  }

  fillTableProveedoresServicios(data: any) {
    // data.forEach((item) => {
    //   var stmtString = `insert into cat_ProveedoresServicios(ID_ProveedorServicios,NombreServicio,Activo,FechaCreacion,UltimaActualizacion,Comision, Base64Imagen) 
    //   values (${item.id},'${item.nombre}',${item.activo},'${item.fechaCreacion}','${item.ultimaActualizacion}',8,'${item.base64Logo}')
    //   ON CONFLICT(ID_ProveedorServicios) DO UPDATE SET ID_ProveedorServicios=${item.id}, NombreServicio='${item.nombre}', Activo=${item.activo}, FechaCreacion='${item.fechaCreacion}', UltimaActualizacion='${item.ultimaActualizacion}', Comision=8, Base64Imagen='${item.base64Logo}'`;

    //   var stmt = this.db.prepare(stmtString);
    //   stmt.run();
    //   stmt.finalize();
    // });
    // console.log('finalize fill');
  }

  async getProvedoresServicios(query: string) {
    return new Promise<any[]>((resolve, reject) => {
      this.connection.query(query, function (err, result: any[], fields) {
        if (err) throw err;
        resolve(result);
      });
    });
  }

  getProductsOfService(idProvedor: number) {
    return new Promise<any[]>((resolve, reject) => {
      this.connection.query(`SELECT * FROM totem.cat_productos WHERE ID_ProveedorServicio = ${idProvedor};`, function (err, result: any[], fields) {
        if (err) throw err;
        resolve(result);
      });
    });
  }
  setProvedores(provedores: []) {
    this.masVendidosSubject.next(provedores);
  }
}
