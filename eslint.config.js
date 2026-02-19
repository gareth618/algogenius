import { defineConfig } from 'eslint/config'
import eslintPluginAstro from 'eslint-plugin-astro'
import js from '@eslint/js'

export default defineConfig([
  {
    files: ['**/*.astro', '**/*.vue', '**/*.js', '**/*.ts'],
    extends: ['js/recommended', eslintPluginAstro.configs.recommended],
    plugins: {
      js,
      astro: eslintPluginAstro,
    },
    rules: {
      'prefer-const': 'error',
      'sort-imports': 'error',
    },
  },
])
