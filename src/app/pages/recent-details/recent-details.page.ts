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
    collection: 'DC-Mis-Holiday',
    name: 'name',
    mnemonic: 'mnemonic',
    active: 'Y',
    createdAt: new Date().getTime(),
    priority: 2,
    notes: ''
  };

  transactionId = null;
 
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, public nav: NavController, private transactionService: TransactionService, private loadingController: LoadingController) { }
 
  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.transactionId = this.route.snapshot.params['id'];
    if (this.transactionId)  {
      this.loadTransaction();
    }
  }

  async loadTransaction() {
    const loading = await this.loadingController.create({
      message: 'Loading Transaction...'
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
