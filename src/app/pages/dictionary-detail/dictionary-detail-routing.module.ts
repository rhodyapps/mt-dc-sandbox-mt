import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictionaryDetailPage } from './dictionary-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DictionaryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictionaryDetailPageRoutingModule {}
