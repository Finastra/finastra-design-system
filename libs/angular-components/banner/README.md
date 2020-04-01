# Banner

## Usage

In your `app.module.ts` :

```ts
import { Banner } from '@ffdc/uxg-angular-components/banner';

@NgModule({
  imports: [
    ...
    BannerModule
  ],
})
```

In your `styles.scss` :

```scss
@include uxg-banner-theme($theme);
```

In your html

```html
<uxg-banner [bannerData]="exampleBannerData"></uxg-banner>
```

```ts
    this.exampleBannerData = [
      {
        name: 'App number',
        value: 9435,
        tooltip: 'Existing appss'
      },
      {
        name: 'Income',
        value: 9435,
        prefix: '€',
        tooltip: 'Existing appss'
      },
      {
        name: 'Income',
        value: 9435,
        suffix: '€',
        tooltip: 'incomes from the api '
      },
      {
        name: 'Income',
        value: 'non ',
        tooltip: 'Income currency $'
      }
    ];
```
