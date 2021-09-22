# FDS Theme Typography

## Helper classes

```HTML
<h1 class="mdc-typography--headline1">This is headline 1</h1>
```

## Custom properties

## Mixins

```SCSS
@mixin style($typo-style) {}
```

Where `$typo-style` is any of the [available text styles](#available-text-styles).

### Example

```SCSS
@use '@finastra/fds-theme/typography';

.my-component-subtitle {
  @include typography.style(subtitle2);
}
```

### Available text styles

| Text style  | font-family | font-size |
| ----------- | ----------- | --------: |
| `headline1` | Spartan     |      51px |
| `headline2` | Spartan     |      41px |
| `headline3` | Spartan     |      28px |
| `headline4` | Spartan     |      21px |
| `headline5` | Spartan     |      16px |
| `headline6` | Spartan     |      13px |
| `subtitle1` | Roboto      |      16px |
| `subtitle2` | Roboto      |      14px |
| `subtitle3` | Roboto      |      12px |
| `body1`     | Roboto      |      16px |
| `body2`     | Roboto      |      14px |
| `body3`     | Roboto      |      12px |
| `button`    | Roboto      |      14px |
| `caption`   | Roboto      |      12px |
| `overline`  | Roboto      |      10px |
