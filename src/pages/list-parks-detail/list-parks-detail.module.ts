import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListParksDetailPage } from './list-parks-detail';

@NgModule({
  declarations: [
    ListParksDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ListParksDetailPage),
  ],
})
export class ListParksDetailPageModule {}
