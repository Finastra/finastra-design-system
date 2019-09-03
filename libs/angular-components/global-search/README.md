# Global Search

## Usage

In your `app.module.ts` :

```ts
import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';

@NgModule({
  imports: [
    ...
    GlobalSearchModule
  ],
})
```

In your `styles.scss` :

```scss
@include uxg-global-search-theme($theme);

// OR

@include uxg-global-search-colors($theme);
@include uxg-global-search-typography($typography-config);
```

In your html

```html
<uxg-global-search
  #uxgGlobalSearch
  [groupBy]="'accountType'"
  [showFilter]="true"
  [itemDivider]="false"
  [groupDivider]="true"
  [maxItems]="5"
  itemsLayout="row"
>
</uxg-global-search>
```
