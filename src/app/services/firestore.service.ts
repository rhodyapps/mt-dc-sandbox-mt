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

  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref)
      .snapshotChanges()
      .pipe(
        map((doc: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<T>>) => {
          return doc.payload.data() as T;
        }),
      );
  }

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
upsert<T>(ref: DocPredicate<T>, data: any): Promise<void> {
  const doc = this.doc(ref)
    .snapshotChanges()
    .pipe(take(1))
    .toPromise();

  return doc.then((snap: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<T>>) => {
    return snap.payload.exists ? this.update(ref, data) : this.set(ref, data);
  });
}

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
