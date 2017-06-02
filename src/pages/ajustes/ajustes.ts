import { Component } from '@angular/core';
import {ModalController, NavController} from "ionic-angular";
import {ModalPage} from "../modal/modal";

/**
 * Generated class for the AjustesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  public constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  public activarPrincipal(){
    //Esta linea permite redirigir hacia algun elemento del tab, el indice de la funcion define que a que elemento dirigirse
    this.navCtrl.parent.select(0);
  }

  public activarModal(){
    //Se crea el modal con la pagina, despues se manda a llamar con el método present()
    //A un modal puede llevar parametros
    let modal = this.modalCtrl.create( ModalPage, { nombre:'Neoa', edad:27} );

    //Se crea el modal
    modal.present();

    //La funcion onDidmiss permite cerrar el modal tambien puede cachar los parametros que se envian de regreso
    modal.onDidDismiss( parametros => {
      if( parametros) {
        console.log('Parametros: ' + parametros);
      }else{
        console.log('Se cerro sin parametros.');
      }
    });


  }


}
