// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  // extends: ['@react-native', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  extends: ['expo'],
  plugins: ['react-refresh', 'unused-imports'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react-native/no-inline-styles': 0,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', {vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_'}],
    'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
  },
};
