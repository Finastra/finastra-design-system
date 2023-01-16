# Global Search

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/global-search?style=for-the-badge)](https://www.npmjs.com/package/@finastra/global-search)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/global-search?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/global-search')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/forms-globalsearch--default)

## Usage

Global Search component contains two types of slots: searches and pages.
Developer can use `fds-global-search-group` for searches slot, `fds-global-search-page` for pages slot and `fds-global-search-summary` for summary slot.

`fds-global-search-group` contains two inputs:

<ul>
    <li>title: string, display as the search group title. </li>
    <li>items: FdsSearchItem[], a list of search item to display in the search group </li>
</ul>

`fds-global-search-page` contains two inputs:

<ul>
    <li>title: string, display as the search page title.</li>
    <li>items: FdsSearchPageItem[], a list of search page item to display in the search page. </li>
</ul>

`fds-global-search-summary` contains two inputs:

<ul>
    <li>searchText: string, the search text to summary. </li>
    <li>resultCount: number, how many results exist for current search text. </li>
</ul>

Install package:

```
npm i @finastra/global-search
```

Import component to your project:

```
import '@finastra/global-search';
```

```
<fds-global-search
    placeholder="search marketplace">
    <fds-global-search-group
        slot="searches"
        title="Trending Searches"
        icon="trending_up"
        items=${ [{
                    text: 'enterprise risk',
                },{
                    text: 'customer service',
                }]
                }
        >  </fds-global-search-group>
    <fds-global-search-page
        slot="pages"
        title=${"Popular applications"}
        .items=${
            [
            {
                logo: '//us1-cdn.openchannel.io/59bfc432ca753d60bf995c46/public/603e561d130c5a04da2d3d7c.jpg',
                text: "CloudMargin"
            }
            ]
        }
    > </fds-global-search-page>
</fds-global-search>
```

### API

<!-- DOC -->

#### Properties

| Property             | Attribute            | Type      | Default | Description                                           |
| -------------------- | -------------------- | --------- | ------- | ----------------------------------------------------- |
| `enableRecentSearch` | `enableRecentSearch` | `boolean` | true    | Whether display recent search section.                |
| `placeholder`        | `placeholder`        | `string`  | ""      | Sets placeholder value displayed when input is empty. |
| `value`              | `value`              | `string`  | ""      | Sets value displayed in input.                        |

#### Methods

| Method                       | Type                                       |
| ---------------------------- | ------------------------------------------ |
| `addNewRecentSearch`         | `(searchText?: string \| undefined): void` |
| `clearInput`                 | `(e: any): void`                           |
| `closeGlobalSearch`          | `(): void`                                 |
| `getRecentList`              | `(): FdsSearchItem[]`                      |
| `getSearchInputElement`      | `(): any`                                  |
| `getSearchInputValue`        | `(): any`                                  |
| `onGlobalSearchInputChanged` | `(): void`                                 |
| `onGlobalSearchInputFocus`   | `(): void`                                 |
| `renderRecentSearch`         | `(): TemplateResult<1> \| ""`              |
| `setInput`                   | `(text: string): void`                     |
| `toggleGlobalSearch`         | `(): void`                                 |
| `toggleSearchClearButton`    | `(display: boolean): void`                 |
| `triggerSearchWithText`      | `(e: any): void`                           |
| `updateRecentSearch`         | `(): void`                                 |

#### Events

| Event                           | Type                                 |
| ------------------------------- | ------------------------------------ |
| `onFdsGlobalSearchItemSelected` | `CustomEvent<FdsSearchSelectedItem>` |
| `onSearchInputChanged`          | `CustomEvent<string>`                |

#### Slots

| Name       | Description                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| `pages`    | Slot to place a set of search pages with icon.We provide another web component: fds-global-search-page. |
| `searches` | Slot to place a set of search items. We provide another web component:fds-global-search-group.          |
| `summary`  | Slot to place a summary of search result.                                                               |

#### CSS Custom Properties

| Property                    | Type | Default | Description                        |
| --------------------------- | ---- | ------- | ---------------------------------- |
| `--fds-global-search-width` | text | "400px" | length of global search component. |

<!-- /DOC -->
