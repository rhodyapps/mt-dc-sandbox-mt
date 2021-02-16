import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../../models/transaction';
import {
  ModalController,
  IonRouterOutlet,
  ActionSheetController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalBaseComponent } from '../../components/modal-base/modal-base.component';
import { RecentDetailsPage } from '../../pages/recent-details/recent-details.page';

@Component({
  selector: 'app-recent-list',
  templateUrl: './recent-list.page.html',
  styleUrls: ['./recent-list.page.scss'],
})

export class RecentListPage implements OnInit {

  transactions: Transaction[];

  private Transactions: Observable<Transaction[]>;

  collection = 'transactions';

  constructor(private transactionService: TransactionService,
              private modalCtrl: ModalController,
              private routerOutlet: IonRouterOutlet) { }

 // ngOnInit() {
  //  this.Transactions = this.transactionService.getTransactions();
  //}


ngOnInit() {
  this.transactionService.getTransactions().subscribe(res => {
    this.transactions = res;
  });
}

remove(item: { id: any; }) {
  this.transactionService.removeTransaction(item.id);
}

get(item: { id: any; }) {
  this.transactionService.getTransaction(item.id);
}
/*
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
*/

async PresentDocumentDetails(item?: any, collection?: any) {
  console.log('recents - present document details item', item);
  console.log('present form item:', item, 'collection ', this.collection);
  collection = this.collection;
  const modal = await this.modalCtrl.create({
    component: ModalBaseComponent,
    presentingElement: this.routerOutlet.nativeEl,
    swipeToClose: true,
    componentProps: { rootPage: RecentDetailsPage, item, collection }
  //  componentProps: {
   //   rootPage: RecentDetailsPage,
  //  },
  });

  await modal.present();
}
/*
async presentDocumentForm(document?: any) {
  const modal = await this.modal.create({
    component: DocumentFormComponent,
    componentProps: { document },
  });
  
  console.log(document);

  return await modal.present();
}
*/

}
