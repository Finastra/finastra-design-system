# GuidedTour

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/guided-tour?style=for-the-badge)](https://www.npmjs.com/package/@finastra/guided-tour)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/guided-tour?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/guided-tour')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-guided-tour--default)

## Installation

```
npm i @finastra/guided-tour
```

## Usage

### Import

```ts
import @finastra/guided-tour
this.data = {
    steps: [
        {
            title: 'Step 1'
            description: 'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. '
        },
        {
            title: 'Step 2'
            description: 'Lorem ipsum dolor sit amet. Ab rerum totam et vero error est commodi autem et dolores magnam sed harum quibusdam sed tempore eligendi et quos perspiciatis. Eos autem natus eum iusto sunt sit laborum dolores At reprehenderit cumque. '
        }
    ]
}

<fds-guided-tour showStepInfo data="${this.data}" show id="guided-tour-demo"></fds-guided-tour>
```

## Data Interface

```ts
export interface TourStep {
  selector?: string;
  title: string;
  description?: string;
  placement?: Placement;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  radius?: number;
  mainAxis?: number;
  crossAxis?: number;
}

export interface Tour {
  stepInfo?: string;
  steps: TourStep[];
}
```

- `stepInfo` property is a string template. Its default value is : `Step ${currentStep} of ${totalSteps}`

### API

<!-- DOC -->

#### Properties

| Property               | Attribute          | Type                           | Default      | Description                           |
| ---------------------- | ------------------ | ------------------------------ | ------------ | ------------------------------------- |
| `arrowPosition`        |                    | `StyleInfo`                    | {}           |                                       |
| `cardPosition`         |                    | `StyleInfo`                    | {}           |                                       |
| `currentStepElement`   |                    | `Element \| null \| undefined` | "undefined"  |                                       |
| `currentStepIndex`     | `currentStepIndex` | `number`                       | 0            | Current step in the tour.             |
| `data`                 | `data`             | `Tour`                         | {"steps":[]} | Data for component.                   |
| `oldBodyOverflowValue` |                    | `string`                       | ""           |                                       |
| `override`             |                    |                                |              |                                       |
| `show`                 | `show`             | `boolean`                      | false        | Whether the tour should display.      |
| `showStepInfo`         | `showStepInfo`     | `boolean`                      | false        | Whether the step info should display. |
| `stepCardArrowElement` |                    | `Promise<HTMLElement>`         |              |                                       |
| `stepCardElement`      |                    | `Promise<HTMLElement>`         |              |                                       |

#### Methods

| Method  | Type                                |
| ------- | ----------------------------------- |
| `back`  | `(): void`                          |
| `next`  | `(): void`                          |
| `start` | `(currentTourIndex?: number): void` |
| `stop`  | `(): void`                          |

#### Slots

| Name          | Description              |
| ------------- | ------------------------ |
| `back-button` | Content for back button. |
| `done-button` | Content for done button. |
| `next-button` | Content for next button. |
| `skip-button` | Content for skip button. |

#### CSS Custom Properties

| Property                           | Default | Description                     |
| ---------------------------------- | ------- | ------------------------------- |
| `--fds-guided-tour-card-max-width` | "500px" | Max width of panel information. |

<!-- /DOC -->
