# Stepper

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/stepper?style=for-the-badge)](https://www.npmjs.com/package/@finastra/stepper)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/stepper?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/stepper')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-stepper-horizontal--default)

Steppers display progress through a sequence of logical and numbered steps.

We created two types of stepper, one horizontal and one vertical, you can then play around with the different states of steps, such as active or success for example.

## Usage

### Import

```
npm i @finastra/stepper
```

```ts
import '@finastra/stepper';
this.steps = [
    {
        label: 'Step Success',
        description: 'Ad in dolore eu anim est excepteur ex. Ullamco irure voluptate laboris cupidatat non excepteur minim nulla dolor. '
    },
    {
        label: 'Step Active',
        description: 'Aute velit incididunt ex veniam aliqua. Ullamco ullamco reprehenderit laborum aliquip dolor. Do elit sint ullamco .',
        disabled: true
    },
    {
        label: 'Step Active',
        description: 'Aute velit incididunt ex veniam aliqua. Ullamco ullamco reprehenderit laborum aliquip dolor. Do elit sint ullamco .',
        error: true
    },
    {
        label: 'Step Inactive',
        description: 'Sunt mollit quis anim laboris amet laboris irure magna. Fugiat ullamco ea qui consequat laborum. ',
        activeStepIcon: 'sync'
    }
];
...
<fds-horizontal-stepper currentStepIndex="1" steps="${this.steps}"></fds-horizontal-stepper>

<fds-vertical-stepper currentStepIndex="1" steps="${this.steps}"></fds-vertical-stepper>
```

### API

<!-- DOC -->

#### Attributes

| Attribute   | Type      | Default | Description          |
| ----------- | --------- | ------- | -------------------- |
| `secondary` | `boolean` | false   | Use Secondary color. |

#### Properties

| Property           | Attribute          | Type     | Default | Description                   |
| ------------------ | ------------------ | -------- | ------- | ----------------------------- |
| `currentStepIndex` | `currentStepIndex` | `number` | -1      | Index of current active step. |
| `steps`            |                    | `Step[]` | []      |                               |

#### Methods

| Method              | Type                                 |
| ------------------- | ------------------------------------ |
| `renderIconAndLine` | `(index: number): TemplateResult<1>` |

#### CSS Custom Properties

| Property                   | Type | Default | Description         |
| -------------------------- | ---- | ------- | ------------------- |
| `--fds-stepper-line-space` | text | "8px"   | Stepper line space. |

# fds-vertical-stepper

#### Attributes

| Attribute                                                                                                    | Type      | Default | Description          |
| ------------------------------------------------------------------------------------------------------------ | --------- | ------- | -------------------- |
| `labelMode] - Position of the label relative to the steps. Available values ["none", "center", "background"` |           |         |                      |
| `secondary`                                                                                                  | `boolean` | false   | Use Secondary color. |

#### Properties

| Property           | Attribute          | Type     | Default | Description                   |
| ------------------ | ------------------ | -------- | ------- | ----------------------------- |
| `currentStepIndex` | `currentStepIndex` | `number` | -1      | Index of current active step. |
| `labelMode`        | `label-mode`       | `string` | ""      |                               |
| `steps`            |                    | `Step[]` | []      |                               |

#### Methods

| Method              | Type                                 |
| ------------------- | ------------------------------------ |
| `renderIconAndLine` | `(index: number): TemplateResult<1>` |

#### CSS Custom Properties

| Property                   | Type | Default | Description         |
| -------------------------- | ---- | ------- | ------------------- |
| `--fds-stepper-line-space` | text | "8px"   | Stepper line space. |

<!-- /DOC -->
