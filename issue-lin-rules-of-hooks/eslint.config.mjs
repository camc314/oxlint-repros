// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reacthookseslint from 'eslint-plugin-react-hooks';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, reacthookseslint.configs['recommended-latest']);
