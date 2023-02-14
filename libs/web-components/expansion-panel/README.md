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

### API

<!-- DOC -->

#### Properties

| Property             | Attribute            | Type                  | Default | Description                                   |
| -------------------- | -------------------- | --------------------- | ------- | --------------------------------------------- |
| `disabled`           | `disabled`           | `boolean`             | false   | Whether the expansion item should be disabled |
| `expanded`           | `expanded`           | `boolean`             | false   | Whether the expansion item is expaned         |
| `hideToggleIcon`     | `hideToggleIcon`     | `boolean`             |         |                                               |
| `toggleIconPosition` | `toggleIconPosition` | `"before" \| "after"` |         |                                               |

#### Methods

| Method              | Type                 |
| ------------------- | -------------------- |
| `getParent`         | `(): ExpansionPanel` |
| `handleHeaderClick` | `(): void`           |

# fds-expansion-panel

#### Properties

| Property             | Attribute            | Type                | Default   | Description                                                |
| -------------------- | -------------------- | ------------------- | --------- | ---------------------------------------------------------- |
| `displayMode`        | `displayMode`        | `"default"\|"flat"` | "default" | The display mode used for all expansion panel items.       |
| `hideToggleIcon`     | `hideToggleIcon`     | `boolean`           | false     | Whether the expansion indicator should be hidden.          |
| `multi`              | `multi`              | `boolean`           | false     | Whether the expansion should allow multiple expanded items |
| `toggleIconPosition` | `toggleIconPosition` | `"before"\|"after"` | "after"   | The position of toggle indicator for all expansion items   |

#### Methods

| Method                     | Type                    |
| -------------------------- | ----------------------- |
| `closeOtherExpansionItems` | `(current: Node): void` |
| `getExpansionItems`        | `(): Node[]`            |

#### Slots

| Name          | Description                            |
| ------------- | -------------------------------------- |
| `default`     | Content to display in the body.        |
| `description` | Content to display in the description. |
| `title`       | Content to display in the title.       |

#### CSS Custom Properties

| Property                                     | Type | Default | Description             |
| -------------------------------------------- | ---- | ------- | ----------------------- |
| `--fds-expansion-panel-item-header`          | text | "48px"  | Header height.          |
| `--fds-expansion-panel-item-header-expanded` | text | "64px"  | Expanded header height. |

<!-- /DOC -->
