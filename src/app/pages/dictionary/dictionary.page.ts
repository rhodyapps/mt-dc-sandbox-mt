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
import { DataService } from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})

export class DictionaryPage implements OnInit {
  
  model: any = {};
  col: any ='';

  // @Input() collection: string;
  collection = 'DC-MisHoliday';

  ref: AngularFirestoreCollection<Transaction>;
  transactions: Observable<Transaction[]>;

  constructor( private route: ActivatedRoute, private dataService: DataService,
               public db: FirestoreService, private afs: AngularFirestore) { 
                 const collection: Observable<string> = route.params.pipe(map(p => p.collection));
               }

  ngOnInit() {
   // this.ref = this.afs.collection('transactions')
    // this.transactions = this.ref.valueChanges()
this.col = this.dataService.getCollection();
console.log('dictionary page this col',this.col);
this.transactions = this.db.col$(this.collection);
console.log('dictionary page init', this.collection);
console.log('dictionary page collection:','hello');
  }

}
