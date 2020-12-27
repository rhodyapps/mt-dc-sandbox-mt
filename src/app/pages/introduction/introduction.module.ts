import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IntroductionPageRoutingModule } from './introduction-routing.module';
import { IntroductionPage } from './introduction.page';
// import { SignupPageModule } from '../signup/signup.module';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { LoginPageModule } from '../../pages/login/login.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionPageRoutingModule,
    SharedComponentsModule,
    LoginPageModule,
    TranslateModule
   // SignupPageModule
  ],
  declarations: [IntroductionPage]
})
export class IntroductionPageModule {}
