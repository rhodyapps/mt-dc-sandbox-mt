import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map  } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private afs: AngularFirestore) { }

  collection$(path, query?) {
    return this.afs
    .collection(path, query)
    .snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {
          // tslint:disable-next-line: ban-types
          const data: Object = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
}

doc$(path): Observable<any> {
  return this.afs
    .doc(path)
    .snapshotChanges()
    .pipe(
      map(doc => {
        return { id: doc.payload.id, ...doc.payload.data() as {} };
      })
    );
}
/**
 * parameters
 * path 'collection' or 'collection/docID'
 *  {object} data new data
 *
 * Creates or updates data on a collection or document.
 */

  // tslint:disable-next-line: ban-types
  updateAt(path: string, data: Object): Promise<any> {
    const segments = path.split('/').filter(v => v);
    if (segments.length % 2) {
      // Odd is always a collection
      return this.afs.collection(path).add(data);
    } else {
      // Even is always a document
      return this.afs.doc(path).set(data, {merge: true});

    }
    }
delete(path) {
  console.log('db Delete', path);
  return this.afs.doc(path).delete();
}
  }

