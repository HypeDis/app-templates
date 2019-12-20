module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['jest', 'prettier'],
  extends: [
    'semistandard',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'esprima',
  rules: {
    'consistent-return': 0,
    'no-console': 1,
  },
};
