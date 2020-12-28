import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService, private storage: Storage) { }

  setInitialAppLanguage() {
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {

      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
      else
      {
        this.setLanguage('en');
        this.selected = 'en';
      }
    });
  }

getLanguages() {
  return [
    { text: 'English', value: 'en', img: 'assets/imgs/flags/us.png'},
    { text: 'French', value: 'fr', img: 'assets/imgs/flags/fr.png'},
    { text: 'Spanish', value: 'es', img: 'assets/imgs/flags/es.png'},
    { text: 'Dutch', value: 'nl', img: 'assets/imgs/flags/nl.png'},
    { text: 'Urdu', value: 'ur', img: 'assets/imgs/flags/pk.png'},
    { text: 'Estonian', value: 'et', img: 'assets/imgs/flags/et.png'}
  ];

}

  setLanguage(lng) {
    console.log('language service: ',lng);
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);

  }
}
