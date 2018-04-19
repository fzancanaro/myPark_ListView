import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheet, App} from 'ionic-angular';


import { PlacesDetailPage } from '../places-detail/places-detail';


@Component({
  selector: 'page-places-list',
  templateUrl: 'places-list.html'
})
export class PlacesListPage {
  actionSheet: ActionSheet;
  speakers = [];

  constructor(public app: App, public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  goToDetail(item) {
   this.navCtrl.push(PlacesDetailPage, item);
  } 
  
}
