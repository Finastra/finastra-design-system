import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ButtonHubService {
  public buttonsReady = false;

  private _previousButtonClicked = new Subject<any>();
  public get previousButtonClicked(): Observable<any> {
    return this._previousButtonClicked.asObservable();
  }

  private _nextButtonClicked = new Subject<any>();
  public get nextButtonClicked(): Observable<any> {
    return this._nextButtonClicked.asObservable();
  }

  private _cancelButtonClicked = new Subject<any>();
  public get cancelButtonClicked(): Observable<any> {
    return this._cancelButtonClicked.asObservable();
  }

  private _doneButtonClicked = new Subject<any>();
  public get doneButtonClicked(): Observable<any> {
    return this._doneButtonClicked.asObservable();
  }

  private _customButtonClicked = new Subject<any>();
  public get customButtonClicked(): Observable<any> {
    return this._customButtonClicked.asObservable();
  }

  public buttonClicked(buttonType: string) {
    if ('previous' === buttonType) {
      this._previousButtonClicked.next();
    } else if ('next' === buttonType) {
      this._nextButtonClicked.next();
    } else if ('done' === buttonType) {
      this._doneButtonClicked.next();
    } else if ('cancel' === buttonType) {
      this._cancelButtonClicked.next();
    } else {
      this._customButtonClicked.next(buttonType);
    }
  }
}
