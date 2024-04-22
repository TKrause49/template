/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import babelParser from '@babel/eslint-parser';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    languageOptions: {
      parser: babelParser,
      globals: globals.browser,
    },
  },
  {
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
  ...compat.extends('airbnb-base'),
];

export { __dirname };
