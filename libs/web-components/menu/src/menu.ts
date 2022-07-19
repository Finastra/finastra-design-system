import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import { styles as baseStyle } from '@material/mwc-menu/mwc-menu.css.js';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/** 
* @cssprop [--fds-menu-item-height=48px] - Height of single-line list-items in the menu.
* @cssprop [--fds-menu-min-width=112px]- Menu min-width.
* @cssprop [--fds-menu-max-width=calc(100vw - 32px)]- Menu max-width.
* @cssprop [--fds-menu-max-height=calc(100vh - 32px)] - Menu max-height.
* @cssprop [--fds-menu-z-index=8]- Z-index of the popup menu surface.

* @attr [open=false] - Whether the menu should open and display.
* @attr [anchor=null] - Determines from which element the floating menu should calculate sizing and position offsets. In the default case, both mwc-menu and the anchor should share a parent with position:relative. Changing anchor typically requires absolute or fixed.
* @attr [corner="TOP_START"] - Corner of the anchor from which the menu should position itself. 
* @attr [menuCorner="START"] - Horizontal corner of the menu from which the menu should position itself. NOTE: Only horizontal corners are supported. 
* @attr [quick=false] - Whether to skip the opening animation.
* @attr [absolute=false] - Makes the menu's position absolute which will be relative to whichever ancestor has position:relative. Setting x and y will modify the menu's left and top. Setting anchor will attempt to position the menu to the anchor.
* @attr [fixed=false] - Makes the menu's position fixed which will be relative to the window. Setting x and y will modify the menu's left and top. Setting anchor will attempt to position the menu to the anchor's immediate position before opening.
* @attr [x=null] - Sets horizontal position when absolute. When given an anchor, sets horizontal position relative to anchor at given corner. Requires y not to be null.
* @attr [y=null] - Sets vertical position when absolute. When given an anchor, sets vertical position relative to anchor at given corner. Requires x not to be null.
* @attr [forceGroupSelection=false] - Forces a menu group to have a selected item by preventing deselection of menu items in menu groups via user interaction.
* @attr [defaultFocus="LIST_ROOT"] - Item to focus upon menu open.
* @attr [fullwidth=false] - Sets surface width to 100%.
* @attr [stayOpenOnBodyClick=false] - Prevents the menu from closing when clicking outside the menu.
* @attr [wrapFocus=false] - Proxies to mwc-list's wrapFocus property.
* @attr [innerAriaLabel=null] - Proxies to mwc-list's innerAriaLabel property.
* @attr [innerRole="menu"] - Proxies to mwc-list's innerRole property.
* @attr [multi=false] - Proxies to mwc-list's multi property.
* @attr [activatable=false] - Proxies to mwc-list's activatable property.
* @attr [items=[]] - Proxies to mwc-list's index property.
* @attr [selected=null] - Proxies to mwc-list's selected property.
*/
@customElement('fds-menu')
export class Menu extends MenuBase {
  static override styles = [baseStyle, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-menu': Menu;
  }
}
