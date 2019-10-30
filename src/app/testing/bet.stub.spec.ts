import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-bet",
  template: ""
})
export class BetStub {
  @Input() team;
  @Input() id;
  @Input() index;
  @Input() draw;
  @Output() event = new EventEmitter();
}
