import vueParser from 'vue-eslint-parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import vuePlugin from 'eslint-plugin-vue';
import globals from "globals";

export default [
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs['vue3-recommended'].rules,
      ...typescriptPlugin.configs.recommended.rules,
      'vue/html-closing-bracket-newline': 'off',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'quote-props': ['error', 'as-needed'],
      'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^ignore',
          ignoreRestSiblings: false,
        },
      ],
      'no-undef': 'error',
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'object-curly-spacing': ['error', 'always'],
      'object-curly-newline': ['warn', { consistent: true }],
      'array-bracket-spacing': ['error', 'always'],
      'array-bracket-newline': ['error', 'consistent'],
      'space-unary-ops': 'error',
      'space-before-blocks': 'error',
      'comma-dangle': ['error', 'never'],
      'keyword-spacing': ['error', { after: true }],
    },
  }
];
