[![@finastra/angular-components](https://img.shields.io/npm/v/@finastra/angular-components?label=angular-components&style=flat-square)](https://www.npmjs.com/package/@finastra/angular-components)
[![stackblitz](https://img.shields.io/badge/stackblitz-ffdcbot-brightgreen?style=flat-square)](https://stackblitz.com/@ffdcbot)

# FINASTRA Angular Components

The FINASTRA Angular components are the Angular implementation of the [FINASTRA Design System](https://design.fusionfabric.cloud). It features FINASTRA's branding of components (global search, data visualization, repeater, filters...).

## How to use it? 🤔

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

You'll find a more exhaustive documentation on our developer [getting started](https://design.fusionfabric.cloud/get-started/developers) page.

## Want to help? 🤗❤️

Want to file a bug, contribute some code, or improve documentation?
Excellent!

If it's your first time contributing, use the tag [![good first issue badge](https://img.shields.io/badge/-good%20first%20issue-blueviolet?style=flat-square)](https://github.com/finastra/finastra-design-system/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
