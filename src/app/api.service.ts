import { Injectable } from "@angular/core";
import { WebsocketService } from "./websocket.service";
import { Subject, Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class APIService {
  sConnection: Subject<any>;
  public url: string = environment.ws_url;
  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService, private http: HttpClient) {
    this.sConnection = <Subject<any>>wsService.connect();
  }
  public pullStart(): Observable<any> {
    return this.http.get(this.url + "/pulling/start?rate=0.5");
  }
  public pullStop(): Observable<any> {
    return this.http.get(this.url + "/pulling/stop");
  }
  public getBets(): Observable<any> {
    return this.http.get(this.url + "/bets");
  }
}
