import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { CouponComponent } from "./coupon.component";
import { FloorPipe } from "src/app/pipes/floor.pipe";
import { FormsModule } from "@angular/forms";
import { CouponService } from "src/app/services/coupon.service";
import { of } from "rxjs";
import { couponMock, couponDrawMock } from "src/app/testing/coupons.mock.spec";
import { ModalService } from "src/app/services/modal.service";

describe("CouponComponent", () => {
  let component: CouponComponent;
  let fixture: ComponentFixture<CouponComponent>;
  let couponService: CouponService;
  let modalService: ModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CouponComponent, FloorPipe],
      providers: [CouponService, ModalService],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponComponent);
    component = fixture.componentInstance;
    couponService = TestBed.get(CouponService);
    modalService = TestBed.get(ModalService);
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should render 'Team A' within event's first row", fakeAsync(() => {
    fixture.detectChanges();
    couponService.addToCoupon.next(couponMock);
    tick(200);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let eventName = compiled.querySelectorAll("span")[0].textContent;
    expect(eventName).toContain(couponMock.bet.teams[0].name);
  }));

  it("should render '3.33' win odds as selected bet", fakeAsync(() => {
    fixture.detectChanges();
    couponService.addToCoupon.next(couponMock);
    tick(200);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let eventOdds = compiled.querySelectorAll("span")[1].textContent;

    expect(eventOdds).toContain(couponMock.bet.teams[0].win);
  }));

  it("should render '4.44' draw odds for selected bet", fakeAsync(() => {
    fixture.detectChanges();
    couponService.addToCoupon.next(couponDrawMock);
    tick(200);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let eventOdds = compiled.querySelectorAll("span")[1].textContent;

    expect(eventOdds).toContain(couponMock.bet.draw);
  }));

  it("should render '4.44' draw odds for selected bet", fakeAsync(() => {
    fixture.detectChanges();
    couponService.addToCoupon.next(couponMock);
    tick(200);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let selectedIndex = compiled
      .querySelectorAll(".row")[1]
      .querySelectorAll("span")[1].textContent;

    expect(selectedIndex).toContain(couponMock.selectedIndex + 1);
  }));

  it("should render 'Add bet from list on the left'", fakeAsync(() => {
    component.events = [couponMock];
    fixture.detectChanges();
    couponService.removeFromCoupon.next(couponMock.bet.id);
    tick(200);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let addBetText = compiled.querySelectorAll(".no-events")[0].textContent;

    expect(addBetText).toContain("Add bet from list on the left");
  }));

  it("should render Total odds of 3.33", fakeAsync(() => {
    component.events = [couponMock];
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    let totalOdds = compiled
      .querySelectorAll(".totals")[0]
      .querySelectorAll("p")[0].textContent;

    expect(totalOdds).toContain("3.33");
  }));

  it("should render Total win 3.33 times 5", fakeAsync(() => {
    component.events = [couponMock];
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    let totalWin = compiled
      .querySelectorAll(".totals")[0]
      .querySelectorAll("p")[2].textContent;

    expect(totalWin).toContain("16.65");
  }));

  it("should open coupon modal", fakeAsync(() => {
    const modalSpy = spyOn(modalService.popup, "next");
    const couponSpy = spyOn(couponService.coupon, "next");
    component.events = [couponMock];
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    let placeBetBtn = compiled.querySelector(".btn-coupon");

    placeBetBtn.click();

    expect(modalSpy).toHaveBeenCalled();
    expect(couponSpy).toHaveBeenCalled();
  }));
});
