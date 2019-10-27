import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-coupon-confirm",
  templateUrl: "./coupon-confirm.component.html",
  styleUrls: ["./coupon-confirm.component.scss"]
})
export class CouponConfirmComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}
  close() {
    this.modalService.closePopup.next();
  }
}
