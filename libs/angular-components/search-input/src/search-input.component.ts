import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  Attribute
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'uxg-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uxg-search-input'
  },
  animations: [
    trigger('showHide', [
      state(
        'show',
        style({
          opacity: 1,
          visibility: 'visible'
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          visibility: 'hidden'
        })
      ),
      transition('show => hide', [animate('0.3s ease-out')]),
      transition('hide => show', [animate('0.2s ease-in')])
    ])
  ]
})
export class UxgSearchInputComponent implements OnDestroy {
  @Input() query = '';
  @Input() placeholder = 'Search';
  @Input() debounceTime = 400;

  @Input() hint?: string;

  @Output() search = new EventEmitter<string>();

  term$ = new Subject<string>();
  private termSubscription: Subscription;

  constructor(@Attribute('dense') public dense: any) {
    this.termSubscription = this.term$
      .pipe(debounceTime(this.debounceTime), distinctUntilChanged())
      .subscribe((query) => {
        this.search.emit(query);
      });
  }

  ngOnDestroy() {
    this.termSubscription.unsubscribe();
  }
}
