Hi @mkilpatrick,

This error occurs because you're running Node.js 18, which is no longer supported by oxlint starting from version 1.17.0.

As of version 1.17.0, oxlint requires Node.js **20.19.0+** or **22.12.0+** due to the package being converted to ES modules (ESM). The `ERR_UNKNOWN_FILE_EXTENSION` error you're seeing is because Node.js 18 doesn't properly support loading extensionless files in "type":"module" contexts, which is required for our ESM implementation.

The minimum Node.js version was updated in PR #13879 to support `require(ESM)` functionality needed for lazy-loading ESM modules. Node.js 18 reached End-of-Life on April 30, 2025, so we made the decision to require more recent Node.js versions that properly support ESM.

**Solution:**
Please upgrade to Node.js 20.19.0 or later (Node.js 22.12.0+ is also supported). If you need to stay on oxlint with Node.js 18, you can use oxlint version 1.16.x which still supports older Node.js versions.

You can check your current Node.js version with:
```bash
node --version
```

Let me know if you have any questions!
