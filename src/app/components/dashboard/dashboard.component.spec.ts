import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { FloorPipe } from "src/app/pipes/floor.pipe";
import { BetStub } from "src/app/testing/bet.stub.spec";
import { APIService } from "src/app/api.service";
import { ApiServiceMock } from "src/app/testing/api-service.mock.spec";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, FloorPipe, BetStub],
      providers: [{ provide: APIService, useClass: ApiServiceMock }],
      imports: [BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
