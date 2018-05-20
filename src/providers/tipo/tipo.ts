import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { Tipo } from '../../model/tipo';
import { timeInterval } from 'rxjs/operator/timeInterval';
import { timeInterval } from 'rxjs/operator/timeInterval';

/*
  Generated class for the TipoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TipoProvider {
  
  private API = 'http://localhost:8080/SmartQueue/rest/';
  
  constructor(public http: Http) { }

  //Retorna todos os Tipos no banco
  getAllTipo(): Observable<Tipo[]>{
    let APIRoute = this.API + 'tipos';

    return this.http.get(APIRoute).map(res=>res.json())
      .catch(err=> Observable.throw(err.message));
  }

}
