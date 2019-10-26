import { Component, OnInit } from "@angular/core";
import { CouponService } from "src/app/services/coupon.service";
import { ITeam, IBet } from "src/app/interfaces/bet.interface";
import { ICouponItem } from "src/app/interfaces/coupon-item.interface";

@Component({
  selector: "app-coupon",
  templateUrl: "./coupon.component.html",
  styleUrls: ["./coupon.component.scss"]
})
export class CouponComponent implements OnInit {
  stake: number = 5;
  events: ICouponItem[] = [];
  constructor(private couponService: CouponService) {}

  ngOnInit() {
    this.couponService.addToCoupon.subscribe(event => {
      const copy = this.events.find(
        storedBet => storedBet.bet.id === event.bet.id
      );
      if (copy) {
        this.removeCoupon(event.bet.id);
      }
      this.events = [...this.events, event];
      this.couponService.coupon.next(this.events);
    });
    this.couponService.removeFromCoupon.subscribe(id => {
      this.removeCoupon(id);
    });
  }

  public getTotalOdds() {
    const odds = this.events.map(event => {
      if (event.selectedIndex >= 0) {
        return event.bet.teams[event.selectedIndex].win;
      } else {
        return event.bet.draw;
      }
    });
    if (odds.length) {
      return odds.reduce((prev: number, curr: number) => {
        return prev * curr;
      });
    }
    return 0;
  }
  public removeCoupon(id: number) {
    this.events = this.events.filter(bet => bet.bet.id !== id);
    this.couponService.coupon.next(this.events);
  }
}
