module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
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

  rules: {
    'consistent-return': 0,
    'no-console': 0,
    'no-var': 2,
  },
};
