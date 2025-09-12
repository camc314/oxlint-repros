Without fix:

```
pnpm run lint --fix-suggestions

> issue-report-unused-imports@1.0.0 lint /Users/cameron/github/camc314/oxlint-repros/issue-report-unused-imports
> oxlint --fix-suggestions


  ⚠ eslint(no-unused-vars): Identifier 'foo' is imported but never used.
   ╭─[src/index.ts:1:10]
 1 │ import { foo } from 'bar';
   ·          ─┬─
   ·           ╰── 'foo' is imported here
   ╰────
  help: Consider removing this import.

Found 1 warning and 0 errors.
Finished in 2ms on 1 file with 88 rules using 12 threads.
```

With Fix:

```
pnpm run lint --fix-suggestions --fix-dangerously

> issue-report-unused-imports@1.0.0 lint /Users/cameron/github/camc314/oxlint-repros/issue-report-unused-imports
> oxlint --fix-suggestions --fix-dangerously

Found 0 warnings and 0 errors.
Finished in 2ms on 1 file with 88 rules using 12 threads.
```

And the import inside `index.ts` is removed.
