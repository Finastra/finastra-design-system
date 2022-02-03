<p align="center">
  <a href="https://www.fusionfabric.cloud/" target="blank"><img src="https://dev-to-uploads.s3.amazonaws.com/i/t2fcfqa7fxh6z927fmb1.png"  alt="FusionFabric.cloud" /></a>
</p>
  
  <p align="center">A set of opinionated web-components for building efficient and scalable financial applications</p>
<p align="center">
    <a href="https://github.com/Finastra/finastra-design-system/actions/workflows/wc-pr-build.yml">
        <img src="https://github.com/Finastra/finastra-design-system/actions/workflows/wc-pr-build.yml/badge.svg" alt="Build status" />
    </a>
    <a href="https://codecov.io/gh/Finastra/finastra-design-system">
        <img src="https://codecov.io/gh/Finastra/finastra-design-system/branch/master/graph/badge.svg?token=7jzYffsaRg"/>
    </a>
    <a href="https://www.npmjs.com/~nestjscore">
        <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
    </a>
    <img src="https://img.shields.io/badge/PRs-welcome-green" alt="PRs welcome"/>
    <a href="https://gitpod.io/#https://github.com/Finastra/finastra-design-system">
        <img src="https://img.shields.io/badge/Gitpod-✨-blue?logo=gitpod">
    </a>
    <a href="https://finastra.github.io/finastra-design-system/" alt="FOSSA Status">
        <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg"/>
    </a>
    <a href="https://twitter.com/FinastraFS">
        <img src="https://img.shields.io/twitter/follow/FinastraFS.svg?style=social&label=Follow">
    </a>
</p>

<br/>

# Packages

| Name             | Package                                                                      | Version                                                                                                                | Links                                                                                  |
| ---------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **App Bar**     | [`@finastra/app-bar`](https://npmjs.com/package/@finastra/app-bar)         | [![latest](https://img.shields.io/npm/v/@finastra/app-bar.svg)](https://npmjs.com/package/@finastra/app-bar)         | [![README](https://img.shields.io/badge/README--56C271.svg)](./app-bar/README.md)     |
| **App Card**     | [`@finastra/app-card`](https://npmjs.com/package/@finastra/app-card)         | [![latest](https://img.shields.io/npm/v/@finastra/app-card.svg)](https://npmjs.com/package/@finastra/app-card)         | [![README](https://img.shields.io/badge/README--56C271.svg)](./app-card/README.md)     |
| **Avatar**       | [`@finastra/avatar`](https://npmjs.com/package/@finastra/avatar)             | [![latest](https://img.shields.io/npm/v/@finastra/avatar.svg)](https://npmjs.com/package/@finastra/avatar)             | [![README](https://img.shields.io/badge/README--56C271.svg)](./avatar/README.md)       |
| **Base Card**    | [`@finastra/base-card`](https://npmjs.com/package/@finastra/base-card)       | [![latest](https://img.shields.io/npm/v/@finastra/base-card.svg)](https://npmjs.com/package/@finastra/base-card)       | [![README](https://img.shields.io/badge/README--56C271.svg)](./base-card/README.md)    |
| **Button**       | [`@finastra/button`](https://npmjs.com/package/@finastra/button)             | [![latest](https://img.shields.io/npm/v/@finastra/button.svg)](https://npmjs.com/package/@finastra/button)             | [![README](https://img.shields.io/badge/README--56C271.svg)](./button/README.md)       |
| **Card**         | [`@finastra/card`](https://npmjs.com/package/@finastra/card)                 | [![latest](https://img.shields.io/npm/v/@finastra/card.svg)](https://npmjs.com/package/@finastra/card)                 | [![README](https://img.shields.io/badge/README--56C271.svg)](./card/README.md)         |
| **Divider**      | [`@finastra/divider`](https://npmjs.com/package/@finastra/divider)           | [![latest](https://img.shields.io/npm/v/@finastra/divider.svg)](https://npmjs.com/package/@finastra/divider)           | [![README](https://img.shields.io/badge/README--56C271.svg)](./divider/README.md)      |
| **Logo**         | [`@finastra/logo`](https://npmjs.com/package/@finastra/logo)                 | [![latest](https://img.shields.io/npm/v/@finastra/logo.svg)](https://npmjs.com/package/@finastra/logo)                 | [![README](https://img.shields.io/badge/README--56C271.svg)](./logo/README.md)         |
| **Search Input** | [`@finastra/search-input`](https://npmjs.com/package/@finastra/search-input) | [![latest](https://img.shields.io/npm/v/@finastra/search-input.svg)](https://npmjs.com/package/@finastra/search-input) | [![README](https://img.shields.io/badge/README--56C271.svg)](./search-input/README.md) |

<br/>
<br/>

# Developer guide

## Getting your envionement set up

1. Make sure you have `node@16.x.x` and `npm@8.x.x` installed.
2. Fork [Finastra Design System](https://github.com/Finastra/finastra-design-system) repo on Github.
3. Clone your fork to your machine with `git clone`
4. From the root of the project, run `npm install` to install the dependencies.
5. Run `npm run build:devkit` to build devkit library.

> Alternatively, you can use [Gitpod](https://gitpod.io/#https://github.com/Finastra/finastra-design-system) to code in your browser !

## Web Component Development

### Local developement

In `local developement`, recommends active watch mode and dev-server by running each commands below in a separate terminal/shell.

- Watch mode

```
npm run wc:watch
```

- Local Dev Server

```
npm run wc:serve
```

- Storybook (for the documentation and demo)

```
npm run wc:storybook
```

> You can also see the storybook in the browser: https://finastra.github.io/finastra-design-system/

### Build

Run the following commands to build all components

```bash
# Build component style (scss -> ts)
npm run wc:build:style

# Build component typescript (ts -> js)
npm run wc:build:ts

# Shortcut running both above commands
npm run wc:build

# Storybook
npm run wc:build:storybook
```

> Note that you need to build the storybook only the first time you clone the repository or if you have modified any file inside the .storybook folder.

### Running Tests

```
npm run wc:test
```

Or in watch mode

```
npm run wc:test:watch
```

### Generating new web components

```
npm run wc:generate MY_COMPONENT_NAME
```

> To see a demo of the generated web component, run the commands mentioned in the
> [#Web Component Development](#web-component-development) section.
