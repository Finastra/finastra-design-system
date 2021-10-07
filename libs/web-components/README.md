# Developer guide

## Getting your envionement set up

1. Make sure you have `node@15.x.x` and `npm@7.x.x` installed.
2. Fork `Finastra Design System` repo on Github.
3. Clone your fork to your machine with `git clone`
4. From the root of the project, run `npm install` to install the dependencies.
5. Run `npm run build:devkit` to build devkit library.

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

- Storybook (for the document and demo)

```
npm run wc:storybook
```

### Build

Run the following commands to build all components

```bash
# Build component style (scss -> ts)
npm run wc:build:style

# Build component typescript (ts -> js)
npm run wc:build:ts

# Shortcut running both above commands
npm run wc:build
```

### Running Tests (WIP ⚠️)

```
npm run wc:test:all

npm run wc:test COMPONENT_FOLDER_NAME
```

### Linting & Formating

```
npm run lint
npm run format
```

### Generating new web components

```
npm run wc:generate MY_COMPONENT_NAME
```
