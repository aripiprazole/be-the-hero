module.exports = {
  parser: "babel-eslint",
  plugins: ["flowtype"],
  extends: "eslint:recommended",
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "flowtype/boolean-style": [2, "boolean"],
    "flowtype/define-flow-type": 1,
    "flowtype/no-mixed": 2,
    "flowtype/semi": [2, "always"],
    "flowtype/valid-syntax": 1,
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
};
