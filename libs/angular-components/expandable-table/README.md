# expandable-table

## Usage

In your `app.module.ts` :

```ts
import { ExpandableTableModule } from '@finastra/angular-components/expandable-table';

@NgModule({
  imports: [
    ...
    ExpandableTableModule
  ],
})
```

````

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
````
