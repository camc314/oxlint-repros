import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
    {
        //
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { import: importPlugin },
        // extends: ['js/recommended'],
        // languageOptions: { globals: globals.browser },
        rules: {
            'import/no-named-as-default-member': 'error',
        },
    },
]);
