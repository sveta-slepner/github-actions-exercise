import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // Global ignores
  { ignores: ['dist'] },
  {
    // This configuration applies to TypeScript files
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      // Use the TypeScript parser
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        // Optional: provide your tsconfig for type-aware linting
      },
      globals: globals.browser,
    },
    settings: {
      // Adjust the React version as needed
      react: { version: '18.3' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Extend from the recommended ESLint, React, and React Hooks rules
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      // Add TypeScript recommended rules
      ...tsPlugin.configs.recommended.rules,
      // Customize or disable rules as needed
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
