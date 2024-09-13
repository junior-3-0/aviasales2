import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import _import from "eslint-plugin-import";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/node_modules", "**/dist", "**/build"],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:import/recommended",
      "airbnb",
      "plugin:react/jsx-runtime",
      "prettier"
    )
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      prettier,
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        parser: "@babel/eslint-parser",

        babelOptions: {
          parserOpts: {
            plugins: ["jsx"],
          },
        },

        ecmaFeatures: {
          jsx: true,
        },

        allowImportExportEverywhere: false,
        presets: ["@babel/preset-env"],
      },
    },

    settings: {
      version: "detect",

      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          moduleDirectory: ["node_modules", "src/"],
        },
      },
    },

    rules: {
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".js", ".jsx"],
        },
      ],

      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",

      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],

      "prettier/prettier": "error",
      "linebreak-style": [0, "unix"],
      quotes: ["error", "single"],
      semi: ["error", "never"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": 0,

      "import/no-unresolved": [
        2,
        {
          caseSensitive: false,
        },
      ],

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
];
