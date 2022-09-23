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

### Pure HTML pages

```
<script type="module" src="https://cdn.jsdelivr.net/npm/@finastra/guided-tour/dist/src/guided-tour.js"></script>

<fds-guided-tour showStepInfo id="guided-tour-demo"></fds-guided-tour>
<script>
    const data =  {
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

    const guidedTour = document.getElementById('guided-tour-demo');
    guidedTour.data = data;
    guidedTour.show = true;
</script>

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
