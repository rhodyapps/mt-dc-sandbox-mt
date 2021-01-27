import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Transaction } from '../../models/transaction';
import { FirestoreService } from '../../services/firestore.service';
import { DataService } from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})

export class DictionaryPage implements OnInit {

  model: any = {};

  collection: string;

  ref: AngularFirestoreCollection<Transaction>;
  transactions: Observable<Transaction[]>;

  constructor( private route: ActivatedRoute, private dataService: DataService,
               public db: FirestoreService, private afs: AngularFirestore) {}

  ngOnInit() {
this.route.params.subscribe(params => {
  this.collection = params.collection;
  console.log('dictionary page params.collection: ', params.collection);
});

this.transactions = this.db.col$(this.collection);

  }

}
