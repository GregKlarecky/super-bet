import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomepageComponent } from "./homepage.component";
import { CardStub } from "src/app/testing/card.stub.spec";
import { DashboardStub } from "src/app/testing/dashboard.stub.spec";
import { CouponStub } from "src/app/testing/coupon.spec";

describe("HomepageComponent", () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent, CardStub, DashboardStub, CouponStub]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
