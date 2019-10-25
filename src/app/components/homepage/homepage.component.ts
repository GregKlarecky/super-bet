import { Component, OnInit } from "@angular/core";
import { banners } from "./banners";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  banners: string[] = banners;
  constructor() {}

  ngOnInit() {}
}
