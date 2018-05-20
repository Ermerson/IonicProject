import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tipo } from '../../model/tipo';
import { Servico } from '../../model/servico';
import { TipoProvider } from '../../providers/tipo/tipo';
import { ServicoProvider } from '../../providers/servico/servico';
import { SenhaPage } from '../senha/senha';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tipos :Tipo[];
  public servicos: Servico[];
  private tipo: Tipo;
  private servico: Servico;

  private  intervalTimeUp = Observable.interval(2000); 

  constructor(public navCtrl: NavController, 
              private tipoProvider: TipoProvider, 
              private servicoProvider: ServicoProvider) {

    this.carregarTipos();
    this.carregarServicos();
    
    this.intervalTimeUp.subscribe( () => { this.carregarTipos(); this.carregarServicos();});
  }

  carregarTipos(){
    this.tipoProvider.getAllTipo().subscribe(tipos => this.tipos = tipos,
      error => console.log('ERRO: GetAllTipos, problemas para carregar os Tipos'));
  }

  carregarServicos(){
    this.servicoProvider.getAllServico().subscribe(servicos => this.servicos = servicos,
      error => console.log('ERRO: GetAllServicos, problemas para carregar os Servicos'));
  }

  irParaGerarSenha(_tipo : number, _servico : number):void{
    this.tipo = this.tipos.find((tipo) => tipo.id == _tipo);
    this.servico = this.servicos.find((servico) => servico.id == _servico);
    console.log(this.tipo, " - " , this.servico);
    this.navCtrl.push(SenhaPage, { tipoSelecionado: this.tipo, servicoSelecionado: this.servico})
  } 

}
