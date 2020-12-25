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


  constructor(private transactionService: TransactionService,
              private modalCtrl: ModalController,
              private routerOutlet: IonRouterOutlet ) { }

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

async PresentDocumentDetails() {
  const modal = await this.modalCtrl.create({
    component: ModalBaseComponent,
    presentingElement: this.routerOutlet.nativeEl,
    swipeToClose: true,
    componentProps: {
      rootPage: RecentDetailsPage,
    },
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
