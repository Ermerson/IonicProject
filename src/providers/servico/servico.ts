import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Servico } from '../../model/servico';

/*
  Generated class for the ServicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicoProvider {

  private API = 'http://localhost:8080/SmartQueue/rest/';

  constructor(public http: Http) {  }

  //Retorna todos os Serviços do banco
  getAllServico(): Observable<Servico[]>{
    let APIRoute = this.API + 'servicos';

    return this.http.get(APIRoute).map(res=>res.json())
      .catch(err=> Observable.throw(err.message));
  }

}
