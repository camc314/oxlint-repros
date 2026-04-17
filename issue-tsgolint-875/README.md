# issue-tsgolint-875

Issue: https://github.com/oxc-project/tsgolint/issues/875

Minimal source:

```ts
return useSession<SessionData>(event, config);
```

Expectation:

- ESLint should not report `no-unnecessary-type-arguments`.
- Oxlint should match ESLint on current versions.

Versions:

- `eslint`: `10.2.0`
- `typescript-eslint`: `8.58.2`
- `oxlint`: `1.60.0`
- `oxlint-tsgolint`: `0.21.1`
- `h3`: `2.0.1-rc.20`

Commands:

```sh
pnpm lint:eslint
pnpm lint:ox
```

Observed current result:

- The original `useSession<SessionData>(event, config)` false positive does not reproduce on the current published packages above.
- ESLint and Oxlint both report the same two diagnostics on `H3Event<EventHandlerRequest>` instead:

```text
/Users/cameron/github/camc314/oxlint-repros/issue-tsgolint-875/src/index.ts
  25:45  error  This is the default value for this type parameter, so it can be omitted  @typescript-eslint/no-unnecessary-type-arguments
  31:51  error  This is the default value for this type parameter, so it can be omitted  @typescript-eslint/no-unnecessary-type-arguments
```

```text
  x typescript-eslint(no-unnecessary-type-arguments): This is the default value for this type parameter, so it can be omitted.
    ,-[src/index.ts:25:45]
 24 | 
 25 | async function useAppSession(event: H3Event<EventHandlerRequest>) {
    :                                             ^^^^^^^^^^^^^^^^^^^
 26 |   const config = getSessionConfig();
    `----

  x typescript-eslint(no-unnecessary-type-arguments): This is the default value for this type parameter, so it can be omitted.
    ,-[src/index.ts:31:51]
 30 | 
 31 | async function validateSessionUser(event: H3Event<EventHandlerRequest>) {
    :                                                   ^^^^^^^^^^^^^^^^^^^
 32 |   const session = await useAppSession(event);
    `----
```
