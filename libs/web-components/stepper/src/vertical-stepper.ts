import { customElement, property } from 'lit/decorators.js';
import { BaseStepper } from './base-stepper';
import { styles } from './v-styles.css';

/**
 * @attr [labelMode] - Position of the label relative to the steps. Available values ["none", "center", "background"]
 */
@customElement('fds-vertical-stepper')
export class VerticalStepper extends BaseStepper {
  static styles = styles;

  @property({ type: String, attribute: 'label-mode', reflect: true })
  labelMode = '';
}
