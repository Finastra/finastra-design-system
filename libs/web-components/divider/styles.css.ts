/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
import {css} from 'lit-element';
export const styles = css`:host{display:block;margin:0;border-top-width:1px;border-top-style:solid;border-top-color:var(--fds-divider-color, rgba(0, 0, 0, 0.12))}:host([inset=left]){margin-left:var(--fds-divider-inset-margin, 80px)}[dir=rtl] :host([inset=left]){margin-left:auto;margin-right:var(--fds-divider-inset-margin, 80px)}:host([inset=right]){margin-right:var(--fds-divider-inset-margin, 80px)}[dir=rtl] :host([inset=right]){margin-right:auto;margin-left:var(--fds-divider-inset-margin, 80px)}:host([inset=both]){margin-right:calc(var(--fds-divider-inset-margin, 80px) / 2);margin-left:calc(var(--fds-divider-inset-margin, 80px) / 2)}:host([vertical]){border-top:0;border-right-width:1px;border-right-style:solid;border-right-color:var(--fds-divider-color, rgba(0, 0, 0, 0.12))}`;
