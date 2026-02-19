module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-tailwindcss',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['**/*.astro', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
}
