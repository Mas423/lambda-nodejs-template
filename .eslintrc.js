module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  ignorePatterns: [".*.js", "*.yml"],
  root: true,
  rules: {
    "prefer-template": "error",
    "no-empty-interface": "off",
    "newline-before-return": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "unused-imports/no-unused-imports": "error"
  }
}
