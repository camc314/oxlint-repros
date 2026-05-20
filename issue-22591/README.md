# Demo for Issue #22591

Enabling only typescript rules for `*.ts` files


```
./node_modules/.bin/oxlint --type-aware

  ⚠ eslint(no-unused-vars): Variable 'x' is declared but never used. Unused variables should start with a '_'.
   ╭─[src/ts.ts:8:9]
 7 │
 8 │   const x = {};
   ·         ┬
   ·         ╰── 'x' is declared here
   ╰────
  help: Consider removing this declaration.

  ⚠ eslint(no-unused-vars): Variable 'f' is declared but never used. Unused variables should start with a '_'.
   ╭─[src/js.js:4:7]
 3 │
 4 │ const f = [].filter((v) => v === '')[0];
   ·       ┬
   ·       ╰── 'f' is declared here
 5 │
   ╰────
  help: Consider removing this declaration.

  × unicorn(prefer-array-find): Prefer `find` over filtering and accessing the first result.
   ╭─[src/js.js:4:14]
 3 │
 4 │ const f = [].filter((v) => v === '')[0];
   ·              ──────
 5 │
   ╰────
  help: Use `find(predicate)` instead of `filter(predicate)[0]` or similar patterns.

  × typescript(use-unknown-in-catch-callback-variable): Prefer the safe `: unknown` for a `catch` callback variable.
   ╭─[src/ts.ts:3:11]
 2 │   .then(() => { })
 3 │   .catch((error) => {
   ·           ─────
 4 │     console.log(error);
   ╰────

Found 2 warnings and 2 errors.
Finished in 78ms on 2 files with 72 rules using 12 threads.
```