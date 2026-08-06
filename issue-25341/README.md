# Oxlint + unocss


```
 pnpm run lint
$ oxlint

  ⚠ @unocss(order): UnoCSS utilities are not ordered
   ╭─[app.tsx:3:19]
 2 │   return (
 3 │     <h1 className="text-3xl hover:text-red m1 font-bold underline">
   ·                   ────────────────────────────────────────────────
 4 │       Hello world!
   ╰────

Found 1 warning and 0 errors.
```