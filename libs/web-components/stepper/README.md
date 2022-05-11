# Stepper

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/stepper?style=for-the-badge)](https://www.npmjs.com/package/@finastra/stepper)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/stepper?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/stepper')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-stepper--default)


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
        description: 'Aute velit incididunt ex veniam aliqua. Ullamco ullamco reprehenderit laborum aliquip dolor. Do elit sint ullamco .'
    },
    {
        label: 'Step Inactive',
        description: 'Sunt mollit quis anim laboris amet laboris irure magna. Fugiat ullamco ea qui consequat laborum. '
    }
];
...
<fds-horizontal-stepper currentStepIndex="1" steps="${this.steps}"></fds-horizontal-stepper>

<fds-vertical-stepper currentStepIndex="1" steps="${this.steps}"></fds-vertical-stepper>
```

### Pure HTML pages

```html
<!-- Horizontal Stepper -->
<script type="module" src="https://unpkg.com/@finastra/stepper@0.0.26/dist/src/horizontal-stepper.js?module"></script>

<fds-horizontal-stepper class="stepper" currentStepIndex="1"></fds-horizontal-stepper>

<!-- Vertical Stepper -->
<script type="module" src="https://unpkg.com/@finastra/stepper@0.0.26/dist/src/vertical-stepper.js?module"></script>

<fds-vertical-stepper class="stepper" currentStepIndex="1"></fds-vertical-stepper>

<script>
    // Steps assignment
    const steppers = document.querySelectorAll('.stepper');
  steppers.forEach((stepper) => {
    stepper.steps = [
      {
        label: 'Step Success',
        description: 'Ad in dolore eu anim est excepteur ex. Ullamco irure voluptate laboris cupidatat non excepteur minim nulla dolor. '
      },
      {
        label: 'Step Active',
        description: 'Aute velit incididunt ex veniam aliqua. Ullamco ullamco reprehenderit laborum aliquip dolor. Do elit sint ullamco .'
      },
      {
        label: 'Step Inactive',
        description: 'Sunt mollit quis anim laboris amet laboris irure magna. Fugiat ullamco ea qui consequat laborum. '
      }
    ];
  });
</script>
```
