import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextTranslateComponent } from './text-translate.component';

describe('TextTranslateComponent', () => {
  let component: TextTranslateComponent;
  let fixture: ComponentFixture<TextTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextTranslateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
