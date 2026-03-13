# issue-20328

Reproduction for `oxc-project/oxc` issue [#20328](https://github.com/oxc-project/oxc/issues/20328).

## Run

```sh
pnpm install
pnpm lint
pnpm lint:debug
```

## Expected

`pnpm lint` should report `0` errors because the CLI explicitly passes `--tsconfig tsconfig.json`, and the root config includes `src/foo.ts` and the `@types/*` path alias.

## Actual

`src/foo.ts` is treated as unmatched because `oxlint` still falls back to the nearer `src/tsconfig.json`, which excludes `foo.ts`. That causes the imported types to degrade into error types and produces a false positive from `typescript/no-redundant-type-constituents`.
