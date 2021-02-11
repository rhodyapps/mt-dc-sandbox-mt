import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-dictionary-detail-form',
  templateUrl: './dictionary-detail-form.component.html',
  styleUrls: ['./dictionary-detail-form.component.scss'],
})
export class DictionaryDetailFormComponent implements OnInit {

  constructor(private db: FirestoreService,
              private modal: ModalController,
              private fb: FormBuilder) { }

    itemForm: FormGroup;
    item;

  ngOnInit() {
    const data = {
      content: '',
      status: 'pending',
      ...this.item
    };
    console.log('detailForm:',this.item.id);
    this.itemForm = this.fb.group(
      {
        content: [
          data.content,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(250)
          ]
        ],
        status: [data.status,[Validators.required]]
      }
    );
  }

}
