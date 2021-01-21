import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// For nested menus add this:
import { DataService } from './services/data.service';
import { LanguageService } from './services/language.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public appPages: any; // add this for nested menus

  // add these for nested menus
  showLevel1 = null;
  showLevel2 = null;
  showLevel3 = null;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private languageService: LanguageService,
    private data: DataService // add this for nested menus
  ) {
    this.initializeApp();
    // call this inside the constructor to initialize menus
    this.data.getData().subscribe((resp) => {
      this.appPages = resp;
      console.log("menu data resp: ",this.appPages);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.languageService.setInitialAppLanguage();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('home/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
      console.log("page",this.selectedIndex);
    }
  }
  clearLevel() {
    this.showLevel1 = null;
    this.showLevel2 = null;
    this.showLevel3 = null;
  }

  toggleLevel1(idx: string) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  }

  toggleLevel2(idx: string) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  }

  toggleLevel3(idx: string) {
    console.log('idx string: ', idx);
    if (this.isLevel3Shown(idx)) {
      this.showLevel3 = null;
      console.log('idx level 3 data: ', this.data);
    } else {
      this.showLevel2 = idx;
      this.showLevel3 = idx;
    }
  }

  isLevel1Shown(idx: string) {
    return this.showLevel1 === idx;
  }

  isLevel2Shown(idx: string) {
    return this.showLevel2 === idx;
  }

  isLevel3Shown(idx: string) {
    return this.showLevel3 === idx;
  }
}
