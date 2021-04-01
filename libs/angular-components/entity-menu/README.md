# Entity Menu

## Usage

In your `app.module.ts` :

```ts
import { EntityMenuModule } from '@finastra/angular-components/entity-menu';

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
  [title]="string"
  [data]="any[]"
  [property]="string"
  [abbreviationLength]="number"
  [bottomLabel]="string"
  (bottomClick)="() => {}"
  (itemClick)="($event) => {}"
>
</uxg-entity-menu>
```
