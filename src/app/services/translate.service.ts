/*
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class TranslateService {

  constructor(private db: AngularFireDatabase) { }


  createTranslation(text: string): FirebaseObjectObservable<any> {
    // create new translation, then return it as an object observable
    const data = { 'english': text }

    const key = this.db.list('/translations').push(data).key

    return this.db.object(`translations/${key}`)
  }


}
*/

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map  } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }

  createTranslation() {
    console.log.('Translate');
  }
    
   
}
