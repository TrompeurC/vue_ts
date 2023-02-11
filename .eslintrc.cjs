module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "@vue/prettier"
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    // "parser": "@typescript-eslint/parser",
    sourceType: "module",
    parser: "@typescript-eslint/parser"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, // 使用单引号
        semi: false, // 末尾添加分号
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false,
        endOfLine: "auto"
      }
    ],
    "vue/no-multiple-template-root": "off"
  }
}
