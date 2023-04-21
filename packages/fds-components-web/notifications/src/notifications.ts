import '@finastra/badge';
import '@finastra/button';
import '@finastra/divider';
import '@finastra/icon';
import '@finastra/icon-button';
import '@finastra/list';
import '@finastra/menu';
import { html, LitElement, PropertyValueMap, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';

import { Menu } from '@finastra/menu';
import tippy from 'tippy.js';
import { UserNotification } from './notifications.models';
import { styles } from './styles.css';

/**
 * @fires markonenotificationread - emitted as a @CustomEvent when one notification should be marked as read, with ```event.detail.notificationId``` set
 * @fires markallnotificationsread - emitted as a @CustomEvent when all notifications should be marked as read
 * @fires deleteonenotification - emitted as a @CustomEvent when one notification should be deleted, with ```event.detail.notificationId``` set
 * @fires deleteallnotifications - emitted as a @CustomEvent when all notifications should be deleted
 * @fires navigateto - emitted as a @CustomEvent when one notification should redirect the user to an url, with ```event.detail.path``` set
 */

@customElement('fds-notifications')
export class Notifications extends LitElement {
  static styles = styles;

  @query('#notifications-menu') protected menu!: Menu;

  @query('#notifications-button') protected anchor;

  /**
   * An array of @UserNotification items to populate the component
   * @type {Array}
   */
  @property({ type: Array<UserNotification> })
  notifications: UserNotification[] = [];

  get newNotifications() {
    return this.notifications.filter((notification) => notification.state === 'new').length;
  }

  private _textarea; //used as a reference for the clipboard functionality
  private _resetMessage?; //reference to clear timeouts

  tippyOptions = {
    touch: false,
    theme: 'finastra'
  };

  render() {
    return html`<fds-badge value="${this.newNotifications || null}" color="secondary" position="topRight" type="">
        <fds-icon-button
          primary
          icon="notifications_none"
          label="Notifications"
          aria-label="Notifications"
          data-tippy-content="Notifications"
          id="notifications-button"
        ></fds-icon-button>
      </fds-badge>
      <fds-menu id="notifications-menu" fullwidth>
        <div class="notifications-container">
          <div class="notifications-header">
            <div class="headline">Notifications</div>
            ${this.newNotifications > 0 ? html`<div>You have <strong>${this.newNotifications}</strong> new notifications</div>` : ''}
            ${this.newNotifications === 0 && this.notifications.length ? html`<div *ngIf="">You have no new notifications</div>` : ''}
          </div>
          <fds-divider></fds-divider>
          <div class="notifications-list">
            ${map(
              this.notifications,
              (notification) => html`<fds-list-item
                  key=${notification.id}
                  class="notification ${classMap({ read: notification.state === 'read' })}"
                  @click="${this.markNotificationAsRead}"
                >
                  <div class="date">${this.renderNotificationCreationDate(notification)}</div>
                  <div class="message-container">
                    <fds-icon dense class="fds-${notification.type}"
                      >${notification.type === 'success' ? 'check_circle' : notification.type}</fds-icon
                    >
                    <div class="message ${classMap({ read: notification.state === 'read', new: notification.state === 'new' })}">
                      ${notification.message}
                    </div>
                    <div class="actions">
                      ${!notification.link
                        ? html`<fds-icon-button
                            dense
                            icon="content_copy"
                            type="button"
                            aria-label="Copy to clipboard"
                            label="Copy to clipboard"
                            data-tippy-content="Copy to clipboard"
                            key=${notification.id}
                            @click="${this.copyToClipboard}"
                          >
                          </fds-icon-button>`
                        : html``}
                      ${notification.link
                        ? html` <fds-icon-button
                            dense
                            icon="open_in_new"
                            type="button"
                            aria-label="Go to location"
                            label="Go to location"
                            data-tippy-content="Go to location"
                            key=${notification.id}
                            @click="${this.goToLocation}"
                          >
                          </fds-icon-button>`
                        : html``}
                      ${!notification.unDeletable
                        ? html`<fds-icon-button
                            dense
                            icon="delete"
                            type="button"
                            aria-label="Delete notification"
                            label="Delete notification"
                            data-tippy-content="Delete notification"
                            key="${notification.id}"
                            @click="${this.deleteNotification}"
                          >
                          </fds-icon-button>`
                        : html``}
                    </div>
                  </div>
                </fds-list-item>
                <fds-divider></fds-divider>`
            )}
          </div>
          <div class="notifications-footer">
            <fds-outlined-button
              secondary
              ?disabled="${!this.notifications.length || null}"
              label="Delete all"
              aria-label="Delete all notifications"
              data-tippy-content="Delete all notifications"
              @click="${this.deleteAllNotifications}"
            ></fds-outlined-button
            ><fds-button
              secondary
              ?disabled="${!(this.newNotifications > 0) || null}"
              label="Mark all as read"
              aria-label="Mark all notifications as read"
              data-tippy-content="Mark all notifications as read"
              @click="${this.markAllNotificationsAsRead}"
            ></fds-button>
          </div>
        </div>
      </fds-menu> `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    //set up things needed for copy to clipboard functionality
    const textarea = (this._textarea = document.createElement('textarea'));
    const styles = textarea.style;
    // Hide the element for display and accessibility. Set a fixed position so the page layout
    // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
    // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.
    styles.position = 'fixed';
    styles.top = styles.opacity = '0';
    styles.left = '-999em';
    textarea.setAttribute('aria-hidden', 'true');
    // Making the textarea `readonly` prevents the screen from jumping on iOS Safari (see #25169).
    textarea.readOnly = true;
    document.body.appendChild(textarea);

    //set component properties
    setTimeout(() => {
      this.menu.anchor = this.anchor;
      this.menu.corner = 'BOTTOM_START';
      this.menu.menuCorner = 'END';
      this.menu.x = 20;
      this.menu.y = -10;

      // anchor must share a parent with menu that is `position: relative`
      this.anchor.addEventListener('click', () => {
        this.menu.open = !this.menu.open;
      });
    }, 0);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = undefined;
    }
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>): void {
    tippy(this.renderRoot.querySelectorAll('[label]'), this.tippyOptions);
  }

  protected createRenderRoot() {
    const root = super.createRenderRoot();
    root.addEventListener('opened', () =>
      this.renderRoot.querySelectorAll('[label]').forEach((element) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!(element as any)._tippy) {
          tippy(element, this.tippyOptions);
        }
      })
    );
    return root;
  }

  private markNotificationAsRead($event: Event) {
    const notification = this.findNotification($event);
    $event.stopPropagation();
    if (notification.state === 'new') {
      this.dispatchEvent(
        new CustomEvent('markonenotificationread', { detail: { notificationId: notification.id }, composed: true, bubbles: true })
      );
    }
  }

  private deleteNotification($event: Event) {
    const notification = this.findNotification($event);
    $event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('deleteonenotification', { detail: { notificationId: notification.id }, composed: true, bubbles: true })
    );
  }

  private markAllNotificationsAsRead() {
    this.dispatchEvent(new CustomEvent('markallnotificationsread', { composed: true, bubbles: true }));
  }

  private deleteAllNotifications() {
    this.dispatchEvent(new CustomEvent('deleteallnotifications', { composed: true, bubbles: true }));
  }

  private copyToClipboard($event: Event) {
    const copyBtn: HTMLElement = $event.target as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tippyInstance = (copyBtn as any)._tippy;
    const notification = this.findNotification($event);
    const successfulCopy = this.copyTextToClipboard(notification.message);
    if (successfulCopy) {
      tippyInstance.setContent('Copied');
      tippyInstance.show();
      clearTimeout(this._resetMessage);
      this._resetMessage = setTimeout(() => {
        tippyInstance.setContent('Copy to clipboard');
      }, 1500);
    }
  }

  private goToLocation($event) {
    const notification = this.findNotification($event);
    const url = new URL(notification.link!);
    this.dispatchEvent(new CustomEvent('navigateto', { detail: { path: url.pathname }, composed: true, bubbles: true }));
  }

  private findNotification($event: Event): UserNotification {
    const id = ($event.currentTarget as HTMLElement).getAttribute('key')!;
    return this.notifications.find((notif) => notif.id === id)!;
  }

  private renderNotificationCreationDate(notification: UserNotification) {
    let template: TemplateResult<1>;
    if (notification.createdOn) {
      const date = new Date(notification.createdOn);
      template = html`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    } else {
      template = html`&nbsp;`;
    }
    return template;
  }

  private copyTextToClipboard(text: string) {
    const textarea = this._textarea;
    let successful = false;
    textarea.value = text;

    try {
      // Older browsers could throw if copy is not supported.
      if (textarea) {
        const currentFocus = document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = document.execCommand('copy');
        if (currentFocus) {
          // currentFocus.focus();
        }
      }
    } catch {
      // Discard error.
      // Initial setting of {@code successful} will represent failure here.
    }
    return successful;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-notifications': Notifications;
  }
}
