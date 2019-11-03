import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-pop-up",
  template: ""
})
export class PopUpComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private modalService: ModalService
  ) {}
  ngOnInit() {
    this.modalService.popup.subscribe(popup => {
      document.body.style.overflowY = "hidden";
      document.body.className = "body-padding";
      this.createDynamicComponent(popup);
    });
    this.modalService.closePopup.subscribe(popup => {
      document.body.style.overflowY = "auto";
      document.body.className = "";
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
