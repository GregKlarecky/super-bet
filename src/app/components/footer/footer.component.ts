import { Component, OnInit, OnDestroy } from "@angular/core";
import { payments } from "./payments";
import { CouponService } from "src/app/services/coupon.service";
import { ITeam } from "src/app/interfaces/bet.interface";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit, OnDestroy {
  payments: string[] = payments;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
