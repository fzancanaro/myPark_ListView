import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@Component({
  selector: 'page-places-detail',
  templateUrl: 'places-detail.html'
})
export class PlacesDetailPage {
  place: any;

  constructor(public navParams: NavParams, public app: App) {
    this.place = navParams.data;
  }
}
