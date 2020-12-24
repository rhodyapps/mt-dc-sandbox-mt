import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MisHolidayPageRoutingModule } from './mis-holiday-routing.module';
import { MisHolidayPage } from './mis-holiday.page';

import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisHolidayPageRoutingModule
  ],
  declarations: [MisHolidayPage]
})
export class MisHolidayPageModule {}
