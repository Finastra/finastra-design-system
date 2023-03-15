# Tooltip <img src="https://atomiks.github.io/tippyjs/static/logo-ebc385458e03fdb24af078536af88065.svg" alt="Tippy.js" height="25" />

Because of the nature of Web Components, we will not provide any tooltip web-component.

However, we're using [Tippy.js](https://atomiks.github.io/tippyjs/), and recommend using the same.

## Usage

```bash
npm i tippy.js
```

Have a look at the [official docs](https://atomiks.github.io/tippyjs/v6/getting-started/) for more advanced getting started instructions.

### Finastra's theme

We've created a theme branded for Finastra.

```bash
npm i @finastra/tippy.js-theme
...
import @finastra/tippy.js-theme/dist/theme.css
```

Once loaded, declare it like any other theme:

```js
tippy('button', {
  theme: 'finastra'
});
```

> In the background, it will use CSS variables and a fallback: `background: var(--fds-primary, #694ED6);`, so it will work in light or dark mode, and will also work if you don't have @finastra/fds-theme loaded.
