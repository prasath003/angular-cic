import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataIntentService {

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isThemeSubject = new Subject<any>();

  constructor() { }

  newEvent(event : boolean){
    this.isThemeSubject.next(event);
  }
}
