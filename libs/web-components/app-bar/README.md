# AppBar
[![See it on NPM!](https://img.shields.io/npm/v/@finastra/app-bar?style=for-the-badge)](https://www.npmjs.com/package/@finastra/app-bar)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/app-bar?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/app-bar)
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-app-bar--default)

The app bar contains essential items related to your application. It is used for branding with the logo, title with the app name, navigation and actions.

Menu, navigation, content and actions are slots where you can put customized content based on what your application requires.

We recommend to use global navigation [templates](https://finastra.github.io/finastra-design-system/?path=/story/patterns-global-nav--default) if you need examples.

## Usage

### Import

```
npm i @finastra/app-bar
```

```ts
import '@finastra/app-bar';
...
<fds-app-bar
    appName="Example" 
    logo="https://upload.wikimedia.org/wikipedia/fr/2/2f/Finastra.png">
</fds-app-bar>
```

### Pure HTML pages

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your awesome title</title>
  </head>
  <body>
    <fds-app-bar
        appName="Example" 
        logo="https://upload.wikimedia.org/wikipedia/fr/2/2f/Finastra.png">
    </fds-app-bar>
    <script type="module" src="https://unpkg.com/@finastra/app-bar@latest/dist/src/app-bar.js?module"></script>
  </body>
</html>
```