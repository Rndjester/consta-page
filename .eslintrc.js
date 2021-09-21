/**
 * Хотелось бы сделать все ошибки a11y просто предупреждениями
 * Решение взято отсюда:
 * https://github.com/airbnb/javascript/issues/2032#issuecomment-568934232
 */
 const a11yRules = require("eslint-plugin-jsx-a11y").rules;
 const a11yWarn = Object.keys(a11yRules).reduce(
     (acc, rule) => {
         const key = `jsx-a11y/${rule}`;
         acc[key] = "warn";
         return acc;
     },
     {}
 );
 
 module.exports = {
     env: {
         browser: true,
         node: true,
         es6: true,
         jest: true
     },
     extends: [
         "airbnb",
         "airbnb-typescript",
         "airbnb/hooks",
         "plugin:@typescript-eslint/recommended",
         "plugin:react/recommended"
     ],
     plugins: [
         "react",
         "@typescript-eslint"
     ],
     parser: "@typescript-eslint/parser",
     parserOptions: {
         ecmaFeatures: {
             jsx: true
         },
         ecmaVersion: 2019,
         sourceType: "module",
         project: "./tsconfig.json"
     },
     // https://stackoverflow.com/questions/63118405/how-to-fix-eslintrc-the-file-does-not-match-your-project-config
     ignorePatterns: [".eslintrc.js"],
     rules: {
         ...a11yWarn,
         "react/jsx-props-no-spreading": "off",
         "react/prop-types": "off",
         "react/require-default-props": "off",
     
         "max-classes-per-file": "off",
         "class-methods-use-this": "off",
         "no-underscore-dangle": "off",
 
         "import/no-extraneous-dependencies": "off",
     
         "@typescript-eslint/comma-dangle": ["error", "never"],
         "@typescript-eslint/indent": ["error", 4],
         "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
         "@typescript-eslint/brace-style": ["error", "stroustrup"],
     
         "operator-linebreak": [
             "error",
             "after",
             {
                 overrides: {
                     "?": "before",
                     ":": "before"
                 }
             }
         ],
         "react/jsx-indent": ["error", 4],
         "react/jsx-indent-props": ["error", 4],
     
         "import/prefer-default-export": "warn"
     }
 }
 