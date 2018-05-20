import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SenhaPage } from '../pages/senha/senha';
import { SenhaPageModule} from '../pages/senha/senha.module';

import { HttpModule } from "@angular/http";
import { TipoProvider } from '../providers/tipo/tipo';
import { ServicoProvider } from '../providers/servico/servico';
import { SenhaProvider } from '../providers/senha/senha';
import { AtendimentoProvider } from '../providers/atendimento/atendimento';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SenhaPageModule,
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SenhaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TipoProvider,
    ServicoProvider,
    SenhaProvider,
    AtendimentoProvider,
  ]
})
export class AppModule {}
