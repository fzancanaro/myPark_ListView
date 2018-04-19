import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListParksJsonPage } from './list-parks-json';

@NgModule({
  declarations: [
    ListParksJsonPage,
  ],
  imports: [
    IonicPageModule.forChild(ListParksJsonPage),
  ],
})
export class ListParksJsonPageModule {}
