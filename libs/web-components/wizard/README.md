# Wizard

A wizard is a setup process where the user is guided through a series of steps to achieve a goal. The purpose of the pattern is to simplify tasks by cutting them into smaller ones.It is easy to navigate between the steps which helps the user to complete lengthy forms in less time. Also the user can save it and revisit the wizard when he/she has the relevant required information available.

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/wizard?style=for-the-badge)](https://www.npmjs.com/package/@finastra/wizard)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/wizard?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/wizard')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-wizard--default)

## Usage

### Import

```
npm i @finastra/wizard @finastra/button @finastra/textfield
```

```ts
import '@finastra/wizard';
import '@finastra/textfield';
import '@finastra/button';
...
<fds-wizard id="wizard">
  <fds-text-button slot='left-action' label="Cancel" secondary>
  </fds-text-button>
  <fds-outlined-button slot='next' label="Next" secondary>
  </fds-outlined-button>
  <fds-text-button slot='previous' label="Back" secondary icon="chevron_left">
  </fds-text-button>
  <fds-button slot='done' label="Save" secondary>
  </fds-button>
  <fds-wizard-page slot="page" title="Welcome" description="Welcome page" header>
    <div class="page-content">
      <div class="textfields">
        <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
        <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
        <fds-textfield label="Last name" icontrailing="" helper="helper text"></fds-textfield>
      </div>
      <div class="image">
        <img src="https://i.imgur.com/otY5WR9.png" />
      </div>
    </div>
  </fds-wizard-page>

  <fds-wizard-page slot="page" title="Preferences" description="Preferences page" disabled header>
    <p>put your content here</p>
  </fds-wizard-page>

  <fds-wizard-page slot="page" title="Confirmation" description="Confirmation page" header>
    <p>put your content here</p>
  </fds-wizard-page>
</fds-wizard>
```

### API

<!-- DOC -->

#### Properties

| Property       | Attribute      | Type      | Default |
| -------------- | -------------- | --------- | ------- |
| `completed`    | `completed`    | `boolean` | false   |
| `current`      | `current`      | `boolean` | false   |
| `description`  | `description`  | `string`  | ""      |
| `disabled`     | `disabled`     | `boolean` | false   |
| `header`       | `header`       | `boolean` | false   |
| `icon`         | `icon`         | `string`  | ""      |
| `stepsCounter` | `stepsCounter` | `string`  | ""      |
| `title`        | `title`        | `string`  | ""      |

#### Methods

| Method               | Type                    |
| -------------------- | ----------------------- |
| `renderIcon`         | `(): TemplateResult<1>` |
| `renderStepsCounter` | `(): TemplateResult<1>` |

# fds-wizard

#### Properties

| Property           | Attribute          | Type              | Default | Description                                                                                                                                                                                                     |
| ------------------ | ------------------ | ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currentStepIndex` | `currentStepIndex` | `number`          | 0       | Index of current active step.                                                                                                                                                                                   |
| `linear`           | `linear`           | `boolean`         | false   | Used to create a linear stepper that requires the user to complete previous steps before proceeding to following steps. Note that a wizard page is considered as completed when its property completed is true. |
| `stepperOnDark`    | `stepperOnDark`    | `boolean`         | false   | Stepper on dark                                                                                                                                                                                                 |
| `stepperPosition`  | `stepperPosition`  | `"left"\|"right"` | "left"  | Stepper position                                                                                                                                                                                                |
| `stepsCounter`     | `stepsCounter`     | `boolean`         | false   | make the step counter visible in the stepper.                                                                                                                                                                   |

#### Methods

| Method                        | Type                                            |
| ----------------------------- | ----------------------------------------------- |
| `CheckIfAllBackStepsDisabled` | `(current: number): boolean`                    |
| `CheckIfAllNextStepsDisabled` | `(current: number): boolean`                    |
| `UpdatePage`                  | `(): void`                                      |
| `checkAttributes`             | `(page: HTMLElement, index: number): void`      |
| `checkNextStep`               | `(): void`                                      |
| `checkNextStepDisabled`       | `(pages: HTMLElement[], current: number): void` |
| `checkPreviousStepDisabled`   | `(pages: HTMLElement[], current: number): void` |
| `currentPageIsDisabled`       | `(current: number): boolean`                    |
| `currentPageIsFirst`          | `(current: number): boolean`                    |
| `currentPageIsLast`           | `(current: number): boolean`                    |
| `goToNextStep`                | `(pages: HTMLElement[]): void`                  |
| `goToPreviousStep`            | `(pages: HTMLElement[]): void`                  |
| `goToStepIndex`               | `(index: number): void`                         |
| `onPagesSlotChanged`          | `(): void`                                      |
| `onStepClickEvent`            | `(event: any): void`                            |
| `renderActions`               | `(): TemplateResult<ResultType>`                |
| `renderBackSlot`              | `(): TemplateResult<ResultType>`                |
| `renderCounterInStepper`      | `(): TemplateResult<ResultType>`                |
| `renderNextSlot`              | `(): TemplateResult<ResultType>`                |
| `renderSaveSlot`              | `(): TemplateResult<ResultType>`                |
| `renderStepper`               | `(): TemplateResult<ResultType>`                |
| `updateActionsState`          | `(current: number): void`                       |
| `updateCurrentPage`           | `(index: number): void`                         |
| `updateStepsCounter`          | `(current: number): string`                     |

#### Slots

| Name          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `left-action` | Slot to place an element in the left side of the wizard actions bar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `next`        | Slot to place an element that manages the transition to the next step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `page`        | Defines a new page inside the wizard that generates a new step automatically.<br />It is Used with the fds-wizard-page web component that could contain: <br />- title: to define a title to the step<br />- icon: to define a link to your hosted icon to be displayed next to the title<br />- description: to define a description to your step<br />- disabled : to disable the step<br />- header: to enable the header display (default is false)<br />- current: to set the step to current<br />- completed: used when linear mode is on to indicate that the step is valid and the next one is unlocked. |
| `previous`    | Slot to place an element that manages the transition to the previous step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `save`        | Slot to place an element that appears in the last step. The developer could add his own logic in the onClick Event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### CSS Custom Properties

| Property                  | Type  | Default   | Description                  |
| ------------------------- | ----- | --------- | ---------------------------- |
| `--fds-header-bg`         | color | "#f3f1fc" | Header background color      |
| `--fds-icon-bg`           | color | "#fafafa" | Header icon background color |
| `--fds-icon-border-color` | color | "#f3f1fc" | Header icon border color     |
| `--fds-stepper-bg`        | color | "#fafafa" | Stepper background color     |
| `--fds-title-color`       | color | "#694ed5" | Header title color           |

<!-- /DOC -->
