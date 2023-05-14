module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "react",
    "prettier",
    "simple-import-sort",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": [
      "error",
      {
          "printWidth": 80,
          "trailingComma": "es5",
          "semi": true,
          "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
          "no-unused-vars": ["error"]
      }
    ]
  },
};
