# Entity Menu

## Usage

In your `app.module.ts` :

```ts
import { EntityMenuModule } from '@ffdc/uxg-angular-components/entity-menu';

@NgModule({
  imports: [
    ...
    EntityMenuModule
  ],
})
```

In your `styles.scss` :

```scss
@include uxg-entity-menu-theme($theme);
```

In your html

```html
<uxg-entity-menu
    [title]="title"
    [data]="dataSourceExample"
    [columnsMatcher]="columnsMatcherExample"
    [abbreviationLength]="length"
    [bottomLabel]="bottomLabel"
    (bottomClick)="redirect()"
    (itemClick)="displayItem($event)"
  >
</uxg-entity-menu>
```
