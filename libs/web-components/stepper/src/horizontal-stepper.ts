import { customElement } from 'lit/decorators.js';
import { BaseStepper } from './base-stepper';
import { styles } from './h-styles.css';

@customElement('fds-horizontal-stepper')
export class HorizontalStepper extends BaseStepper {
  static styles = styles;
}
