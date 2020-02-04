module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'standard/no-callback-literal' : 'off',
    'no-console' : 'off',
    'import/order' : 'off',
  }
}
