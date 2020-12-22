import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentListPage } from './recent-list.page';

const routes: Routes = [
  {
    path: '',
    component: RecentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentListPageRoutingModule {}
