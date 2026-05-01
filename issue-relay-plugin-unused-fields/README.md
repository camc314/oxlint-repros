# Relay ESLint plugin with Oxlint

Minimal repro for checking whether Oxlint's JavaScript plugin support can run `eslint-plugin-relay`'s `relay/unused-fields` rule.

## Expected

`relay/unused-fields` should report the selected `id` and `email` fields because only `user.name` is read in `src/RelayExample.jsx`.

## Result

Works with:

- `oxlint@1.62.0`
- `eslint-plugin-relay@2.0.0`

`pnpm lint` reports two `relay/unused-fields` errors for `id` and `email`.

## Run

```sh
pnpm install
pnpm lint
```
