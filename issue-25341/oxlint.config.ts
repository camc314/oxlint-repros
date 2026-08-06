import { defineConfig } from "oxlint";
import unocss from "@unocss/eslint-plugin";

export default defineConfig({
  env: {
    browser: true,
    builtin: true,
    vue: true,
  },
  jsPlugins: ["@unocss/eslint-plugin"],
  plugins: ["eslint", "oxc", "typescript", "unicorn", "vue"],
  rules: {
    ...unocss.configs.recommended.rules,
  },
});
