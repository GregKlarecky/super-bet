import { Component, OnInit, Input } from "@angular/core";
import { APIService } from "src/app/api.service";
import { IBet, ISport } from "src/app/interfaces/bet.interface";
import { slide } from "src/app/animation/dashboard-slide.animation";
import { timer } from "rxjs";
import { switchPage } from "src/app/animation/switchPage.animation";
import { toggleDashboard } from "src/app/animation/toggleDashboard.animation";
import { bounceList } from "src/app/animation/bounce-list.animation";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [toggleDashboard, slide, switchPage, bounceList]
})
export class DashboardComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() options: string[];
  @Input() list: any[];
  @Input() style: string;
  public height: number;
  public state: string = "open";
  public bets: IBet[];
  public basketball: ISport = { id: "basketball", items: [] };
  public football: ISport = { id: "football", items: [] };
  public tennis: ISport = { id: "tennis", items: [] };
  public hockey: ISport = { id: "hockey", items: [] };
  public selectedId: string = "football";
  public selectedSport: ISport;
  public slide: string = "0";
  public translate: number = 0;
  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.height = this.type === "live-bets" ? 263 : 270;
    this.options = ["football", "basketball", "tennis", "hockey"];
    this.getBets();
    this.watchBets();
  }

  public lounchSocket() {
    this.apiService.pullStart().subscribe();
  }

  public getBets() {
    this.apiService.getBets().subscribe(bets => {
      this.bets = bets;
      this.lounchSocket();
    });
  }
  public toggle() {
    this.state = this.state === "open" ? "close" : "open";
  }

  public watchBets() {
    this.apiService.sConnection.subscribe(update => {
      if (this.bets) {
        this.updateBets(update);
      }
    });
  }

  public updateBets(updatedBets) {
    updatedBets.forEach(newBet => {
      const oldBet = this.bets.find(bet => bet.id === newBet.id);
      if (oldBet) {
        let index = this.bets.indexOf(oldBet);
        this.bets.splice(index, 1, newBet);
        this.splitBetsToSports();
      }
    });
  }

  public splitBetsToSports() {
    this.emptySports();
    for (let i = 0; i <= this.bets.length; i++) {
      if (i < 5) {
        this.football.items.push(this.bets[i]);
      } else if (i < 10) {
        this.basketball.items.push(this.bets[i]);
      } else if (i < 15) {
        this.tennis.items.push(this.bets[i]);
      } else if (i < 20) {
        this.hockey.items.push(this.bets[i]);
      }
    }

    timer(500).subscribe(() => {
      this.updateSelected();
    });
  }

  public updateSelected() {
    switch (this.selectedId) {
      case "basketball":
        return (this.selectedSport = this.basketball);
      case "football":
        return (this.selectedSport = this.football);
      case "tennis":
        return (this.selectedSport = this.tennis);
      case "hockey":
        return (this.selectedSport = this.hockey);
    }
  }

  public selectSport(sportId: string, index: number) {
    this.selectedId = sportId;
    this.translate = 140 * index;
    this.slide = index.toString();
    this.splitBetsToSports();
  }

  public emptySports() {
    this.football.items = [];
    this.basketball.items = [];
    this.tennis.items = [];
    this.hockey.items = [];
  }

  ngOnDestroy() {
    this.apiService.pullStop();
  }
}
