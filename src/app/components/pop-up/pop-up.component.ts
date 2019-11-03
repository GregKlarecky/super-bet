import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { CouponConfirmComponent } from "../coupon-confirm/coupon-confirm.component";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-pop-up",
  template: ""
})
export class PopUpComponent {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private modalService: ModalService
  ) {}
  ngOnInit() {
    this.modalService.popup.subscribe(popup => {
      this.createDynamicComponent(popup);
    });
    this.modalService.closePopup.subscribe(popup => {
      this.removeDynamicComponent();
    });
  }
  createDynamicComponent(component): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    const componentRef = this.viewContainerRef.createComponent(factory);
    componentRef.changeDetectorRef.detectChanges();
  }

  removeDynamicComponent() {
    this.viewContainerRef.clear();
  }
}
