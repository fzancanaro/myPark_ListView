import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { PlacesListPage } from '../pages/places-list/places-list';
import { PlacesDetailPage } from '../pages/places-detail/places-detail';
import { HttpClientModule } from '@angular/common/http';
import { ListParksJsonPage } from '../pages/list-parks-json/list-parks-json';
import { ListParksDetailPage } from '../pages/list-parks-detail/list-parks-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacesListPage,
    ListParksJsonPage,
    ListParksDetailPage,
    PlacesDetailPage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListParksJsonPage,
    PlacesListPage,
    ListParksDetailPage,
    PlacesDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
