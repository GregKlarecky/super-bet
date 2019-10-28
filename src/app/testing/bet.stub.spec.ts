import { Component, Input } from "@angular/core";

@Component({
  selector: "app-bet",
  template: ""
})
export class BetStub {
  @Input() team;
  @Input() id;
  @Input() index;
  @Input() draw;
}
