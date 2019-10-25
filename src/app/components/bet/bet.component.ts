import { Component, OnInit, Input } from "@angular/core";
import { ITeam } from "src/app/interfaces/bet.interface";

@Component({
  selector: "app-bet",
  templateUrl: "./bet.component.html",
  styleUrls: ["./bet.component.scss"]
})
export class BetComponent implements OnInit {
  @Input() team: ITeam[];
  @Input() draw: number;
  constructor() {}

  ngOnInit() {}
}
