module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': 2,
    'no-unused-vars': [2, { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
  },
};
