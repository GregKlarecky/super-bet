import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { FloorPipe } from "src/app/pipes/floor.pipe";
import { BetStub } from "src/app/testing/bet.stub.spec";
import { APIService } from "src/app/api.service";
import { ApiServiceMock } from "src/app/testing/api-service.mock.spec";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { betsMock, betMock } from "src/app/testing/bet.mock.spec";
import { of } from "rxjs";
import { CouponService } from "src/app/services/coupon.service";
import { LoaderStub } from "src/app/testing/loader.stub.spec";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let apiService: ApiServiceMock;
  let couponService: CouponService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, FloorPipe, BetStub, LoaderStub],
      providers: [
        { provide: APIService, useClass: ApiServiceMock },
        CouponService
      ],
      imports: [BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    apiService = TestBed.get(APIService);
    couponService = TestBed.get(CouponService);
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should display 'Live betting' as title", () => {
    component.title = "Live Betting";
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelectorAll(".title")[0].textContent;
    expect(title).toContain("Live Betting");
  });

  it("should display 'tennis' as a third option", () => {
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const option = compiled
      .querySelectorAll("li.options-list-item")[2]
      .querySelector("span").textContent;

    expect(option).toContain("tennis");
  });

  it("should display 'hockey' as option", () => {
    spyOn(apiService, "getBets").and.returnValue(of(betsMock));
    component.type = "live-bets";
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const option = compiled.querySelectorAll("li.options-list-item")[3];
    option.click();

    expect(component.selectedId).toContain("hockey");
  });

  it("should display 'live-betting' container", () => {
    component.type = "live-bets";
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const liveBettingTable = compiled.querySelectorAll(".live-betting")[0];

    expect(liveBettingTable).toBeTruthy();
  });

  it("should display 'hockey team' as a list item after clicking 'hockey' option", fakeAsync(() => {
    spyOn(apiService, "getBets").and.returnValue(of(betsMock));
    component.type = "live-bets";
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const option = compiled.querySelectorAll("li.options-list-item")[3];
    option.click();
    tick(1000);
    fixture.detectChanges();
    const teamName = compiled.querySelectorAll(".teams-data")[3].textContent;
    expect(teamName).toContain("hockey team");
  }));

  it("should display '1.33' win odds for the first hockey team after clicking an hockey option ", fakeAsync(() => {
    spyOn(apiService, "getBets").and.returnValue(of(betsMock));
    component.type = "live-bets";
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const option = compiled.querySelectorAll("li.options-list-item")[3];
    option.click();
    tick(1000);
    fixture.detectChanges();
    const winOdds = compiled.querySelectorAll(".win-odds-first")[3].textContent;
    expect(winOdds).toContain("1.33");
  }));

  it("should display '9.66' win odds for the second hockey team after clicking an hockey option ", fakeAsync(() => {
    spyOn(apiService, "getBets").and.returnValue(of(betsMock));
    component.type = "live-bets";
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const option = compiled.querySelectorAll("li.options-list-item")[3];
    option.click();
    tick(1000);
    fixture.detectChanges();
    const winOdds = compiled.querySelectorAll(".win-odds-second")[3]
      .textContent;
    expect(winOdds).toContain("9.66");
  }));

  it("should display '9.44' draw odds for fourth item on the list after clicking hockey option ", fakeAsync(() => {
    spyOn(apiService, "getBets").and.returnValue(of(betsMock));
    component.type = "live-bets";
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const option = compiled.querySelectorAll("li.options-list-item")[3];
    option.click();
    tick(1000);
    fixture.detectChanges();
    const drawOdds = compiled.querySelectorAll(".draw-odds")[3].textContent;
    expect(drawOdds).toContain("9.44");
  }));

  it("should display 'best bets' list", fakeAsync(() => {
    spyOn(apiService, "getBets").and.returnValue(of(betsMock));
    component.type = "";
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const option = compiled.querySelectorAll("li.options-list-item")[1];
    option.click();
    tick(500);

    fixture.detectChanges();
    const bestBetsList = compiled.querySelectorAll(".best-bets")[0];

    expect(bestBetsList).toBeTruthy();
  }));

  it("should call coupon service addToCoupon subject on event emit", () => {
    spyOn(apiService, "getBets").and.returnValue(of(betsMock));
    const couponServiceSpy = spyOn(couponService.addToCoupon, "next");
    component.type = "";
    fixture.detectChanges();

    component.addToCoupon(betMock, -1, false);

    const compiled = fixture.debugElement.nativeElement;
    const option = compiled.querySelectorAll("li.options-list-item")[1];
    option.click();

    expect(couponServiceSpy).toHaveBeenCalled();
  });

  it("should call coupon service removeFromCoupon subject on event emit", () => {
    spyOn(apiService, "getBets").and.returnValue(of(betsMock));
    const couponServiceSpy = spyOn(couponService.removeFromCoupon, "next");
    component.type = "";
    fixture.detectChanges();

    component.addToCoupon(betMock, -1, true);

    const compiled = fixture.debugElement.nativeElement;
    const option = compiled.querySelectorAll("li.options-list-item")[1];
    option.click();

    expect(couponServiceSpy).toHaveBeenCalled();
  });
});
