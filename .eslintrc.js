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
    'linebreak-style': 0,
    'no-console': 'off',
    'vue/max-len': ['error', {
      code: 150,
      template: 150,
      tabWidth: 2,
      comments: 150,
      ignorePattern: '',
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false,
      ignoreHTMLAttributeValues: true,
      ignoreHTMLTextContents: false,
    }],
  },
};
