import { Component } from '@angular/core';
import { MenuController , NavController } from 'ionic-angular';

/**
 * Generated class for the Ajustes2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajustes2',
  templateUrl: 'ajustes2.html',
})
export class Ajustes2Page {

  public constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Ajustes2Page');
  }


}
