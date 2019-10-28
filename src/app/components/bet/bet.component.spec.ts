import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BetComponent } from "./bet.component";
import { FloorPipe } from "src/app/pipes/floor.pipe";

describe("BetsComponent", () => {
  let component: BetComponent;
  let fixture: ComponentFixture<BetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BetComponent, FloorPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
