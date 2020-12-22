import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionCollection: AngularFirestoreCollection<Transaction>;

  private transactions: Observable<Transaction[]>;

  constructor(db: AngularFirestore) {
    this.transactionCollection = db.collection<Transaction>('transactions');

    this.transactions = this.transactionCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          console.log('adding transaction: ',data);
          return { id, ...data };
        });
      })
    );
  }

  getTransactions() {
    return this.transactions;
  }

  getTransaction(id) {
    return this.transactionCollection.doc<Transaction>(id).valueChanges();
  }

  updateTransaction(transaction: Transaction, id: string) {
    return this.transactionCollection.doc(id).update(transaction);
  }

  addTransaction(transaction: Transaction) {
    return this.transactionCollection.add(transaction);
  }

  removeTransaction(id) {
    return this.transactionCollection.doc(id).delete();
  }
}
