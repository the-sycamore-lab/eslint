# @sycamore-lab/eslint-config-astro-tailwind

An [ESLint](https://eslint.org) flat config for [Astro](https://astro.build) projects styled with [Tailwind CSS](https://tailwindcss.com).

## Install

```sh
npm install --save-dev @sycamore-lab/eslint-config @sycamore-lab/eslint-config-astro @sycamore-lab/eslint-config-astro-tailwind eslint
```

Requires ESLint 10.

## Usage

```ts
// eslint.config.ts
import sycamore from "@sycamore-lab/eslint-config";
import astro from "@sycamore-lab/eslint-config-astro";
import astroTailwind from "@sycamore-lab/eslint-config-astro-tailwind";
import { defineConfig } from "eslint/config";

export default defineConfig([
  sycamore,
  astro,
  astroTailwind,
  {
    settings: {
      tailwindcss: { cssConfigPath: "./src/styles/global.css" },
    },
  },
]);
```

This config holds only the Tailwind rules. It is meant to follow [`@sycamore-lab/eslint-config`](../eslint-config) and [`@sycamore-lab/eslint-config-astro`](../eslint-config-astro), which set up the parsers for the files it checks.

`cssConfigPath` names the stylesheet that imports Tailwind. Leave the settings out if it is `src/style.css`, the plugin's default.

## What it includes

- [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss)'s recommended rules, for classes in `class`, `class:list` and `@apply`. Class order is left to `prettier-plugin-tailwindcss`
