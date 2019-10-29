import { ICouponItem } from "../interfaces/coupon-item.interface";

export const couponMock: ICouponItem[] = [
  {
    bet: {
      id: 1234,
      draw: 4.44,
      teams: [{ name: "A", win: 3.33 }, { name: "B", win: 6.66 }]
    },
    selectedIndex: 0
  }
];
