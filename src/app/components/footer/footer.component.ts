import { Component, OnInit, OnDestroy } from "@angular/core";
import { payments } from "./payments";
import { CouponService } from "src/app/services/coupon.service";
import { ITeam } from "src/app/interfaces/bet.interface";
import { offer } from "./offer";
import { products } from "./products";
import { information } from "./information";
import { about } from "./about";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit, OnDestroy {
  payments: string[] = payments;
  offer: string[] = offer;
  products: string[] = products;
  information: string[] = information;
  about: string[] = about;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
