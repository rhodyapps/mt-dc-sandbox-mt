import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisHolidayPage } from './mis-holiday.page';

const routes: Routes = [
  {
    path: '',
    component: MisHolidayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisHolidayPageRoutingModule {}
