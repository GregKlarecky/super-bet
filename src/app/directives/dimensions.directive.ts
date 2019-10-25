import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter
} from "@angular/core";

@Directive({
  selector: "[appDimensions]"
})
export class DimensionsDirective {
  @Output() dims: EventEmitter<number> = new EventEmitter();
  constructor(private el: ElementRef) {}

  @HostListener("click") onClick() {
    this.dims.emit(this.el.nativeElement.offsetWidth);
  }
}
