import { Component, OnInit } from "@angular/core";
import { CouponService } from "src/app/services/coupon.service";
import { ICouponItem } from "src/app/interfaces/coupon-item.interface";
import { ModalService } from "src/app/services/modal.service";
import { CouponConfirmComponent } from "../coupon-confirm/coupon-confirm.component";
import { gentleDrop } from "src/app/animation/gantle-drop.animation";
import { fade } from "src/app/animation/fade.animation";

@Component({
  selector: "app-coupon",
  templateUrl: "./coupon.component.html",
  styleUrls: ["./coupon.component.scss"],
  animations: [gentleDrop, fade]
})
export class CouponComponent implements OnInit {
  stake: number = 5;
  events: ICouponItem[] = [];
  constructor(
    private couponService: CouponService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.couponService.addToCoupon.subscribe((event: ICouponItem) => {
      const copy = this.events.find(
        storedBet => storedBet.bet.id === event.bet.id
      );
      if (copy) {
        this.removeFromCoupon(event.bet.id);
      }
      this.events = [...this.events, event];
      this.couponService.coupon.next(this.events);
    });
    this.couponService.removeFromCoupon.subscribe(id => {
      this.removeFromCoupon(id);
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
  public removeFromCoupon(id: number) {
    this.events = this.events.filter(bet => bet.bet.id !== id);
    this.couponService.coupon.next(this.events);
  }

  openCouponModal() {
    this.events = [];
    this.couponService.coupon.next(this.events);
    this.modalService.popup.next(CouponConfirmComponent);
  }
}
