import { of, Observable, Subject } from "rxjs";

export class ApiServiceMock {
  public pullStart(): Observable<any> {
    return of();
  }
  public pullStop(): Observable<any> {
    return of();
  }
  public getBets(): Observable<any> {
    return of();
  }
  public sConnection: Subject<any> = new Subject();
}
