# Menu
`fds-menu` component is `mwc-menu` with a different tag to homogenize with FDS library. 

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/menu?style=for-the-badge)](https://www.npmjs.com/package/@finastra/menu)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/menu?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/menu')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/navigation-menu--default)

## Usage

The full document can be found [here](https://github.com/material-components/material-web/tree/mwc/packages/menu) 


### Import

```
npm i @finastra/menu
npm i @material/mwc-list;
npm i @finastra/button;

```

```ts
import '@finastra/menu';
import '@finastra/button';
import '@material/mwc-list/mwc-list-item';

...
<div style="position: relative;">
    <fds-button id="basicButton" raised label="Open Basic Menu"></fds-button>
    <fds-menu id="basicMenu">
        <mwc-list-item>one</mwc-list-item>
        <mwc-list-item>two</mwc-list-item>
        <mwc-list-item disabled><div>four</div></mwc-list-item>
        <li divider></li>
        <mwc-list-item>five</mwc-list-item>
    </fds-menu>
</div>

<script>
  const menu = document.getElementById('basicMenu');
  const button = document.getElementById('basicButton');

  // anchor must share a parent with menu that is `position: relative`
  menu.anchor = button;  
  button.addEventListener('click', function() {
    menu.open = !menu.open;
  });
</script>

```

### Pure HTML pages

```html
<script src="https://cdn.jsdelivr.net/npm/@finastra/button/dist/fds-button.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@finastra/menu/dist/fds-menu.js"></script>

<div style="position: relative;">
    <fds-button id="basicButton" raised label="Open Basic Menu"></fds-button>
    <fds-menu id="basicMenu">
        <mwc-list-item>one</mwc-list-item>
        <mwc-list-item>two</mwc-list-item>
        <mwc-list-item disabled><div>four</div></mwc-list-item>
        <li divider></li>
        <mwc-list-item>five</mwc-list-item>
    </fds-menu>
</div>

<script>
  const menu = document.getElementById('basicMenu');
  const button = document.getElementById('basicButton');

  // anchor must share a parent with menu that is `position: relative`
  menu.anchor = button;  
  button.addEventListener('click', function() {
    menu.open = !menu.open;
  });
</script>
```