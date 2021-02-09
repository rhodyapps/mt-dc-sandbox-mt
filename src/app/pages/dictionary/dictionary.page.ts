import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import { FirestoreService } from '../../services/firestore.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Transaction } from '../../models/transaction';
// import { DataService } from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
// import { map } from 'rxjs/operators';
import {
  ModalController,
  IonRouterOutlet,
  ActionSheetController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalBaseComponent } from '../../components/modal-base/modal-base.component';
import { RecentDetailsPage } from '../../pages/recent-details/recent-details.page';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})

export class DictionaryPage implements OnInit {

  model: any = {};

  collection: string;
  displayName: string;

  ref: AngularFirestoreCollection<Transaction>;
  items: Observable<Transaction[]>;
  // items;
  filter = new BehaviorSubject(null);


  constructor( private route: ActivatedRoute,
               public db: FirestoreService, private afs: AngularFirestore,
               private modalCtrl: ModalController,
               public modal: ModalController,

               private routerOutlet: IonRouterOutlet
               ) {}

  ngOnInit() {
this.route.params.subscribe(params => {
  this.collection = params.collection;
  this.displayName = params.name;

  console.log('dictionary page params.collection: ', params.collection, params.name);
});

// this.items = this.db.col$(this.collection);
this.items = this.db.colWithIds$(this.collection, ref =>
  ref
  .where('MT_Universe', '==', 'MTX')
  // .orderBy('Name', 'MT_ModifiedTime') // dont want to create indexes now
  .limit(25)
  ),
  shareReplay(1);
  }
/*
  toggleStatus(item: any) {
    const status = item.Active === 'Y' ? 'N' : 'P';
    console.log('item id status: ', item.id, status);
    this.db.update(`items/${item.id}`, { status });
  }


toggleStatus(item) {
  const status = item.status === 'complete' ? 'pending' : 'complete';
  const collection = this.collection;
  console.log('collection toggle: ', collection, 'Item ', item);
  this.db.update(collection, {item});
}
*/

toggleStatus(item) {
  const status = item.status === 'complete' ? 'pending' : 'complete';
  this.db.updateAt(`items/${item.id}`, { status });
  console.log('togglestatus', status, 'item ', item);
}


  removeItem(item: { id: any; }) {
    console.log('remove item data');
        this.db.delete(item.id);
  }

  get(item: { id: any; }) {
    this.db.colWithIds$(item.id);
  }

  trackById(_idx, item) {
    return item.id;
  }

  updateFilter(val) {
    this.filter.next(val);
  }



  async presentDictionaryForm(item?: any) {
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

}
