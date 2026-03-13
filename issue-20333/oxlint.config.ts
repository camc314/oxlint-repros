import { defineConfig } from 'oxlint';

export default defineConfig({
    $schema: './node_modules/oxlint/configuration_schema.json',
    plugins: ['unicorn', 'typescript', 'oxc', 'import', 'promise', 'vitest'],
    options: {
        typeAware: true,
        typeCheck: true,
    },
});
