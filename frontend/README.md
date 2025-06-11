# React + JavaScript + Vite

This template provides a minimal setup to get React working with Vite, including Hot Module Replacement (HMR) and basic ESLint rules.

## ESLint Setup

We recommend using these ESLint plugins for React development:

- `eslint-plugin-react` for React specific linting
- `eslint-plugin-react-hooks` for linting React hooks
- `eslint-plugin-react-refresh` for Vite Fast Refresh support

Example `.eslintrc.js`:

```js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  extends: [js.configs.recommended, 'plugin:react/recommended'],
  plugins: {
    react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
