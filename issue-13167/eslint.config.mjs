// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import pluginPromise from 'eslint-plugin-promise';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, pluginPromise.configs['flat/recommended']);
