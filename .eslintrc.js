module.exports = {
  env: {
    browser: true,
    es6: true,
  },
<<<<<<< HEAD
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['jest', 'prettier'],
  extends: [
    'standard',
=======
  plugins: ['jest', 'prettier'],
  extends: [
    'semistandard',
>>>>>>> base config
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
<<<<<<< HEAD

  rules: {
    'consistent-return': 0,
    'no-console': 0,
    'no-var': 2,
=======
  parser: 'esprima',
  rules: {
    'consistent-return': 0,
    'no-console': 1,
>>>>>>> base config
  },
};
