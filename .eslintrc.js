module.exports = {
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['babel', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
  },
};
