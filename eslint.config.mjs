// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default tseslint.config({
  ignores: ['node_modules', '**/dist/**', '**/connections/**'],
  files: ['src/**/*.ts'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tailwindcss.configs['flat/recommended'],
    eslintConfigPrettier,
    eslintPluginPrettierRecommended
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    eqeqeq: [2, 'allow-null']
  }
});
