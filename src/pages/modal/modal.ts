import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public nombre: string ;
  public edad: number;

  public constructor(public navParam: NavParams, public viewCtrl: ViewController) {

    this.nombre = this.navParam.get('nombre');
    this.edad = this.navParam.get('edad');

    console.log(this.nombre +' : '+ this.edad)
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  public cerrar_sin_parametros(){

    this.viewCtrl.dismiss( );
  }

  public cerrar_con_parametros(){
    let data = {
      nombre:"Alexader",
      edad: 10,
      coords: {
        lat: 10,
        lng: -10
      }
    };

    //Para cerrar un modal se requiere de la libreria ViewController y ajecutar el método dismiss
    this.viewCtrl.dismiss( data );
  }

}
