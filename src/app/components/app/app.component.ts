import { Component, OnInit } from "@angular/core";
import { APIService } from "../../api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";

  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.apiService.sConnection.subscribe(msg => {
      console.log(msg);
    });
  }

  lounchSocket() {
    this.apiService.pullStart().subscribe((data: any) => {
      console.log(data);
    });
  }

  quitSocket() {
    this.apiService.pullStop().subscribe(resp => {
      console.log(resp);
    });
  }
}
