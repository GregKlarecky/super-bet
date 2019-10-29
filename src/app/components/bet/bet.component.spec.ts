import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { BetComponent } from "./bet.component";
import { FloorPipe } from "src/app/pipes/floor.pipe";
import { ITeam } from "src/app/interfaces/bet.interface";
import { CouponService } from "src/app/services/coupon.service";
import { couponMock } from "src/app/testing/coupons.mock.spec";
import { CompilePipeMetadata } from "@angular/compiler";

describe("BetComponent", () => {
  let component: BetComponent;
  let fixture: ComponentFixture<BetComponent>;
  let couponService: CouponService;
  const team: ITeam = { name: "Team name", win: 4.46 };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BetComponent, FloorPipe],
      providers: [CouponService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetComponent);
    couponService = TestBed.get(CouponService);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should render 'Team name' as team's name", () => {
    component.team = team;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const teamName = compiled.querySelectorAll("span")[0].textContent;
    expect(teamName).toContain(team.name);
  });

  it("should render '4.46' as team's win odds", () => {
    component.team = team;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const teamWin = compiled.querySelectorAll("span")[1].textContent;
    expect(teamWin).toContain(team.win);
  });

  it("should render '4.46' as team's draw odds", () => {
    component.draw = 4.46;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const drawOdds = compiled.querySelectorAll("span")[1].textContent;
    expect(drawOdds).toContain(4.46);
  });

  it("should render add selected class to wrapping div", fakeAsync(() => {
    component.team = couponMock[0].bet.teams[0];
    component.index = 0;
    component.id = 1234;
    fixture.detectChanges();

    couponService.coupon.next(couponMock);

    tick();

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const wrappingDivClass = compiled
      .querySelector("div")
      .getAttribute("class");
    expect(wrappingDivClass).toContain("selected");
  }));

  it("should emit slected as true on click event", () => {
    component.selected = true;
    let clickedValue: boolean;
    fixture.detectChanges();

    component.event.subscribe(value => {
      clickedValue = value;
    });

    const compiled = fixture.debugElement;
    compiled.triggerEventHandler("click", null);

    expect(clickedValue).toBe(true);
  });
});
