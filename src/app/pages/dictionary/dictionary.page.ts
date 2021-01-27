import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor( private route: ActivatedRoute,
               public db: FirestoreService, private afs: AngularFirestore,
               private modalCtrl: ModalController,
               private routerOutlet: IonRouterOutlet
               ) {}

  ngOnInit() {
this.route.params.subscribe(params => {
  this.collection = params.collection;
  this.displayName = params.name;

  console.log('dictionary page params.collection: ', params.collection, params.name);
});

this.items = this.db.col$(this.collection);

  }

  remove(item: { id: any; }) {
    this.db.delete(item.id);
  }

  get(item: { id: any; }) {
    this.db.colWithIds$(item.id);
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

}
