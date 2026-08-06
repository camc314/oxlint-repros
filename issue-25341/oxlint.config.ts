import { defineConfig } from "oxlint";

export default defineConfig({
  env: {
    browser: true,
    builtin: true,
    vue: true,
  },
  jsPlugins: ["@unocss/eslint-config/flat"],
  plugins: ["eslint", "oxc", "typescript", "unicorn", "vue"],
});
