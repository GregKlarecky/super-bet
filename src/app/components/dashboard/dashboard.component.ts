import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [
    trigger("toggle", [
      state(
        "open",
        style({
          height: "200px"
        })
      ),
      state(
        "close",
        style({
          height: "33px"
        })
      ),
      transition("open <=> close", [animate("300ms")])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  @Input() title: string;
  @Input() options: string[];
  @Input() list: any[];
  @Input() style: string;
  public state: string = "open";
  constructor() {}

  ngOnInit() {
    this.options = ["football", "basketball", "tennis", "hockey"];
  }

  public toggle() {
    this.state = this.state === "open" ? "close" : "open";
  }
}
