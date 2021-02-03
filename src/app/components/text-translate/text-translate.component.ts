import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'text-translate',
  templateUrl: './text-translate.component.html',
  styleUrls: ['./text-translate.component.scss']
})
export class TextTranslateComponent {

  userText: string;
  currentTranslation;

  constructor(private translateSvc: TranslateService) { }

  handleTranslation() {
    this.currentTranslation = this.translateSvc.createTranslation(this.userText);
  }

  defaultMessage() {
    if (!this.currentTranslation) { return 'Enter text and click run translation' }
    else { return 'Running translate function' }
  }

}


/*

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-translate',
  templateUrl: './text-translate.component.html',
  styleUrls: ['./text-translate.component.scss'],
})
export class TextTranslateComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
*/
