import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        fetch: "readonly",
        // Node.js globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        // React globals
        React: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": tseslint,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "off", // Use TypeScript version instead
      "no-undef": "off", // TypeScript handles this
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "*.config.{js,mjs,ts}",
    ],
  },
];

