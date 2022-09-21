# Expansion Panel
Expansion Panel provides an expandable details-summary view.
[![See it on NPM!](https://img.shields.io/npm/v/@finastra/expansion-panel?style=for-the-badge)](https://www.npmjs.com/package/@finastra/expansion-panel)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/expansion-panel?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/expansion-panel')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/data-display-expansionpanel--default)

## Usage

### Import

```
npm i @finastra/expansion-panel
```

```ts
import '@finastra/expansion-panel';
...
<fds-expansion-panel>
    <fds-expansion-panel-item>
          <div slot="title">Trip name</div>
          <div slot="description">Caribbean cruise</div>
          <div class="content">
              Add a form to input the trip name
          </div>
    </fds-expansion-panel-item>

    <fds-expansion-panel-item expanded>
        <div slot="title">Location</div>
        <div slot="description">Select trip destination</div>
        <div class="content">
            Add a form to input the location
        </div>
    </fds-expansion-panel-item>

    <fds-expansion-panel-item disabled>
        <div slot="title">Start and end dates</div>
        <div slot="description">
          <span>Start date: Feb 29, 2016</span>
          <span>End date: Not set</span>
        </div>
        <div class="content"></div>
    </fds-expansion-panel-item>

</fds-expansion-panel>
```

### Pure HTML pages

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Spartan:wght@800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@finastra/expansion-panel/dist/fds-expansion-panel.js"></script>

 <fds-expansion-panel>
    <fds-expansion-panel-item>
        <div slot="title">User profile</div>
        <div slot="description">User profile description</div>
        <div class="content">
            User profile content
        </div>
    </fds-expansion-panel-item>
</fds-expansion-panel>
```
