import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
import { fade } from "src/app/animation/fade.animation";
import { gentleDrop } from "src/app/animation/gantle-drop.animation";
import { timer } from "rxjs";

@Component({
  selector: "app-coupon-confirm",
  templateUrl: "./coupon-confirm.component.html",
  styleUrls: ["./coupon-confirm.component.scss"],
  animations: [gentleDrop, fade]
})
export class CouponConfirmComponent implements OnInit {
  public show = true;
  constructor(private modalService: ModalService) {}

  ngOnInit() {}
  close() {
    this.show = false;
    timer(500).subscribe(() => {
      this.modalService.closePopup.next();
    });
  }
}
