import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have 'sport betting' in offer", () => {
    expect(component.offer[0]).toEqual("Sports betting");
  });

  it("should render offer", () => {
    const compiled = fixture.debugElement.nativeElement;
    const offer = compiled.querySelectorAll(".offer")[0].querySelectorAll("li");
    expect(offer[1].textContent).toEqual(component.offer[0]);
  });

  it("should have 'Quick registration' in products", () => {
    expect(component.products[0]).toEqual("Quick registration");
  });

  it("should render products", () => {
    const compiled = fixture.debugElement.nativeElement;
    const products = compiled
      .querySelectorAll(".products")[0]
      .querySelectorAll("li");
    expect(products[1].textContent).toEqual(component.products[0]);
  });

  it("should have 'Customer center' in information", () => {
    expect(component.information[0]).toEqual("Customer center");
  });

  it("should render information", () => {
    const compiled = fixture.debugElement.nativeElement;
    const information = compiled
      .querySelectorAll(".information")[0]
      .querySelectorAll("li");
    expect(information[1].textContent).toEqual(component.information[0]);
  });

  it("should have 'Customer center' in about", () => {
    expect(component.about[0]).toEqual("Information about Super Bet");
  });

  it("should render about", () => {
    const compiled = fixture.debugElement.nativeElement;
    const about = compiled
      .querySelectorAll(".about-super-bet")[0]
      .querySelectorAll("li");
    expect(about[1].textContent).toEqual(component.about[0]);
  });

  it("should have 'dotpay' in payments", () => {
    expect(component.payments[0]).toEqual("dotpay");
  });

  it("should render payments", () => {
    const compiled = fixture.debugElement.nativeElement;
    const payments = compiled
      .querySelectorAll(".payments-list")[0]
      .querySelectorAll("li");
    expect(payments.length).toEqual(component.payments.length);
  });
});
