import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have 'sport betting' in categories", () => {
    expect(component.categories[0]).toEqual("sport betting");
  });

  it("should render categories", () => {
    const compiled = fixture.debugElement.nativeElement;
    const categories = compiled.querySelectorAll("li");
    expect(categories[0].textContent).toEqual(component.categories[0]);
  });
});
