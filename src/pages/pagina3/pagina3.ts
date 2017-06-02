import { Component } from '@angular/core';
import { NavParams, NavController} from "ionic-angular";

/**
 * Generated class for the Pagina3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  public mutante: any = {};

  public constructor(private navParams: NavParams, private navController:NavController) {

    console.log( navParams );

    this.mutante = navParams.get('mutante');

  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

  public irAtras() {
    this.navController.pop();
  }


  public irRoot(){
    this.navController.popToRoot();
  }

}
