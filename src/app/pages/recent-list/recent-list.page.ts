import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-recent-list',
  templateUrl: './recent-list.page.html',
  styleUrls: ['./recent-list.page.scss'],
})
export class RecentListPage implements OnInit {

  transactions: Transaction[];

  private Transactions: Observable<Transaction[]>;


  constructor(private transactionService: TransactionService) { }

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

}
