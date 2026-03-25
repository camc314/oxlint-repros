This folder validates `react/jsx-no-useless-fragment` with `{ "allowExpressions": true }`
for the scenario from https://github.com/oxc-project/oxc/issues/20734.

It is intended to answer one question:

Does the ESLint version of the rule allow empty fragments in expression positions
such as default parameter values and ternary branches?

The sample in `src/index.tsx` includes:

- expression-position empty fragments from the issue report
- an expression child fragment (`<>{text}</>`) that `allowExpressions` should allow
- a non-expression wrapper fragment that ESLint should still flag

Run:

```sh
pnpm lint:eslint
pnpm lint:ox
```

Observed behavior with `eslint-plugin-react@7.37.5` and `oxlint@1.57.0`:

- `eslint` reports the empty fragments used in default values and ternary branches
- `oxlint` reports the same empty-fragment cases
- both tools allow the single-expression child case in `AllowedExpressionChild`
- the wrapper fragment in `FlaggedWrapper` is also reported

This means the current ESLint implementation does not treat empty fragments in those
expression positions as allowed by `allowExpressions`; it only allows fragments whose
single child is a JSX expression container.
