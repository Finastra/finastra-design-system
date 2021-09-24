# FDS Theme Elevation

## Helper classes

Before being able to use the helper classes, you need to include them in your Sass styles.

```SCSS
@use '@finastra/fds-theme/elevation/fds-elevation';
```

```HTML
<div class="mdc-elevation--z2">

</div>
```

## Mixins

```SCSS
@use '@finastra/fds-theme' as fds;

.my-elevated-component {
  @use fds.elevation(4);
}
```
