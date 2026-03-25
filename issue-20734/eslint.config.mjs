// @ts-check

import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default tseslint.config({
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    plugins: {
        react,
    },
    settings: {
        react: {
            version: '18.2',
        },
    },
    rules: {
        'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    },
});
