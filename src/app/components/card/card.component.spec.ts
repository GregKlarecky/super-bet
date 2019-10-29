import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponent } from "./card.component";
import { backlog } from "./backlog";
import { IImg } from "src/app/interfaces/img.interface";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let itemsMock: string[] = backlog[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.title = "Recommended";
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should render 'Recommended' as card's title", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelectorAll(".card-header")[0];
    expect(title.textContent).toEqual("Recommended");
  });

  it("should render Premiership as first list's element", () => {
    component.itemsSet = 0;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const item = compiled.querySelectorAll(".option")[0];
    expect(item.textContent).toContain(itemsMock[0]);
  });

  it("should render only football pictures", () => {
    component.itemsSet = 0;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const imgs: IImg[] = Array.from(compiled.querySelectorAll("img"));
    const sources = imgs.map(el => el.src);
    const isEveryImgAFootball = sources.every(src => src.includes("football"));
    expect(isEveryImgAFootball).toBeTruthy();
  });

  it("should render volleyball picture", () => {
    component.itemsSet = 1;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const imgs2 = compiled.querySelectorAll("img");

    expect(imgs2[2].src).toContain("volleyball");
  });
});
