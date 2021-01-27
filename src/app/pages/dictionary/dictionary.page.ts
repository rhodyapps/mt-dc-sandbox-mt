/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Transaction } from '../../models/transaction';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})

export class DictionaryPage implements OnInit {
  
  model: any = {};

  // @Input() collection: string;
  collection: string;

  ref: AngularFirestoreCollection<Transaction>;
  transactions: Observable<Transaction[]>;

  constructor(public db: FirestoreService, private afs: AngularFirestore) { }

  ngOnInit() {
   // this.ref = this.afs.collection('transactions')
    // this.transactions = this.ref.valueChanges()
     this.transactions = this.db.col$('test');
     console.log('dictionary page init', this.collection);
     console.log('dictionary page collection:','hello');
  }

}
