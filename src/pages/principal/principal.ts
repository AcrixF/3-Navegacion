import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { Pagina2Page } from "../pagina2/pagina2";

/**
 * Generated class for the PrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  public pagina2: any = Pagina2Page;

  public constructor(public navCrtl: NavController ) {
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }


  public navegarPagina(){
    this.navCrtl.push( Pagina2Page );
  }

}
