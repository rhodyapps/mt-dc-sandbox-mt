import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyForm, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})

export class DictionaryPage implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
