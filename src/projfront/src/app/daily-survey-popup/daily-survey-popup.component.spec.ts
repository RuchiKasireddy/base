import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyServeyPopupComponent } from './daily-servey-popup.component';

describe('DailyServeyPopupComponent', () => {
  let component: DailyServeyPopupComponent;
  let fixture: ComponentFixture<DailyServeyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyServeyPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyServeyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
