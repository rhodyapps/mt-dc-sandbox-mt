import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { DbService } from 'src/app/services/db.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-dictionary-form',
  templateUrl: './dictionary-form.page.html',
  styleUrls: ['./dictionary-form.page.scss'],
})
export class DictionaryFormPage implements OnInit {
  item$;

  transaction: Transaction = {
    project: 'test',
    collection: 'DC-Mis-Holiday',
    name: 'name',
    mnemonic: 'mnemonic',
    active: 'Y',
    createdAt: new Date().getTime(),
    priority: 2,
    notes: ''
  };

  transactionId = null;
  modalCtrl: any;

  constructor(private route: ActivatedRoute, private db: FirestoreService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.item$ = this.db.doc$(`items/${id}`);
    console.log('form page ', id);
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    console.log('dismissModal');
  }

  saveTransaction() {
console.log('save traansaction');
  }
}
