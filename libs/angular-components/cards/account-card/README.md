## Usage

### Typescript

```typescript
import { AccountCardModule } from '@finastra/angular-components/cards/account-card';

@NgModule({
  imports: [AccountCardModule]
})
export class AppModule {}
```

### Scss

```scss
@import '~@finastra/angular-components/cards/account-card/account-card.theme';

@mixin app-theme($theme) {
  @include uxg-account-card-theme($theme);
}

@include app-theme($uxg-light-theme);
```

### Html

```html
<ng-container *ngIf="accounts$ | async as accounts; else loading">
  <uxg-account-card
    *ngFor="let account of accounts"
    [name]="account.name"
    [balance]="account.balance"
    [currency]="account.currency"
    [number]="account.number"
  ></uxg-account-card>
</ng-container>

<ng-template #loading>
  <uxg-account-card-skeleton></uxg-account-card-skeleton>
  <uxg-account-card-skeleton></uxg-account-card-skeleton>
  <uxg-account-card-skeleton></uxg-account-card-skeleton>
  <uxg-account-card-skeleton></uxg-account-card-skeleton>
</ng-template>
```
