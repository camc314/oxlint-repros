// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import pluginPromise from 'eslint-plugin-promise';

export default tseslint.config( tseslint.configs.base, {
    plugins: {
        'promise': pluginPromise,
    },
    rules: {
        "promise/valid-params": "error",
        "promise/prefer-await-to-then": "error",
    }
});
