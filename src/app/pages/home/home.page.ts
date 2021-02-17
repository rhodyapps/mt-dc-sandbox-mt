import { Component, OnInit} from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from '../../pages/language-popover/language-popover.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {

  title = 'MEDITECH Dictionary Composer';

  lang: any;

  userInfo = null;

  constructor(public translate: TranslateService, private popoverCrtl: PopoverController, private alertCrtl: AlertController) {
 //   this.lang = '';
  //  this.translate.setDefaultLang('');
  //  this.translate.use('');
   }

   switchLanguage() {
    this.translate.use(this.lang);
  }

  async showAlert() {
    const alert = await this.alertCrtl.create({
header: this.translate.instant('ALERT.header'),
message: this.translate.instant('ALERT.msg'),
buttons: ['OK']

    });
    alert.present();
  }

  async openLanguagePopover(ev) {
const popover = await this.popoverCrtl.create({
  component: LanguagePopoverPage,
  event: ev
});

await popover.present();

  }

   /*
  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn(null);
    console.log('user: ', googleUser);
    this.userInfo = googleUser;
  }
*/

// googleSignIn() {

//}

  ngOnInit() {
  }

}
