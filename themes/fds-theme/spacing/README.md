# FDS Theme Spacing

## Helper classes

Before being able to use spacing helper classes, you will have to include them in your Sass styles.

```SCSS
@use '@finastra/fds-theme/spacing/fds-spacing';
```

### Example

```HTML
<div class="m-4">
  <!-- margin: $spacing-4; -->
</div>
```

```HTML
<div class="p-2">
  <!-- padding: $spacing-2; -->
</div>
```

## SASS variables and custom properties

### Example

```SCSS
@use '@finastra/fds-theme' as fds;

.my-container {
  margin: fds.$spacing-4;
}
```

| variable     | Custom property   | default value |
| ------------ | ----------------- | ------------: |
| `$spacing-0` | `--mdc-spacing-0` |             0 |
| `$spacing-1` | `--mdc-spacing-1` |           4px |
| `$spacing-2` | `--mdc-spacing-2` |           8px |
| `$spacing-3` | `--mdc-spacing-3` |          16px |
| `$spacing-4` | `--mdc-spacing-4` |          24px |
| `$spacing-5` | `--mdc-spacing-5` |          48px |
| `$spacing-6` | `--mdc-spacing-6` |          96px |

## Mixins

### Example

```SCSS
@use '@finastra/fds-theme' as fds;

.my-component {
  @include fds.padding(1);
  @include fds.margin(2);
}
```
