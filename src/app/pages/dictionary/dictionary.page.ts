import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Transaction } from '../../models/transaction';
import { FirestoreService } from '../../services/firestore.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})

export class DictionaryPage implements OnInit {

  @Input() collection: string;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
  ];

  ref: AngularFirestoreCollection<Transaction>;
  transactions: Observable<Transaction[]>;

  constructor(public db: FirestoreService, private afs: AngularFirestore) { }

  ngOnInit() {
   // this.ref = this.afs.collection('transactions')
    // this.transactions = this.ref.valueChanges()
    console.log('ngonInitBegin:', this.collection);
    this.transactions = this.db.col$('transactions');
    this.collection = 'test';
    console.log('ngonInitEnd:', this.collection);

  }

}
