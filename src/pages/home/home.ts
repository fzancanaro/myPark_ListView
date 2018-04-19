import { Component } from '@angular/core';
import { ActionSheet, App, NavController } from 'ionic-angular';
import { PlacesListPage } from '../places-list/places-list';
import { ListParksJsonPage } from '../list-parks-json/list-parks-json';
import { ListParksDetailPage } from '../list-parks-detail/list-parks-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  actionSheet: ActionSheet;
  speakers = [];

  constructor(public app: App, public navCtrl: NavController) {}

  ionViewDidLoad() {}

  goToPlacesListPage(item) {
    this.navCtrl.push(PlacesListPage, item);
  }

  goToListParksJsonPage(item) {
    this.navCtrl.push(ListParksJsonPage, item);
  }

  goToListParksDetailPage(item) {
    this.navCtrl.push(ListParksDetailPage, item);
  }
}
