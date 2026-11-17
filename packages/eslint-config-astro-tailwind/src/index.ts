import type { Linter } from "eslint";
import { defineConfig } from "eslint/config";
import type { PluginSettings } from "eslint-plugin-tailwindcss";
import tailwind from "eslint-plugin-tailwindcss";

// The stylesheet that imports Tailwind is the project's to name, with
// `settings.tailwindcss.cssConfigPath`; ESLint merges it into these.
const settings: Partial<PluginSettings> = {
  attributes: ["class", "class:list", "@apply"],
};

// The plugin types its config with typescript-eslint's flat config type,
// as one config or an array of them; it is one that ESLint accepts.
const recommended = tailwind.configs.recommended as Linter.Config;

export default defineConfig({
  ...recommended,
  name: "sycamore/astro-tailwind",
  files: ["**/*.{js,mjs,cjs,ts,mts,cts,astro}"],
  settings: { tailwindcss: settings },
});
