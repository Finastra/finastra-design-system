import { SliderSingleBase } from '@material/mwc-slider/slider-single-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Color of the slider.
 * @attr [value=0] - Current selected value.
 * @attr [min=0] - Minimum selectable value of the slider.
 * @attr [max=100] - Maximum selectable value of the slider.
 * @attr [step=1] - The step to increase current value.
 * @attr {boolean} [discrete=false] - display value above the thumb.
 * @attr {boolean} [withTickMarks=false] - display tick marks for each step on the track.
 * @attr {boolean} [disabled=false] - Disable component.
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
