# Oxc issue 22867

Issue: https://github.com/oxc-project/oxc/issues/22867

This repro mirrors the reported nested `.oxlintrc.json` layout:

```text
repo/
├── package.json
├── node_modules/
│   └── @byted-image/oxlint/
│       └── configs/
│           └── ts.json
└── packages/
    └── lv-infra-plugins/
        ├── .oxlintrc.json
        └── rule-test.ts
```

The nested config extends `../../node_modules/@byted-image/oxlint/configs/ts.json`.
That extended config enables `oxc/no-const-enum` and contains
`plugins: ["typescript"]`.

Source:

```ts
const enum Enum {
  A = 'A',
  B = 'B',
  C = 'C',
}
```

Run:

```sh
npx oxlint@1.67.0 packages/lv-infra-plugins/rule-test.ts --format json
cd packages/lv-infra-plugins && npx oxlint@1.67.0 rule-test.ts --format json
npx oxlint@1.67.0 -c packages/lv-infra-plugins/.oxlintrc.json packages/lv-infra-plugins/rule-test.ts --format json
```

Observed locally with `oxlint@1.67.0`: the root command misses
`oxc(no-const-enum)`, while the package-directory command and explicit-config
command report it. If `plugins: ["typescript"]` is removed from `ts.json`, the
root command starts reporting `oxc(no-const-enum)`, so that field is the minimal
trigger missing from the earlier reduced example.
