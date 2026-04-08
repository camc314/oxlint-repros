// @ts-check

import tseslint from 'typescript-eslint';
import pluginPromise from 'eslint-plugin-promise';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    plugins: {
      promise: pluginPromise,
    },
    rules: {
      'promise/catch-or-return': ['error', { allowFinally: true }],
    },
  },
);
