# Banner

## Usage

In your `app.module.ts` :

```ts
import { Banner } from '@finastra/angular-components/banner';

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
        tooltip: 'How many apps'
      },
      {
        name: 'Income',
        value: 9435,
        prefix: '€',
        tooltip: 'Income with prefix currency'
      },
      {
        name: 'Income',
        value: 9435,
        suffix: '€',
        tooltip: 'incomes with suffix currency'
      },
      {
        name: 'Request Result',
        value: 'In progress',
        tooltip: 'Text banner example'
      }
    ];
  }
```
