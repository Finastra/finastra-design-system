# Search Input

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/search-input?style=for-the-badge)](https://www.npmjs.com/package/@finastra/search-input)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/search-input?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/search-input)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-search-input--default-story)

`<fds-search-input>` delivers a single input field with a "reset" button as well as a loader and a mangifying glass icon with which to power search interactions.

Search Input Component extends `fds-base-textfield` component, so it inherits all capacity of [fds-textfield](https://github.com/Finastra/finastra-design-system/blob/master/libs/web-components/textfield/README.md)

## Usage

### Import

```
npm i @finastra/search-input
```

```ts
import '@finastra/search-input';
...
<fds-search-input showClearButton label="Search"></fds-search-input>
```


### Documentation
<!-- DOC -->
#### Attributes

| Attribute           | Default      | Description                                      |
|---------------------|--------------|--------------------------------------------------|
| `dense`             | false        | Smaller text field size.                         |
| `disabled`          | false        | Whether or not the input should be disabled.     |
| `helper`            | ""           | Helper text to display below the input.          |
| `label`             | ""           | Sets floating label value.                       |
| `labelInside`       | false        | Is the label included in the text field.         |
| `placeholder`       | "Search ..." | Sets placeholder value displayed when input is empty. |
| `required`          | false        | Displays error state if value is empty and input is blurred. |
| `type`              | ""           | A string specifying the type of control to render. |
| `validationMessage` | ""           | Message to show in the error color when the textfield is invalid. (Helper text will not be visible) |

#### Properties

| Property           | Attribute         | Type      | Default  | Description                                      |
|--------------------|-------------------|-----------|----------|--------------------------------------------------|
| `icon`             | `icon`            | `string`  | "search" | Leading icon to display in input. See `fds-icon`. |
| `loading`          | `loading`         | `boolean` | false    | Display searchInput loader.                      |
| `showActionButton` |                   | `boolean` | false    |                                                  |
| `showClearButton`  | `showClearButton` | `boolean` | false    | Show clear button.                               |

#### Methods

| Method               | Type                                       |
|----------------------|--------------------------------------------|
| `renderTrailingIcon` | `(): string \| TemplateResult<ResultType>` |

#### Events

| Event   |
|---------|
| `input` |

#### CSS Custom Properties

| Property                    | Type  | Default   | Description                   |
|-----------------------------|-------|-----------|-------------------------------|
| `--fds-icon-color`          | color | "#694ED6" | Icon color.                   |
| `--fds-icon-trailing-color` | color | "#694ED6" | Icon trailing color.          |
| `--fds-primary`             | color | "#694ED6" | TextField color               |
| `--fds-text-field-radius`   | text  | "4px"     | Border radius of the outline. |
<!-- /DOC -->