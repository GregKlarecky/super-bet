import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { NavbarStub } from "src/app/testing/navbar.stub.spec";
import { FooterStub } from "src/app/testing/footer.stub.spec";
import { PopopStub } from "src/app/testing/popup.stub.spec";
import { RouterOutletStub } from "src/app/testing/router-outlet.stub.spec";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarStub,
        FooterStub,
        PopopStub,
        RouterOutletStub
      ]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  xit(`should have as title 'live-sports-dashboard'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("live-sports-dashboard");
  }));
  xit("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to live-sports-dashboard!"
    );
  }));
});
