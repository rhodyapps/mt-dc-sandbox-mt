import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction,
  Action,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists,
} from '@angular/fire/firestore';

import { Observable, from } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';

// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;



@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

// In AngularFire v5, the reference to an object is decoupled from the Observable data.
// That can be useful, but also requires more code. 
// These custom methods provide Observable data in a concise readable format.

// The methods in this service use TypeScript Genereics so that the code is reusable
// https://www.typescriptlang.org/docs/handbook/generics.html

 // Return a reference

  /// **************
  /// Get a Reference
  /// **************

  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
  }


/// **************
  /// Get Data
  /// **************

  // These methods have a predicate type that accepts either a string or an AngularFire(Collection | Document). 
  // This gives you the flexibility to pass these helper methods a string or firebase reference. 
  // In other words, you don’t need to explicitly define a reference every time you want an Observable.

  // Return observables with a firestore reference or just a single string, 
  // making code more concise and readable.

// *** Usage

//  this.db.doc$('notes/ID')
//  this.db.col$('notes', ref => ref.where('user', '==', 'Jeff'))

/// OR just like regular AngularFire

//  noteRef: AngularFireList = this.db.doc('notes/ID');
//  this.db.doc(noteRef)
//  this.noteRef.valueChanges()


  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref)
      .snapshotChanges()
      .pipe(
        map((doc: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<T>>) => {
          return doc.payload.data() as T;
        }),
      );
  }

// Custom Types

//  type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
//  type DocPredicate<T> = string | AngularFirestoreDocument<T>;

  // Return a reference

  /// **************
  /// Get a Reference
  /// **************

  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((docs: DocumentChangeAction<T>[]) => {
          return docs.map((a: DocumentChangeAction<T>) => a.payload.doc.data()) as T[];
        }),
      );
  }

/// Firebase Server Timestamp
// Firestore does not automatically order data, 
// so you need to have at least one property to order by
// These methods wll add a server side timestamp to all documents in a collection
// so you always have a way to order them in sequence

// *** Usage

//   db.update('items/ID', data) }) // adds updatedAt field
//   db.set('items/ID', data) })    // adds createdAt field
//   db.add('items', data) })       // adds createdAt field

get timestamp() {
  return firebase.firestore.FieldValue.serverTimestamp();
}

set<T>(ref: DocPredicate<T>, data: any): Promise<void> {
  const timestamp = this.timestamp;
  return this.doc(ref).set({
    ...data,
    updatedAt: timestamp,
    createdAt: timestamp,
  });
}

update<T>(ref: DocPredicate<T>, data: any): Promise<void> {
  return this.doc(ref).update({
    ...data,
    updatedAt: this.timestamp,
  });
}

delete<T>(ref: DocPredicate<T>): Promise<void> {
  return this.doc(ref).delete();
}

add<T>(ref: CollectionPredicate<T>, data): Promise<firebase.firestore.DocumentReference> {
  const timestamp = this.timestamp;
  return this.col(ref).add({
    ...data,
    updatedAt: timestamp,
    createdAt: timestamp,
  });
}

//  *** Usert *** Usage
//   this.db.upsert('notes/xyz', { content: 'hello dude'})
// check if doc exists. If YES it will update non-destructively. 
// If NO it will set a new document.

upsert<T>(ref: DocPredicate<T>, data: any): Promise<void> {
  const doc = this.doc(ref)
    .snapshotChanges()
    .pipe(take(1))
    .toPromise();

  return doc.then((snap: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<T>>) => {
    return snap.payload.exists ? this.update(ref, data) : this.set(ref, data);
  });
}

// ** colWithIds   *** Usage
//   db.colWithIds$('notes')
//   get the collection items with their ID's


colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
  return this.col(ref, queryFn)
    .snapshotChanges()
    .pipe(
      map((actions: DocumentChangeAction<T>[]) => {
        return actions.map((a: DocumentChangeAction<T>) => {
          // tslint:disable-next-line: ban-types
          const data: Object = a.payload.doc.data() as T;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );
}

// *** Usage

//    this.db.inspectDoc('notes/xyz')
//    this.db.inspectCol('notes')

inspectDoc(ref: DocPredicate<any>): void {
  const tick = new Date().getTime();
  this.doc(ref)
    .snapshotChanges()
    .pipe(
      take(1),
      tap((d: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<any>>) => {
        const tock = new Date().getTime() - tick;
        console.log(`Loaded Document in ${tock}ms`, d);
      }),
    )
    .subscribe();
}

inspectCol(ref: CollectionPredicate<any>): void {
  const tick = new Date().getTime();
  this.col(ref)
    .snapshotChanges()
    .pipe(
      take(1),
      tap((c: DocumentChangeAction<any>[]) => {
        const tock = new Date().getTime() - tick;
        console.log(`Loaded Collection in ${tock}ms`, c);
      }),
    )
    .subscribe();
}


}
