import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentListPageRoutingModule } from './recent-list-routing.module';

import { RecentListPage } from './recent-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentListPageRoutingModule
  ],
  declarations: [RecentListPage]
})
export class RecentListPageModule {}
