import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public lockScroll: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.popup.subscribe(popup => {
      this.lockScroll = true;
    });
    this.modalService.closePopup.subscribe(popup => {
      this.lockScroll = false;
    });
  }
}
