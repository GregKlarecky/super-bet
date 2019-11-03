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
});
