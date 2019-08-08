import { OnInit, Input, Directive, ElementRef} from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[uxg-tooltip]',
})

export class TooltipDirective implements OnInit {
  private tippy: any;
  private popper: any;

  constructor(private el: ElementRef) { }
  @Input() content;
  @Input() position;

  ngOnInit() {
    this.loadTippy();
  }

  loadTippy() {
    setTimeout(() => {
      const el = this.el.nativeElement;
      console.log(el);
      const tippyOptions = {
        placement: this.position || 'top',
        content: this.content || 'Default tooltip'
      };

      if (this.tippy) {
        this.tippy.destroy(this.popper);
      }

      this.tippy = tippy(el, tippyOptions);
      this.popper = this.tippy.popper;
    });
  }
}
