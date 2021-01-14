import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictionaryPageRoutingModule } from './dictionary-routing.module';

import { DictionaryPage } from './dictionary.page';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyForm, FormlyModule } from '@ngx-formly/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DictionaryPageRoutingModule,
    ReactiveFormsModule,
    FormlyForm,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  declarations: [DictionaryPage]
})
export class DictionaryPageModule {}
