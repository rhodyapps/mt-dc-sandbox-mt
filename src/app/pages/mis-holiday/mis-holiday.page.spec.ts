import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisHolidayPage } from './mis-holiday.page';

describe('MisHolidayPage', () => {
  let component: MisHolidayPage;
  let fixture: ComponentFixture<MisHolidayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisHolidayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisHolidayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
