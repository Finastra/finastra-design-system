# Expansion Panel
Expansion Panel provides an expandable details-summary view.
[![See it on NPM!](https://img.shields.io/npm/v/@finastra/expansion-panel?style=for-the-badge)](https://www.npmjs.com/package/@finastra/expansion-panel)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/expansion-panel?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/expansion-panel')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-expansion-panel--default)

## Usage

### Import

```
npm i @finastra/expansion-panel
```

```ts
import '@finastra/expansion-panel';
...
<fds-expansion-panel>
    <fds-expansion-panel-item expanded>
        <div slot="title">Setting</div>
        <div slot="description">Global setting</div>
        <div class="content">
            Nisi ullamco reprehenderit id ea fugiat Lorem cupidatat ea esse nostrud excepteur.
        </div>
    </fds-expansion-panel-item>
    <fds-expansion-panel-item>
        <div slot="title">Security</div>
        <div slot="description">Security parametre</div>
        <div class="content">
            Nisi ullamco reprehenderit id ea fugiat Lorem cupidatat ea esse nostrud excepteur.
        </div>
    </fds-expansion-panel-item>

    <fds-expansion-panel-item disabled>
        <div slot="title">Private</div>
        <div slot="description">Security parametre</div>
        <div class="content">
            Nisi ullamco reprehenderit id ea fugiat Lorem cupidatat ea esse nostrud excepteur.
        </div>
    </fds-expansion-panel-item>


    <fds-expansion-panel-item>
        <div slot="title">Hobbies</div>
        <div slot="description">Hobbies parametre</div>
        <div class="content">
            Nisi ullamco reprehenderit id ea fugiat Lorem cupidatat ea esse nostrud excepteur.
        </div>
    </fds-expansion-panel-item>

</fds-expansion-panel>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/expansion-panel@latest/dist/src/index.js?module"></script>

 <fds-expansion-panel>
    <fds-expansion-panel-item>
        <div slot="title">User profile</div>
        <div slot="description">User profile description</div>
        <div class="content">
            User profile content
        </div>
    </fds-expansion-panel-item>
</fds-expansion-panel>
```
