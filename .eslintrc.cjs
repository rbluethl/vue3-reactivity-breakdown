require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-useless-escape': 'off'
  },
  globals: {
    NodeJS: true
  }
}
