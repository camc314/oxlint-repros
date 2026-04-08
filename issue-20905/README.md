This folder reproduces [oxc-project/oxc#20905](https://github.com/oxc-project/oxc/issues/20905).

The issue discussion notes that `.catch().finally()` requires `allowFinally: true` for `promise/catch-or-return`.

The source is:

```ts
new Promise((resolve) => resolve(true))
  .catch(() => console.log('catch'))
  .finally(() => console.log('finally'));
```

Expected behavior:

- ESLint with `eslint-plugin-promise` and `allowFinally: true` should report no error for `promise/catch-or-return`.
- Oxlint with the `promise` plugin and the same option should match that behavior.

Observed on the current installed versions in this folder:

- `pnpm lint:eslint`: passes
- `pnpm lint:ox`: passes

Repro commands:

```sh
pnpm lint:eslint
pnpm lint:ox
```
