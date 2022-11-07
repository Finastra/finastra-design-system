import { animate, state, style, transition, trigger } from '@angular/animations';
import { Attribute, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
  @Input() appearance: MatFormFieldAppearance = 'fill';

  @Input() hint?: string;

  @Output() search = new EventEmitter<string | undefined>();

  term$ = new Subject<string | undefined>();
  private termSubscription: Subscription;

  constructor(@Attribute('dense') public dense: any) {
    this.termSubscription = this.term$.pipe(debounceTime(this.debounceTime), distinctUntilChanged()).subscribe((query) => {
      this.search.emit(query);
    });
  }

  ngOnDestroy() {
    this.termSubscription.unsubscribe();
  }

  onChange(event: Event) {
    this.term$.next((event.target as HTMLInputElement).value);
  }
}
