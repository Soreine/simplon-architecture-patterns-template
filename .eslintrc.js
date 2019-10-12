module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": 0,
    "max-classes-per-file": 0,
    "no-use-before-define": 0
  }
};
