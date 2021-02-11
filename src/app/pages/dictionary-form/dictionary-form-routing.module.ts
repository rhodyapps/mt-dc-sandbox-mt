import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictionaryFormPage } from './dictionary-form.page';

const routes: Routes = [
  {
    path: '',
    component: DictionaryFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictionaryFormPageRoutingModule {}
