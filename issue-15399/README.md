# Reproduction for oxc-project/oxc#15399

## Issue Description

Starting with oxlint version 1.17, users get an error when running `pnpm run lint`:

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension "" for /path/to/file/js/node_modules/.pnpm/oxlint@1.17.0/node_modules/oxlint/bin/oxlint.
Loading extensionless files is not supported inside of "type":"module" package.json contexts.
```

## Root Cause

The issue is that oxlint's package.json has `"type": "module"`, but the bin file `bin/oxlint` has no file extension. According to Node.js ESM requirements, files without extensions cannot be loaded in "type":"module" contexts.

The bin/oxlint file contains:
```js
#!/usr/bin/env node

import "../dist/cli.js";
```

## Setup

This reproduction includes:
- package.json with "type": "module" (mimicking user's project setup)
- oxlint@1.17.0 installed
- A simple test.js file to lint

## Testing

```bash
pnpm install
pnpm run lint
```

## Observations

On macOS with Node.js v24.9.0, the error does NOT occur - oxlint runs successfully.

This suggests the issue may be:
1. Platform-specific (possibly Windows)
2. Node.js version-specific (certain versions between 20.19.0 and 22.12.0 might be stricter)
3. Related to how pnpm creates symlinks on different platforms

## Expected Fix

The oxlint package.json should specify the bin file with an extension:

```json
"bin": {
  "oxlint": "bin/oxlint.js",
  "oxc_language_server": "bin/oxc_language_server"
}
```

And rename `bin/oxlint` to `bin/oxlint.js`.
