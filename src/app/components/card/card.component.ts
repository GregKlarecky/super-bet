import { Component, OnInit, Input } from "@angular/core";
import { backlog } from "./backlog";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() items: string[];
  @Input() itemsSet: number;
  public backlog: string[][] = backlog;

  ngOnInit() {
    if (this.itemsSet >= 0) {
      this.items = this.backlog[this.itemsSet];
    }
  }
}
