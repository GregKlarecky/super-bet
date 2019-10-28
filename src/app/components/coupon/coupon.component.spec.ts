import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CouponComponent } from "./coupon.component";
import { FloorPipe } from "src/app/pipes/floor.pipe";
import { FormsModule } from "@angular/forms";

describe("CouponComponent", () => {
  let component: CouponComponent;
  let fixture: ComponentFixture<CouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CouponComponent, FloorPipe],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
