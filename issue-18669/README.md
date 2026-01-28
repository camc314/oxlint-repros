# Issue 18669 - Panic in output formatter when loading ESLint plugin with native N-API dependencies

https://github.com/oxc-project/oxc/issues/18669

## Description

OXLint panics when loading an ESLint plugin (eslint-plugin-slonik) that depends on native N-API modules (synckit, postgres). The crash occurs in the output formatter at `apps/oxlint/src/output_formatter/default.rs:85` where `.unwrap()` is called on a `Result::Err`.

## Reproduction Steps

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run oxlint with type-aware mode:
   ```bash
   pnpm lint
   ```

## Expected Behavior

OXLint should gracefully handle plugins that fail to load and report a diagnostic error instead of crashing.

## Actual Behavior

OXLint panics with:

```
thread 'tokio-runtime-worker' (138793268) panicked at apps/oxlint/src/output_formatter/default.rs:85:65:
called `Result::unwrap()` on an `Err` value: Error
stack backtrace:
    0:        0x128d72558 - _napi_register_module_v1
    ...
```

## Notes

- This reproduction uses `eslint-plugin-slonik` which depends on `synckit` and `postgres` (native N-API modules)
- The panic appears to happen during plugin/module loading, not during rule execution
- This may be platform-specific (reported on macOS ARM)
