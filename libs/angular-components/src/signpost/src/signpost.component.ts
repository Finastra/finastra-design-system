import {Component, OnInit, Input, ElementRef} from '@angular/core';
import tippy from 'tippy.js';

@Component({
  selector: 'uxg-signpost',
  templateUrl: './signpost.component.html',
  styleUrls: ['./signpost.component.scss'],
})

export class SignpostComponent implements OnInit {

  constructor(private el: ElementRef) { }
  tippy;
  popper;

  @Input() content;
  @Input() position;
  ngOnInit() {
    this.loadTippy();
  }

  loadTippy() {
    setTimeout(() => {
      const tippyOptions =  {
        content: this.content || 'Hello',
        placement: this.position || 'right',
        arrow: true,
        trigger: 'click',
      };

      if (this.tippy) {
        this.tippy.destroy(this.popper);
      }

      this.tippy = tippy('#signpost', tippyOptions);
      this.popper = this.tippy.popper;
    });
  }
}
