import astro from 'eslint-plugin-astro'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier/flat'
import ts from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'

export default defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs['flat/recommended'],
  ...vue.configs['flat/recommended'],
  prettier,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
    },
  },
  {
    rules: {
      'prefer-const': 'error',
      'sort-imports': ['error', { allowSeparatedGroups: true }],
      'vue/multi-word-component-names': 'off',
    },
  },
])
