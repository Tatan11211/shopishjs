module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-tabs': 0,
    indent: 0,
    'linebreak-style': 0,
    'no-console': 'off',
    'max-len': 0,
  },
};
