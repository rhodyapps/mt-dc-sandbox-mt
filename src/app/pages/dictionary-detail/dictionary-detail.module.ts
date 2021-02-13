import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictionaryDetailPageRoutingModule } from './dictionary-detail-routing.module';

import { DictionaryDetailPage } from './dictionary-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DictionaryDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [DictionaryDetailPage]
})
export class DictionaryDetailPageModule {}
