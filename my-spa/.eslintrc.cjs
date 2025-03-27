module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off", // Не нужен в Vite (автоматический импорт React)
    "@typescript-eslint/explicit-function-return-type": "off", // Можно включить, если хочешь строгий TS
    "react/prop-types": "off", // Не нужен в TypeScript
    "@typescript-eslint/no-unused-vars": ["warn"], // Предупреждать о неиспользуемых переменных
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
