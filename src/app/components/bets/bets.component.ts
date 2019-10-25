import { Component, OnInit, Input } from "@angular/core";
import { ITeam } from "src/app/interfaces/bet.interface";

@Component({
  selector: "app-bet",
  templateUrl: "./bets.component.html",
  styleUrls: ["./bets.component.scss"]
})
export class BetComponent implements OnInit {
  @Input() team: ITeam[];
  @Input() draw: number;
  constructor() {}

  ngOnInit() {}
}
