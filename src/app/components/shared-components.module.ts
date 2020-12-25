import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBaseComponent } from './modal-base/modal-base.component';
import { IonicModule } from '@ionic/angular';
import { DictionaryFormComponent } from './dictionary-form/dictionary-form.component';

@NgModule({
  declarations: [ModalBaseComponent],
  imports: [CommonModule, IonicModule],
  exports: [ModalBaseComponent, DictionaryFormComponent],
})
export class SharedComponentsModule { }
  