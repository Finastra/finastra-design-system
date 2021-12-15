# FDS Theme

The FINASTRA Material Theme is a SCSS implementation of the [FINASTRA Design System](https://design.fusionfabric.cloud). It features FINASTRA's branding of foundations (color, typography, spacing, elevation).

## Quick start 🤔

You can get started in 2 simple steps:

Install the dependency

```Bash
npm install @finastra/fds-theme
```

Use the theme in your app's main stylesheet to get the custom properties initialized, including Sass mixins for color, spacing, elevation and typography.

```SCSS
@use '@finastra/fds-theme';
```

## Theming 🖌️
Fds theme supports both light and dark theme and you have 3 different ways to load the theme of your preference

- By loading only **custom properties**

```SCSS
@use '@finastra/fds-theme/light';
//or
@use '@finastra/fds-theme/dark';
```

- By using **mixins** directly inside your container

```SCSS
@use '@finastra/fds-theme' as fds;

  .my-container {
    @include fds.use-light-theme();
    //or
    @include fds.use-dark-theme();
  }
```

- Or by simply putting your **class name** in the **@use** rule

```SCSS
@use '@finastra/fds-theme/light' with ($class: 'light-theme');
//or
@use '@finastra/fds-theme/dark' with ($class: 'dark-theme');
```

And use the same class name in your html

```HTML
<my-container class="light-theme"></my-container>
```

## Usage

- [Color](./color/README.mdx)
- [Elevation](./elevation/README.mdx)
- [Spacing](./spacing/README.mdx)
- [Typography](./typography/README.mdx)

## Want to help? 🤗❤️

Want to file a bug, contribute some code, or improve documentation?
Excellent!

If it's your first time contributing, use the tag [![good first issue badge](https://img.shields.io/badge/-good%20first%20issue-blueviolet?style=flat-square)](https://github.com/finastra/finastra-design-system/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
