import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecentListPage } from './recent-list.page';

describe('RecentListPage', () => {
  let component: RecentListPage;
  let fixture: ComponentFixture<RecentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
