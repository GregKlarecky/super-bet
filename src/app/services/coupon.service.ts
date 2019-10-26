import { Injectable } from "@angular/core";
import { Subject, ReplaySubject } from "rxjs";
import { ICouponItem } from "../interfaces/coupon-item.interface";

@Injectable({
  providedIn: "root"
})
export class CouponService {
  addToCoupon: Subject<ICouponItem> = new Subject();
  removeFromCoupon: Subject<number> = new Subject();
  coupon: ReplaySubject<ICouponItem[]> = new ReplaySubject(1);
  constructor() {}
}
