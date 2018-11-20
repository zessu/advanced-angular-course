import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private subject$: Subject<any> = new Subject();
  public close$: Observable<any> = this.subject$.asObservable();

  constructor() { }

  close() {
    this.subject$.next();
  }
}
