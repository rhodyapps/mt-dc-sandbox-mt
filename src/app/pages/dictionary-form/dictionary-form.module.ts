import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictionaryFormPageRoutingModule } from './dictionary-form-routing.module';

import { DictionaryFormPage } from './dictionary-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DictionaryFormPageRoutingModule
  ],
  declarations: [DictionaryFormPage]
})
export class DictionaryFormPageModule {}
