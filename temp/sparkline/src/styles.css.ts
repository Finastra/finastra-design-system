/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
import {css} from 'lit';
export const styles = css`:host{display:block;width:100px;height:35px}.sparkline{stroke:var(--fds-primary, #694ed6)}.gradient-color{stop-color:var(--fds-primary, #694ed6)}:host([success]) .sparkline{stroke:var(--fds-success, #008744)}:host([success]) .gradient-color{stop-color:var(--fds-success, #008744)}:host([error]) .sparkline{stroke:var(--fds-error, #d60040)}:host([error]) .gradient-color{stop-color:var(--fds-error, #d60040)}`;
