import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  public popup: Subject<any> = new Subject();
  public closePopup: Subject<any> = new Subject();
  constructor() {}
}
