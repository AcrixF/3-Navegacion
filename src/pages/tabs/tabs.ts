import { Component } from '@angular/core';
import {  PrincipalPage, AjustesPage} from '../index.paginas';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tab1 : any;
  public tab2: any;

  public constructor() {

    this.tab1 = PrincipalPage;
    this.tab2 = AjustesPage;

  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }



}
