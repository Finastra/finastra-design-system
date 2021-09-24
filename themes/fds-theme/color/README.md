# FDS Theme Color

There's 3 ways to use colors in the Finastra design system theme depending on your needs:

- [Helper classes](#helper-classes)
- [Custom properties](#custom-properties)
- [Mixins](#mixins)

## Helper classes

The helper classes are the fastest way to use colors directly in the HTML.

```SCSS
@use '@finastra/fds-theme/color/fds-color';
```

Be aware that some classes are meant to be used on containers as their background color (such as `.mdc-theme--primary-bg`, `.mdc-theme--background`, `.mdc-theme--surface`...) some are meant to be used on texts (such as `.mdc-theme--primary`, `.mdc-theme--error`, `.mdc-theme--on-surface`...).

### Examples

```HTML
<div class="mdc-theme--surface">
  <p class="mdc-theme--on-surface">Hello!</p>
</div>
```

```HTML
<div class="mdc-theme--primary-bg">
  <p class="mdc-theme--on-primary">Accessible text</p>
</div>
```

```HTML
<div class="mdc-theme--background">
  <p class="mdc-theme--primary">Text using primary color</p>
</div>
```

### Available classes

| class name                 | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `.mdc-theme--primary`      | Used for text written in primary color                |
| `.mdc-theme--primary-bg`   | Used for container's background in primary color      |
| `.mdc-theme--secondary`    | Used for text written in secondary color              |
| `.mdc-theme--secondary-bg` | Used for container's background in secondary color    |
| `.mdc-theme--background`   | Used for application background color                 |
| `.mdc-theme--surface`      | Used for content surface color (i.e. card background) |
| `.mdc-theme--success`      | Used for text success feedback                        |
| `.mdc-theme--success-bg`   | Used for container's background success feedback      |
| `.mdc-theme--error`        | Used for text error feedback                          |
| `.mdc-theme--error-bg`     | Used for container's background error feedback        |
| `.mdc-theme--gradient`     | Used for text written in gradient                     |
| `.mdc-theme--gradient-bg`  | Used for container's background in gradient           |
| `.mdc-theme--on-primary`   | Used for text written on primary background           |
| `.mdc-theme--on-secondary` | Used for text written on secondary background         |
| `.mdc-theme--on-surface`   | Used for text written on surface                      |
| `.mdc-theme--on-success`   | Used for text written on success background           |
| `.mdc-theme--on-error`     | Used for text written on error background             |

## Custom properties

This theme is built around custom properties. You can use them directly in your CSS files, however we recommend the use of [Sass mixins](#mixins).

### Examples

```CSS
.my-container {
  background-color: var(--mdc-theme-primary);
  color: var(--mdc-theme-on-primary);
}
```

### Available custom properties

| Custom property            | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| `--mdc-theme-primary`      | Primary color (default [#694ED6])                      |
| `--mdc-theme-secondary`    | Secondary color (default [#C137A2])                    |
| `--mdc-theme-background`   | Background color (default [#FAFAFA])                   |
| `--mdc-theme-surface`      | Surface color (default [#FFFFFF])                      |
| `--mdc-theme-success`      | Success color (default [#008744])                      |
| `--mdc-theme-error`        | Error color (default [#E40046])                        |
| `--mdc-theme-gradient`     | Linear gradient of primary and secondary               |
| `--mdc-theme-on-primary`   | Text color on primary background (default [#FFFFFF])   |
| `--mdc-theme-on-secondary` | Text color on secondary background (default [#FFFFFF]) |
| `--mdc-theme-on-surface`   | Text color on surface background (default [#000000])   |
| `--mdc-theme-on-success`   | Text color on success background (default [#FFFFFF])   |
| `--mdc-theme-on-error`     | Text color on error background (default [#FFFFFF])     |

## Mixins

That is the recommended way of using colors because it will take profit of custom properties while keeping fallback when custom properties are not available.

It's the ideal way to use theme's colors when writing components for example.

Here is the mixin signature:

```SCSS
@mixin property($prop, $style) {}
```

Where `$prop` is the CSS property you want to affect (i.e. `background`, `border-color`, `color`...)
and `$style` is any [color style available](#available-styles).

### Examples

```SCSS
@use '@finastra/fds-theme' as fds;

.my-container {
  @include fds.property(background, background);

  &.title {
    @include fds.property(color, primary);
  }
}
```

will generate:

```SCSS
.my-container {
  background: #FAFAFA;
  background: var(--mdc-theme-background, #FAFAFA);
}

.my-container.title {
  color: #694ED6;
  color: var(--mdc-theme-primary, #694ED6);
}
```

### Available styles

| Color style    | Description                                            |
| -------------- | ------------------------------------------------------ |
| `primary`      | Primary color (default [#694ED6])                      |
| `secondary`    | Secondary color (default [#C137A2])                    |
| `background`   | Background color (default [#FAFAFA])                   |
| `surface`      | Surface color (default [#FFFFFF])                      |
| `success`      | Success color (default [#008744])                      |
| `error`        | Error color (default [#E40046])                        |
| `gradient`     | Gradient color                                         |
| `on-primary`   | Text color on primary background (default [#FFFFFF])   |
| `on-secondary` | Text color on secondary background (default [#FFFFFF]) |
| `on-surface`   | Text color on surface background (default [#000000])   |
| `on-success`   | Text color on success background (default [#FFFFFF])   |
| `on-error`     | Text color on error background (default [#FFFFFF])     |
