import type { ESLint, Linter } from 'eslint'
import pkg from '../package.json' with { type: 'json' }
import neverExportInitializedStore from './rules/never-export-initialized-store.ts'
import noDuplicateStoreIds from './rules/no-duplicate-store-ids.ts'
import noReturnGlobalProperties from './rules/no-return-global-properties.ts'
import noStoreToRefsInStore from './rules/no-store-to-refs-in-store.ts'
import preferSingleStorePerFile from './rules/prefer-single-store-per-file.ts'
import preferUseStoreNamingConvention from './rules/prefer-use-store-naming-convention.ts'
import requireSetupStorePropertiesExport from './rules/require-setup-store-properties-export.ts'

const plugin = {
  meta: {
    name: 'pinia',
    version: pkg.version,
  },
  rules: {
    'never-export-initialized-store': neverExportInitializedStore,
    'no-duplicate-store-ids': noDuplicateStoreIds,
    'no-return-global-properties': noReturnGlobalProperties,
    'no-store-to-refs-in-store': noStoreToRefsInStore,
    'prefer-single-store-per-file': preferSingleStorePerFile,
    'prefer-use-store-naming-convention': preferUseStoreNamingConvention,
    'require-setup-store-properties-export': requireSetupStorePropertiesExport,
  },
} satisfies ESLint.Plugin

export default plugin

type RuleDefinitions = typeof plugin['rules']

export type RuleOptions = {
  [K in keyof RuleDefinitions]: RuleDefinitions[K]['defaultOptions']
}

export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}
