import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../../models/transaction';


@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.page.html',
  styleUrls: ['./dictionary-detail.page.scss'],
})
export class DictionaryDetailPage implements OnInit {


  constructor(private db: FirestoreService,
              private route: ActivatedRoute,
              private modal: ModalController,
              public nav: NavController,
              private transactionService: TransactionService, 
              private loadingController: LoadingController,
              private fb: FormBuilder) { }

              itemForm: FormGroup;
              item: {[key: string]: string };

              collection: string;

              transaction: Transaction = {
                project: 'test',
                collection: '',
                mtMnemonic: '',
                mtName: '',
                mtActive: '',
                createdAt: new Date().getTime(),
                mtExportTime: '',
                mtHcis: '',
                mtModifiedTime: '',
                mtOid: '',
                mtRelease: '',
                mtUniverse: '',
                priority: 2,
                notes: ''
              };

              transactionId = null;

  ngOnInit() {

    const data = {
      content: '',
      status: 'pending',
      ...this.item
    };
    this.itemInit();
    console.log('detail form collection ', this.collection, ' data ', data);
    this.itemForm = this.fb.group(
      {
        content: [
          data.content,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(250)
          ]
        ],
        status: [data.status, [Validators.required]]
      }
    );
  }

itemInit() {
  console.log('itemInit item: ', this.item);
 // this.transaction.project =  this.item.project;
  this.transaction.collection = this.collection;
  this.transaction.mtUniverse = this.item.MT_Universe;
  this.transaction.mtDatabase = this.item.MT_Database;
  this.transaction.mtDictionary = this.item.MT_Dictionary;
  this.transaction.mtHcis = this.item.MT_HCIS;
  this.transaction.id = this.transactionId;
  this.transaction.mtMnemonic = this.item.Mnemonic;
  this.transaction.mtName = this.item.Name;
  this.transaction.mtActive = this.item.Active;
  // this.transaction.createdAt: new Date().getTime(),
  // mtExportTime: '',
  // mtHcis: '',
  this.transaction.mtModifiedTime = this.item.MT_ModifiedTime;
  this.transaction.mtOid = this.item.MT_OID;
  this.transaction.mtRelease = this.item.MT_Release;
  this.transaction.mtUniverse = this.item.MT_Universe;
  console.log('itemInit: ', this.transaction);

}

async saveTransaction() {
 
  const loading = await this.loadingController.create({
    message: 'Saving Transaction..'
  });
  await loading.present();

  if (this.transactionId) {
    this.transactionService.updateTransaction(this.transaction, this.transactionId).then(() => {
      loading.dismiss();
      this.nav.navigateBack('home');
    });
  } else {
    console.log('add this transaction: ', this.transaction);
    this.transactionService.addTransaction(this.transaction).then(() => {
      loading.dismiss();
      this.nav.navigateBack('home');
    });
  }
}

}
