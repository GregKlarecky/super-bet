import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponConfirmComponent } from './coupon-confirm.component';

describe('CouponConfirmComponent', () => {
  let component: CouponConfirmComponent;
  let fixture: ComponentFixture<CouponConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
