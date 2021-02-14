import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../../models/transaction';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-recent-details',
  templateUrl: './recent-details.page.html',
  styleUrls: ['./recent-details.page.scss'],
})
export class RecentDetailsPage implements OnInit {

  
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
  // item: {};
  
  // itemForm: FormGroup;
  item: {[key: string]: string };

  collection: string;
 
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, public nav: NavController, private transactionService: TransactionService, private loadingController: LoadingController) { }
 
  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    const data = {
      content: '',
      status: 'pending',
      ...this.item
    };

    this.transactionId = this.route.snapshot.params['id'];
    
    this.itemInit();
    console.log('recent details page ', this.item);
    if (this.transactionId)  {
      this.loadTransaction();
      console.log('load transaction ', this.transaction);
    }
  }

  itemInit() {
    console.log('itemInit item: ', this.item);
   // this.transaction.project =  this.item.project;
    this.transaction.collection = this.collection;
    /*
    this.transaction.mtUniverse = this.item.MT_Universe;
    this.transaction.mtDatabase = this.item.MT_Database;
    this.transaction.mtDictionary = this.item.MT_Dictionary;
    this.transaction.mtHcis = this.item.MT_HCIS;
    // this.transaction.id = this.transactionId;
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
    */
    console.log('itemInit: transaction', this.transaction);
  
  }
  

  async loadTransaction() {
    const loading = await this.loadingController.create({
      message: 'Loading Transaction...',
    });
    await loading.present();
 
    this.transactionService.getTransaction(this.transactionId).subscribe(res => {
      loading.dismiss();
      this.transaction = res;
    });
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

      this.transactionService.addTransaction(this.transaction).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }
}
