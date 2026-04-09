This folder demonstrates [oxc-project/oxc#20618](https://github.com/oxc-project/oxc/issues/20618).

The issue reported that `allowArrowFunctions: true` was ignored for `func-style`, so arrow functions assigned to variables were still flagged.

The source is:

```js
const allowed = () => {};

const disallowed = function () {};
```

Expected behavior:

- `const allowed = () => {};` should be allowed.
- `const disallowed = function () {};` should be reported.

Observed on the current installed versions in this folder:

- `pnpm lint:eslint`: reports only `const disallowed = function () {};`
- `pnpm lint:ox`: reports only `const disallowed = function () {};`

That means the original mismatch does not reproduce with current `oxlint`.

Repro commands:

```sh
pnpm lint:eslint
pnpm lint:ox
```
