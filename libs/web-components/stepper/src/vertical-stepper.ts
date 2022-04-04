import { customElement, property } from 'lit/decorators.js';
import { BaseStepper } from './base-stepper';
import { styles } from './v-styles.css';

@customElement('fds-vertical-stepper')
export class VerticalStepper extends BaseStepper {
  static styles = styles;

  @property({ type: String, attribute: 'label-mode', reflect: true })
  labelMode = '';
}
