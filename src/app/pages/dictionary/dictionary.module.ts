import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictionaryPageRoutingModule } from './dictionary-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { DictionaryPage } from './dictionary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DictionaryPageRoutingModule
  ],
  declarations: [DictionaryPage]
})
export class DictionaryPageModule {}
