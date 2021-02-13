import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore.service';
import { TranslateModule } from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import { Transaction } from '../../models/transaction';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-dictionary-detail-form',
  templateUrl: './dictionary-detail-form.component.html',
  styleUrls: ['./dictionary-detail-form.component.scss'],
})
export class DictionaryDetailFormComponent implements OnInit {

  constructor(private db: FirestoreService,
    private route: ActivatedRoute,
              private modal: ModalController,
              private fb: FormBuilder) { }
/*
              "dictionary-mt-database-label": "MT Database",
	"dictionary-mt-dictionary-label": "MT Dictionary",
	"dictionary-mt-document-name-label": "MT Document Name",
	"dictionary-mt-export-time-label": "MT Export Time",
	"dictionary-mt-hcis-label": "MT HCIS",
	"dictionary-mt-hcis-int-label": "MT HCIS Internal",
	"dictionary-mt-modified-time-label": "MT Last Modified Time",
	"dictionary-mt-oid-label": "MT OID",
	"dictionary-release-label": "MT Release",
	"dictionary-mt-release-int-label": "MT Release Internal",
	"dictionary-mt-universe-label": "MT Universe",
	"dictionary-mt-mnemonic-label": "MT Mnemonic",
	"dictionary-mt-name-label": "MT Name",
	"dictionary-mt-print-number-label": "MT Print Number"

Active?: string;
    Holidays?: Holiday[];
    Identifiers?: Identifier[];
    MT_Database?: string;
    MT_Dictionary?: string;
    MT_DocumentName?: string;
    MT_ExportTime?: Date;
    MT_HCIS?: string;
    MT_HCISInt?: string;
    MT_ModifiedTime?: Date;
    MT_OID?: string;
    MT_Release?: string;
    MT_ReleaseInt?: string;
    MT_Universe?: string;
    Mnemonic?: string;
    Name?: string;

 id?: string;
    collection?: string;
    release?: string;
    project?: string;
    name?: string;
    mnemonic?: string;
    active?: string;
    status?: string;
    priority?: number;
    createdAt?: number;
    createdByUser?: string;
    notes?: string;
    mtDatabase?: string;
    mtDictionary?: string;
    mtDocumentName?: string;
    mtExportTime?: string;
    mtHcis?: string;
    mtHcisInt?: string;
    mtModifiedTime?: string;
    mtOid?: string;
    mtRelease?: string;
    mtReleaseInt?: string;
    mtUniverse?: string;
    mtMnemonic?: string;
    mtName?: string;

*/

              transaction: Transaction = {
                project: 'test',
                collection: '',
                mtMnemonic: '',
                mtName: '',
                mtActive: '',
                createdAt: new Date().getTime(),
                mtExportTime: '',
                mtHcis: '',
                mtModifiedTime: '',
                mtOid: '',
                mtRelease: '',
                mtUniverse: '',
                priority: 2,
                notes: ''
              };

              transactionId = null;

    itemForm: FormGroup;
    item: {[key: string]: string };

    collection: string;

    object: { [key: string]: string } = {
      zzz: 'Test 3',
      aaa: 'Test 4',
      ccc: 'Test 2',
      fff: 'Test 1'
    };

    objectKeys = Object.keys;


    keyDescOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>): number => {
      return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
      }

  ngOnInit() {
   
    const data = {
      content: '',
      status: 'pending',
      ...this.item
    };
    
    console.log('detail form collection ',this.collection, ' data ', data);
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
        status: [data.status, [Validators.required]]
      }
    );
  };
}

/*
Active: "Y"
MT_Database: "LAB.STD"
MT_Dictionary: "LabLTest"
MT_DocumentName: "000.147~01MTX~02DEV.STNDS~03LAB.STD"
MT_ExportTime: "2021-01-27T14:50:13-05:00"
MT_HCIS: "DEV-STNDS"
MT_HCISInt: "DEV.STNDS"
MT_ModifiedTime: "2020-07-29T14:16:41-04:00"
MT_OID: "000.147"
MT_Release: "Expanse_2-2"
MT_ReleaseInt: "Expanse 2.2"
MT_Universe: "MTX"
Mnemonic: "COVIDAB"
Name: "COVID-19 Antibody"
PrintNumber: "000.147"
content: ""
id: "000.147~01MTX~02DEV.STNDS~03LAB.STD"
status: "pending"
*/
