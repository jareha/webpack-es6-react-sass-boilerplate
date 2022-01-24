module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: "airbnb",
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "arrow-body-style": 0,
    "arrow-parens": [
      2,
      "as-needed", {
        requireForBlockBody: true,
      },
    ],
    camelcase: 0,
    "comma-dangle": [
      "warn",
      "always-multiline",
    ],
    "func-names": 0,
    "global-require": 0,
    "import/extensions": [
      2,
      "never",
    ],
    "import/first": 1,
    "import/prefer-default-export": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/no-webpack-loader-syntax": 0,
    "jsx-quotes": [
      2,
      "prefer-double",
    ],
    "max-len": [
      "warn", {
        code: 95,
        ignoreComments: true,
        ignorePattern: "<(.*)>.*?|<(.*) />", // Ignore lines with HTML
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    "no-bitwise": 0,
    "no-console": 0,
    "no-restricted-exports": 0,
    "no-ex-assign": 0,
    "no-mixed-operators": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-restricted-syntax": [
      0,
      "ForOfStatement",
    ],
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": [
      "error", {
        // Allow: `a` and `an`; `content`; options`
        varsIgnorePattern: "(^a)?$|(^an)?$|(content)?$|(options)?$",
      },
    ],
    "no-use-before-define": [
      "warn", {
        functions: false,
        classes: false,
      },
    ],
    "object-curly-spacing": 0,
    "object-shorthand": 0,
    "one-var": 0,
    "padded-blocks": 0,
    "prefer-rest-params": 0,
    "quote-props": [
      "error",
      "as-needed",
    ],
    quotes: [
      "warn",
      "double", {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    "react/function-component-definition": [
      2, {
        namedComponents: "arrow-function",
      },
    ],
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-fragments": 0,
    "react/jsx-pascal-case": 0,
    "react/jsx-uses-vars": 1,
    "react/prefer-es6-class": 0,
    "react/no-array-index-key": 0,
    "react/no-danger": 0,
    "react/prefer-stateless-function": [0],
    "spaced-comment": 1,
    strict: 0,
  },
};
