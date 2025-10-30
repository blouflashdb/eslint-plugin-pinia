import rules from './rules/index.ts'
import { RULE_NAME as neverExportInitializedStoreName } from './rules/never-export-initialized-store.ts'
import { RULE_NAME as noDuplicateStoreIdsName } from './rules/no-duplicate-store-ids.ts'
import { RULE_NAME as noReturnGlobalPropertiesName } from './rules/no-return-global-properties.ts'
import { RULE_NAME as noStoreToRefs } from './rules/no-store-to-refs-in-store.ts'
import { RULE_NAME as preferSingleStoreName } from './rules/prefer-single-store-per-file.ts'
import { RULE_NAME as preferNamingConventionName } from './rules/prefer-use-store-naming-convention.ts'
import { RULE_NAME as requireSetupStorePropsName } from './rules/require-setup-store-properties-export.ts'

const plugin = {
  rules,
}

const allRules = {
  [neverExportInitializedStoreName]: 'warn',
  [noDuplicateStoreIdsName]: 'warn',
  [noReturnGlobalPropertiesName]: 'warn',
  [noStoreToRefs]: 'warn',
  [preferNamingConventionName]: 'warn',
  [preferSingleStoreName]: 'off',
  [requireSetupStorePropsName]: 'warn',
}

const recommended = {
  [neverExportInitializedStoreName]: 'error',
  [noDuplicateStoreIdsName]: 'error',
  [noReturnGlobalPropertiesName]: 'error',
  [noStoreToRefs]: 'error',
  [preferNamingConventionName]: 'warn',
  [requireSetupStorePropsName]: 'error',
}

function createConfig<T extends Record<string, unknown>>(
  _rules: T,
): {
  plugins: Record<string, typeof plugin>
  rules: Record<`pinia/${string}`, string>
} {
  const name = 'pinia'
  const constructedRules: Record<`pinia/${string}`, string> = Object.keys(
    _rules,
  ).reduce((acc, ruleName) => {
    return {
      ...acc,
      [`${name}/${ruleName}`]: _rules[ruleName],
    }
  }, {})

  return {
    plugins: {
      [name]: plugin,
    },
    rules: constructedRules,
  }
}

const configs = {
  all: createConfig(allRules),
  recommended: createConfig(recommended),
}

export default {
  ...plugin,
  configs,
}
