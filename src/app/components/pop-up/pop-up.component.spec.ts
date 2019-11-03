import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PopUpComponent } from "./pop-up.component";
import { ModalService } from "src/app/services/modal.service";
import { CouponConfirmStub } from "src/app/testing/coupon-confirm-stub.spec";
import { FactoryResolverMock } from "src/app/testing/factory-resolver-mock.spec";
import { ViewContainerRefMock } from "src/app/testing/view-container-ref.spec";
import { ComponentFactoryResolver, ViewContainerRef } from "@angular/core";

describe("PopUpComponent", () => {
  let component: PopUpComponent;
  let fixture: ComponentFixture<PopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpComponent, CouponConfirmStub],
      providers: [
        ModalService,
        { provide: ComponentFactoryResolver, useClass: FactoryResolverMock },
        { provide: ViewContainerRef, useClass: ViewContainerRefMock }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
