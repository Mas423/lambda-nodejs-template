module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "none",
  semi: false,
  endOfLine: "lf",
  parser: "typescript",
  overrides: [
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
    {
      files: ".*.js",
      options: {
        singleQuote: false,
      },
    },
  ],
};
