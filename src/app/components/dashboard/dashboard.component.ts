import { Component, OnInit, Input } from "@angular/core";
import { APIService } from "src/app/api.service";
import { IBet, ISport } from "src/app/interfaces/bet.interface";
import { slide } from "src/app/animation/dashboard-slide.animation";
import { timer } from "rxjs";
import { switchPage } from "src/app/animation/switchPage.animation";
import { toggleDashboard } from "src/app/animation/toggleDashboard.animation";
import { bounceList } from "src/app/animation/bounce-list.animation";
import { CouponService } from "src/app/services/coupon.service";
import { backlog } from "../card/backlog";

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
  public backlog: string[][] = backlog;
  public leages: string[];
  public dates: number[];
  public scores: string[];
  public dateRandomizer = 604800000;
  public highlighterWidth: number = 130;
  constructor(
    private apiService: APIService,
    private couponService: CouponService
  ) {}

  ngOnInit() {
    this.height = this.type === "live-bets" ? 390 : 450;
    this.options = ["football", "basketball", "tennis", "hockey"];
    this.getBets();
    this.watchBets();
    this.getRandomData();
  }
  public trackByName(index, item) {
    return item.name;
  }

  getRandomData() {
    const arr = new Array(10).fill(null);
    this.leages = arr.map(leage => {
      const index = Math.floor(Math.random() * this.backlog[0].length);
      return this.backlog[0][index];
    });

    this.dates = arr.map(item =>
      Math.floor(new Date().getTime() + Math.random() * this.dateRandomizer)
    );

    const randomNumber = (index: number) => {
      return Math.floor(Math.random() * index);
    };

    this.scores = arr.map(() => `${randomNumber(4)}:${randomNumber(4)}`);
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
      if (i < 10) {
        this.football.items.push(this.bets[i]);
      } else if (i < 20) {
        this.basketball.items.push(this.bets[i]);
      } else if (i < 30) {
        this.tennis.items.push(this.bets[i]);
      } else if (i < 40) {
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
    this.translate = this.highlighterWidth * index;
    this.slide = index.toString();
    this.splitBetsToSports();
  }

  public emptySports() {
    this.football.items = [];
    this.basketball.items = [];
    this.tennis.items = [];
    this.hockey.items = [];
  }

  addToCoupon(bet: IBet, selectedIndex: number, $event) {
    if (!$event) {
      this.couponService.addToCoupon.next({ bet, selectedIndex });
    } else {
      this.couponService.removeFromCoupon.next(bet.id);
    }
  }

  ngOnDestroy() {
    this.apiService.pullStop();
  }
}
