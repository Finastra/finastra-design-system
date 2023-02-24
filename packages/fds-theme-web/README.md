![](../../.github/assets/banner_web-theme.png)

The FINASTRA Theme is a SCSS implementation of the [FINASTRA Design System](https://design.fusionfabric.cloud). It features FINASTRA's branding of foundations (color, typography, spacing, elevation).

## Quick start 🤔

You can get started in 2 simple steps:

Install the dependency

```Bash
npm install @finastra/fds-theme
```

Use the theme in your app's main stylesheet to get the custom properties initialized, including Sass mixins for color, spacing, elevation and typography.

```SCSS
@use '@finastra/fds-theme/all-themes';
```

## Theming 🖌️

FDS theme supports both **light** and **dark** theme.

### SASS

If you are coding in **SASS** you have 3 different ways to load the theme of your preference

- By loading only **custom properties**

```SCSS
@use '@finastra/fds-theme/light';
//or
@use '@finastra/fds-theme/dark';
//or
@use '@finastra/fds-theme/all-themes';
```

- By using **mixins** directly inside your container

```SCSS
@use '@finastra/fds-theme' as fds;

  .my-container {
    @include fds.use-light-theme();
    //or
    @include fds.use-dark-theme();
    //or
    @include fds.use-all-themes();
  }
```

- Or by simply putting your **class name** in the **@use** rule

```SCSS
@use '@finastra/fds-theme/light' with ($class: 'light-theme');
//or
@use '@finastra/fds-theme/dark' with ($class: 'dark-theme');
//or
@use '@finastra/fds-theme/all-themes' with ($class: 'my-container');
```

> Note that you should use the same class name in your html

```HTML
<div class="light-theme"></div>
```

### Using a pre-built theme

You can use FDS theme without Sass by using a pre-built theme

```CSS
@import '@finastra/fds-theme/prebuilt/light';
/* or */
@import '@finastra/fds-theme/prebuilt/dark';
/* or */
@import '@finastra/fds-theme/prebuilt/all-themes';
```

## Usage

- [Color](https://finastra.github.io/finastra-design-system/?path=/docs/design-tokens-color--custom-properties)
- [Elevation](https://finastra.github.io/finastra-design-system/?path=/docs/design-tokens-elevation--helper-classes)
- [Spacing](https://finastra.github.io/finastra-design-system/?path=/docs/design-tokens-spacing--custom-properties)
- [Typography](https://finastra.github.io/finastra-design-system/?path=/docs/design-tokens-typography--custom-properties)

## Want to help? 🤗❤️

Want to file a bug, contribute some code, or improve documentation?
Excellent!

If it's your first time contributing, use the tag [![good first issue badge](https://img.shields.io/badge/-good%20first%20issue-blueviolet?style=flat-square)](https://github.com/finastra/finastra-design-system/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
