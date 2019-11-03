import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loader",
  template: `
    <div class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  `,
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
