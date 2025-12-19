// This file should be ignored by ignorePatterns: ["*.js"]
// But with --type-aware flag, the ignore pattern is not respected

async function fetchData() {
  return Promise.resolve("data");
}

// This triggers no-floating-promises when using --type-aware
fetchData();
