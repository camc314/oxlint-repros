# oxc issue 20982

Repro for <https://github.com/oxc-project/oxc/issues/20982>.

The issue reported that `typescript/no-namespace` could not be disabled from `.oxlintrc.json`.

## Source

```ts
export namespace Foo {
  export const value = 1;
}
```

## Expected

Both ESLint and Oxlint should allow this file because the namespace rule is disabled:

- ESLint: `@typescript-eslint/no-namespace` is `off`
- Oxlint: `typescript/no-namespace` is `off`

## Commands

```sh
pnpm install
pnpm lint:eslint
pnpm lint:ox
```

## Current Result

With the package versions in `package.json`, both commands pass. Current Oxlint does not reproduce the reported warning.
