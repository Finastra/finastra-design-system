import '@finastra/tab';
import '@finastra/tab-bar';
import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styles } from './styles.css';
import { TabItem } from './tab-item';

interface TabInfo {
  label: string
}

@customElement('fds-tab-group')
export class TabGroup extends LitElement {
  static styles = styles;

  @property({ type: Number })
  selectedIndex = 0;
  
  @property({ type: Boolean }) seperator = false;
  
  @property({ type: String }) headerPosition = 'left';
  @property({ type: String }) headerDisplayType = '' ;
  
  @state()
  private tabs: TabInfo[] = []

  @query('slot[name="selected"]', true)
  private selectedSlot!: HTMLSlotElement;

  private childListObserver: MutationObserver | null = null 


  render() {
    return html`
    <div class="fds-tab-group-wrapper">
      <fds-tab-bar class="fds-tab-group-tab-bar" position="${this.headerPosition}" ?seperator=${this.seperator} .activeIndex=${this.selectedIndex} @MDCTabBar:activated=${this.handleSelectedTab}>
        ${this.tabs.map(tab => html`<fds-tab ?classic=${this.headerDisplayType === 'classic'}  ?segmented=${this.headerDisplayType === 'segmented'} .label=${tab.label}></fds-tab>`)}
      </fds-tab-bar>
      <div class="fds-tab-content-wrapper">
        <slot name="selected"></slot>
      </div>
    </div>
    `;
  }

  private handleSelectedTab(event: CustomEvent) {
    const index: number =  event.detail.index;
    this.selectedIndex = index
  }
  
  protected override async updated(changedProperties: PropertyValues) {
    if (changedProperties.has('selectedIndex')) {
      this.updateSlots();   
      this.dispatchSelectedIndexChange()         
    }
  }

  private dispatchSelectedIndexChange() {
    this.dispatchEvent(new CustomEvent('selectedIndexChange', {
      detail: {index: this.selectedIndex},
      bubbles: true,
      cancelable: true
    }))
  }
  protected override async firstUpdated() {
    this.updateSlots();      
  }   
    

  updateTabInfo() {
    const _tabs: TabInfo[] = []
    for (const item of this.children) {
      if (item instanceof TabItem) {
        _tabs.push({
          label: item.label
        })
      }
    }
    this.tabs = _tabs
  }

  observeChildList() {
    this.childListObserver = new MutationObserver(() => {
      this.updateTabInfo()
      console.log('childListObserver')
    })
    this.childListObserver.observe(this, {subtree: false, childList: true});
  }

  private updateSlots() {
    // unset old slot state
    this.selectedSlot.assignedElements()[0]?.removeAttribute('slot');
    // set slots
    this.children[this.selectedIndex]?.setAttribute('slot', 'selected');
  }

  
  override connectedCallback(): void {
      super.connectedCallback();
      this.observeChildList()
      this.updateTabInfo()
  }
  override disconnectedCallback(): void {
    super.disconnectedCallback()
    if (this.childListObserver) {
      this.childListObserver.disconnect()
    }
  }
    

}

declare global {
  interface HTMLElementTagNameMap {
    'fds-tab-group': TabGroup;
  }
}
