import {
  Component,
  OnInit,
  Input,
  HostListener,
  Output,
  EventEmitter
} from "@angular/core";
import { ITeam } from "src/app/interfaces/bet.interface";
import { CouponService } from "src/app/services/coupon.service";

@Component({
  selector: "app-bet",
  templateUrl: "./bet.component.html",
  styleUrls: ["./bet.component.scss"]
})
export class BetComponent implements OnInit {
  @Input() team: ITeam;
  @Input() id: number;
  @Input() index: number;
  selected: boolean = false;
  @Input() draw: number;
  @Output() event: EventEmitter<boolean> = new EventEmitter();
  constructor(private couponService: CouponService) {}

  ngOnInit() {
    this.watchCoupon();
  }

  @HostListener("click") handleBet() {
    this.event.emit(this.selected);
  }

  public watchCoupon() {
    this.couponService.coupon.subscribe(events => {
      const event = events.find(event => {
        return this.id === event.bet.id && this.index === event.selectedIndex;
      });
      this.selected = event ? true : false;
    });
  }
}
