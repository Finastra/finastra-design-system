import { SliderSingleBase } from '@material/mwc-slider/slider-single-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @attr [value] - Current selected value.
 * @attr [min=0] - Minimum selectable value of the slider.
 * @attr [max=100] - Maximum selectable value of the slider.
 * @attr [step] - The step to increase current value.
 * @attr {boolean} [discrete] - display value above the thumb.
 * @attr {boolean} [withTickMarks] - display tick marks for each step on the track.
 * @attr {boolean} [disabled] - Disable component.
 */
@customElement('fds-slider')
export class Slider extends SliderSingleBase {
  static override styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-slider': Slider;
  }
}
