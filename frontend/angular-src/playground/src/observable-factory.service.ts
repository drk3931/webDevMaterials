import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import { interval, Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Globals } from 'src/globals';

@Injectable({
  providedIn: 'root'
})
export class ObservableFactoryService {

  constructor(private globals: Globals) {

  }

  public getDebounceObs(elementRef: ElementRef): Observable<any> {

    let asDOM = elementRef.nativeElement;

    let searchObservable = fromEvent(asDOM, 'keyup').pipe(
      debounceTime(this.globals.DEBOUNCE_TIME)
    );

    return searchObservable;

  }
}
