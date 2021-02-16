import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Transaction } from '../models/transaction';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction,
  Action,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  removeTransaction(id: any) {
    throw new Error('Method not implemented.');
  }
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

/// Firebase Server Timestamp
get timestamp() {
  return firebase.firestore.FieldValue.serverTimestamp();
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
    const timestamp = this.timestamp;
    return this.transactionCollection.add(transaction);
  }

/*
  add<T>(ref: CollectionPredicate<T>, data): Promise<firebase.firestore.DocumentReference> {
    const timestamp = this.timestamp;
    return this.col(ref).add({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp,
    });
  }

  removeTransaction(id) {
    return this.transactionCollection.doc(id).delete();
  }
  */
}
