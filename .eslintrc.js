module.exports = {
  settings: {
    "import/resolver": {
      webpack: {
        config: require.resolve("@vue/cli-service/webpack.config.js"),
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "no-tabs": 0,
    indent: 0,
    "linebreak-style": 0,
    "no-console": "off",
    "max-len": 0,
    quotes: 0,
    "implicit-arrow-linebreak": 0,
    "comma-dangle": 0,
  },
};
