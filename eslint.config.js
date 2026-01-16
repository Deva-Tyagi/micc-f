// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Global ignores (like your old ignorePatterns)
  { ignores: ['dist/**', 'node_modules/**'] },

  js.configs.recommended,  // replaces 'eslint:recommended'

  // React recommended + JSX runtime (no need to import React in JSX)
  pluginReact.configs.recommended,
  pluginReact.configs['jsx-runtime'],

  // React Hooks rules
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },

  // Your custom plugin & rule (react-refresh)
  {
    plugins: {
      'react-refresh': pluginReactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // Apply to all JS/JSX files + browser env + latest ECMA
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: '18.2' },  // or 'detect'
    },
  },
];