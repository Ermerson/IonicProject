import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Senha }      from '../../model/senha';
import { Http } from '@angular/http';
import { Tipo } from '../../model/tipo';
import { Servico } from '../../model/servico';

/*
  Generated class for the SenhaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SenhaProvider {

  private API = "http://localhost:3000/";

  constructor(public http: Http) { }

  getSenha(tipo: Tipo, servico: Servico): Observable<Senha[]>{
    
    let APIRoute = this.API + 'Senha?' + 'tipo.id=${tipo.id}&servico.id=${servico.id}';

    return this.http.get(APIRoute).map(res=>res.json())
      .catch(err=> Observable.throw(err.message));
  }

}
