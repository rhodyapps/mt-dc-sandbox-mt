import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { JsonService } from '../../services/json.service';
import { FirestoreService } from '../../services/firestore.service';


@Component({
  selector: 'app-dictionary-form',
  templateUrl: './dictionary-form.component.html',
  styleUrls: ['./dictionary-form.component.scss'],
})
export class DictionaryFormComponent implements OnInit {

  constructor(
    private db: FirestoreService,
    private auth: AuthService,
    public modalController: ModalController,
    private fb: FormBuilder // private params: NavParams
  ) {}

  documentForm: FormGroup;
  // sectionForm: FormGroup;
// questionSetForm: FormGroup;
// questionForm: FormGroup;

document;  // if null we update the existing document else we create new document
section;

// questionSet;
// question;

  ngOnInit() {


   // const originalDocument = JSON.parse(JSON.stringify(this.document));
   // console.log("originalDocument: ",originalDocument);

    const data = {
      Name: '',
      status: 'pending',
      ...this.document
    };
    console.log('Data', data);
    // We define an empty string and set status to pending
  // if the document is defined we merge it into the data object
   // Rest parameters are used to access indefinite number of arguments
   // passed to a function. In this case ...this.document gets the document into the data object.
   // Next we will pass the data to initialize the form.
// Every key in the data object represents a key in the form


    this.documentForm = this.fb.group({
      Name: [
        data.Name,
        [
      //    Validators.required,
      //    Validators.minLength(3),
      //    Validators.maxLength(250)
        ] // We are checking that the document Name is a minimum of three characters
        // and we use HTML 5 validators to ensure that the Name is required
      ],
      Mnemonic: [
        data.Mnemonic,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250)
        ],
      ],
      Active: [
        data.Active,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1)
        ] // We are checking that the document Name is a minimum of three characters
        // and we use HTML 5 validators to ensure that the Name is required
      ],

      status: [data.status, [Validators.required]]
    });

   // console.log('DataSec', data.Sections[0]);
    console.log('data Name', data.Name);
  }

  async createDocument() {
  //  const uid = await this.auth.uid();
    const id = this.document ? this.document.id : '';
    const data = {
     // uid,
      createdAt: Date.now(),
      ...this.document,
      ...this.documentForm.value
    };
    console.log('Create Document:', data.Name);

    this.db.update(`Documents/${id}`, data);

  }

}
