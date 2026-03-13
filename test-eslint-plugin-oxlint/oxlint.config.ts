import { defineConfig } from 'oxlint';

export default defineConfig({
    plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'react'],
    jsPlugins: ['oxlint-plugin-eslint', 'eslint-plugin-perfectionist'],
    rules: {
        'eslint-js/object-shorthand': ['error'],
        'perfectionist/sort-objects': ['error'],
    },
});
