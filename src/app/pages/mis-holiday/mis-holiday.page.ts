import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import {DbService } from '../../services/db.service';

import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-mis-holiday',
  templateUrl: './mis-holiday.page.html',
  styleUrls: ['./mis-holiday.page.scss'],
})
export class MisHolidayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
