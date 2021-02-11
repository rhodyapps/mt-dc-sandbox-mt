import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DictionaryDetailFormComponent } from './dictionary-detail-form.component';

describe('DictionaryDetailFormComponent', () => {
  let component: DictionaryDetailFormComponent;
  let fixture: ComponentFixture<DictionaryDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryDetailFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
