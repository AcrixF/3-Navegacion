import { Component } from '@angular/core';
import { Platform , MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from "../pages/index.paginas";
import {TabsPage} from "../pages/tabs/tabs";
import { Ajustes2Page } from '../pages/ajustes2/ajustes2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any = TabsPage;
  public tabs: any = TabsPage;
  public ajustes2: any = Ajustes2Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuController: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public abrirPagina(pagina : any){
    //Debido al menu se debe seleccionar que pagina sera el root, por ello se debe asignar a la variable.
    this.rootPage = pagina;
    //Para agregar el efecto del menu al selecciona la nueva pagina se debe agregar la siguiente instrucción.
    this.menuController.close();
  }
}

