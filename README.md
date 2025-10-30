# eslint-plugin-pinia

Eslint plugin that enforces some best practices for writing pinia stores

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@blouflashdb/eslint-plugin-pinia`:

```sh
npm install @blouflashdb/eslint-plugin-pinia --save-dev
```

## Usage

### With @antfu/eslint-config

This plugin is designed to work seamlessly with [@antfu/eslint-config](https://github.com/antfu/eslint-config):

```js
// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import pinia from '@blouflashdb/eslint-plugin-pinia'

export default antfu(
  {
    vue: true,
  },
  {
    plugins: {
      pinia,
    },
    rules: {
      'pinia/never-export-initialized-store': 'error',
      'pinia/no-duplicate-store-ids': 'error',
      'pinia/no-return-global-properties': 'error',
      'pinia/no-store-to-refs-in-store': 'error',
      'pinia/prefer-use-store-naming-convention': 'warn',
      'pinia/require-setup-store-properties-export': 'error',
    },
  },
)
```

### Flat Config (eslint.config.js)

Add `pinia` to the plugins section and configure the rules you want to use:

```js
// eslint.config.mjs
import pinia from '@blouflashdb/eslint-plugin-pinia'

export default [
  {
    plugins: {
      pinia,
    },
    rules: {
      'pinia/never-export-initialized-store': 'error',
      'pinia/no-duplicate-store-ids': 'error',
      'pinia/no-return-global-properties': 'error',
      'pinia/no-store-to-refs-in-store': 'error',
      'pinia/prefer-use-store-naming-convention': 'warn',
      'pinia/require-setup-store-properties-export': 'error',
    },
  },
]
```

## Rules

| Name                                                                                         | Description                                                                                |
| :------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| [never-export-initialized-store](docs/rules/never-export-initialized-store.md)               | Never export an initialized named or default store.                                        |
| [no-duplicate-store-ids](docs/rules/no-duplicate-store-ids.md)                               | Disallow duplicate store ids.                                                              |
| [no-return-global-properties](docs/rules/no-return-global-properties.md)                     | Disallows returning globally provided properties from Pinia stores.                        |
| [no-store-to-refs-in-store](docs/rules/no-store-to-refs-in-store.md)                         | Disallow use of storeToRefs inside defineStore                                             |
| [prefer-single-store-per-file](docs/rules/prefer-single-store-per-file.md)                   | Encourages defining each store in a separate file.                                         |
| [prefer-use-store-naming-convention](docs/rules/prefer-use-store-naming-convention.md)       | Enforces the convention of naming stores with the prefix `use` followed by the store name. |
| [require-setup-store-properties-export](docs/rules/require-setup-store-properties-export.md) | In setup stores all state properties must be exported.                                     |

## Licence

[MIT](https://github.com/blouflashdb/eslint-plugin-pinia/blob/main/LICENSE)
