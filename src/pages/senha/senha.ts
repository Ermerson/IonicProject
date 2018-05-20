import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Servico } from '../../model/servico';
import { Tipo } from '../../model/tipo';

/**
 * Generated class for the SenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-senha',
  templateUrl: 'senha.html',
})
export class SenhaPage {

  tipo: Tipo;
  servico: Servico;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = this.navParams.get("tipoSelecionado");
    this.servico = this.navParams.get("servicoSelecionado");
  }

  ionViewDidLoad() {
    console.log('Pagina Senha - ',this.tipo, this.servico);
  }

}
