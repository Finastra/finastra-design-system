import { animate, query, style, transition, trigger, group } from '@angular/animations';

export function wizardAnimation() {
  return trigger('wizardAnimation', [
    // Previous, slide left to right to show left page
    transition(':decrement', [
      // set new page X location to be -100%
      query(
        ':enter',
        style({
          width: '100%',
          transform: 'translateX(-100%)'
        })
      ),

      group([
        // slide existing page from 0% to 100% to the right
        query(
          ':leave',
          animate(
            '500ms ease-in-out',
            style({
              opacity: 0,
              width: '100%',
              transform: 'translateX(100%)'
            })
          )
        ),
        // slide new page from -100% to 0% to the right
        query(
          ':enter',
          animate(
            '500ms ease-in-out',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          )
        )
      ])
    ]),

    // Next, slide right to left to show right page
    transition(':increment', [
      // set new page X location to be 100%
      query(
        ':enter',
        style({
          width: '100%',
          transform: 'translateX(100%)'
        })
      ),

      group([
        // slide existing page from 0% to -100% to the left
        query(
          ':leave',
          animate(
            '500ms ease-in-out',
            style({
              opacity: 0,
              width: '100%',
              transform: 'translateX(-100%)'
            })
          )
        ),
        // slide new page from 100% to 0% to the left
        query(
          ':enter',
          animate(
            '500ms ease-in-out',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          )
        )
      ])
    ])
  ]);
}
