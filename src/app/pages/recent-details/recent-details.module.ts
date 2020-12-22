import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentDetailsPageRoutingModule } from './recent-details-routing.module';

import { RecentDetailsPage } from './recent-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentDetailsPageRoutingModule
  ],
  declarations: [RecentDetailsPage]
})
export class RecentDetailsPageModule {}
