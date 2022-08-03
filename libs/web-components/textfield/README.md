# Textfield

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/textfield?style=for-the-badge)](https://www.npmjs.com/package/@finastra/textfield)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/textfield?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/textfield')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-textfield--default)

Text fields let users enter and edit text.

The `fds-textfield`  extends [Material web's mwc-textfield-base](https://github.com/material-components/material-web/tree/master/packages/textfield).

## Usage

### Import

```
npm i @finastra/textfield
```

```ts
import '@finastra/textfield';
...
<fds-textfield label="Field me in"></fds-textfield>
```

### Pure HTML pages

```html
<script src="https://cdn.jsdelivr.net/npm/@finastra/textfield/dist/textfield.js"></script>

<fds-textfield label="Field me in"></fds-textfield>
```

### Native pickers

Date pickers and Time pickers allow selecting a value from a standard format.

The **Textfield** support date `type="date"`, time `type="time"` and date&time `type="datetime-local"` pickers. See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) for more information about the different `input` types.

#### Example

```html
<fds-textfield type="date" iconTrailing="calendar_today"></fds-textfield>
```
