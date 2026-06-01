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

The nested config extends `../../node_modules/@byted-image/oxlint/configs/ts.json`,
and that extended config enables `oxc/no-const-enum`.

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

Observed locally with `oxlint@1.67.0`: all three commands report
`oxc(no-const-enum)`, so the minimal setup does not reproduce the root CLI
miss described in the issue.
