import { Component, OnInit } from "@angular/core";
import { payments } from "./payments";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  payments: string[] = payments;
  constructor() {}

  ngOnInit() {}
}
