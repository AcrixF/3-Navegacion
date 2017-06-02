import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {Pagina3Page} from "../pagina3/pagina3";
/**
 * Generated class for the Pagina2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  public pagina3: any = Pagina3Page;

  public mutantes: any[] = [

    { nombre: 'Magneto',
      poder: 'Controlar Metales'
    },
    { nombre: 'Wolvering',
      poder:'Regeneración'
    },
    { nombre: 'Profesor X',
      poder: 'Poderes psíquicos'
    },
    { nombre: 'Gambito',
      poder:'Jugar a las cartas'
    },

  ];

  public constructor(public navCtrl : NavController) {
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  public irPagina3( mutante: any){
    console.log( mutante );
    this.navCtrl.push( Pagina3Page, { 'mutante': mutante} );
  }

}
