![](../../.github/assets/banner_angular-components.png)

[![@finastra/angular-components](https://img.shields.io/npm/v/@finastra/angular-components?label=angular-components&style=flat-square)](https://www.npmjs.com/package/@finastra/angular-components)
[![stackblitz](https://img.shields.io/badge/stackblitz-ffdcbot-brightgreen?style=flat-square)](https://stackblitz.com/@ffdcbot)

The Finastra Angular components are the Angular implementation of the [Finastra Design System](https://design.fusionfabric.cloud). It features Finastra's branding of components (global search, data visualization, repeater, filters...).

## 🤔 How to use it?

You can get started in 3 simple steps:

Install the dependency (Note that the Angular components require our [Angular Material theme](https://www.npmjs.com/package/@finastra/angular-theme).

```Bash
npm install @finastra/angular-components
```

Import the required component in your project

```Javascript
import { ScrollToTopModule } from '@finastra/angular-components/scroll-to-top';
…
@NgModule ({…
    imports: […,
    ScrollToTopModule,
…]
})
```

Add the component in your HTML like so

```HTML
<uxg-scroll-to-top></uxg-scroll-to-top>
```

## 💡 Components' theme

For more "advanced" components, you may require to import their themes SASS mixins.
Find below a sample of what your main styles.scss would look :

```SCSS
@use '@finastra/angular-theme' as fds;
@use '@finastra/angular-theme/base';

@use '@finastra/angular-components/global-search/src/global-search.theme' as global-search;

@include fds.uxg-core();

// Add components typography mixins inside this mixin
@mixin app-typography($typography) {
  @include global-search.typography($typography);
}

// Add components theme mixins inside this mixin
@mixin app-theme($theme) {
    @include fds.uxg-material-theme($theme);
    @include global-search.theme($theme);
}

@include app-typography(fds.$typography);

@include app-theme(fds.$light-theme);

@media (prefers-color-scheme: dark) {
    @include app-theme(fds.$dark-theme);
}
```

## 💌 Want to help?

Want to file a bug, contribute some code, or improve documentation?
Excellent! Consider reading our [contribution guidelines](../../CONTRIBUTING.md)
