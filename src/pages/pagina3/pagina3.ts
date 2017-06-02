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
    //La librerio NavController permite obtener los parametros que son enviados de la pagina anterior, se debe relizar una validacion
    //para que podamos determinar si esta trae o no los parametros.
    this.mutante = navParams.get('mutante');

  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

  public irAtras() {
    //Al importar la libreria NavController, podemos utilizar el método pop() para regresar a la página anterior,
    this.navController.pop();
  }


  public irRoot(){
    //De igual forma la librerio NavController permite al usuario regresar hasta la pagina del root con el método popToRoot()
    this.navController.popToRoot();
  }

}
