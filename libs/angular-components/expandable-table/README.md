# expandable-table

## Usage

In your `app.module.ts` :

```ts
import { ExpandableTableModule } from '@ffdc/uxg-angular-components/expandable-table';

@NgModule({
  imports: [
    ...
    ExpandableTableModule
  ],
})
```

In your `styles.scss` :

```scss
@include uxg-expandable-table-theme($theme);

```

In your html

```html
<uxg-expandable-table
  [dataSource]="dataSource"
  [columns]="columns"
  [groupByKey]="groupByKey"
  [selectable]="selectable"
  (selectionChange)="onSelectionChange($event)"
>
  </uxg-expandable-table>
```
