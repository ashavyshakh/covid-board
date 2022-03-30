import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class sharedServiceService {
    currentItem: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { 
    
  }
  setCurrentItem(currentItem: any): any {
    this.currentItem.next(currentItem);
  }

  getCurrentItem(): any {
    return this.currentItem.asObservable();
  }
 
}