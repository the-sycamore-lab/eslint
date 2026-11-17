# @sycamore-lab/eslint-config-astro

An [ESLint](https://eslint.org) flat config for packages and projects built with [Astro](https://astro.build).

## Install

```sh
npm install --save-dev @sycamore-lab/eslint-config @sycamore-lab/eslint-config-astro eslint
```

Requires ESLint 10.

## Usage

```ts
// eslint.config.ts
import sycamore from "@sycamore-lab/eslint-config";
import astro from "@sycamore-lab/eslint-config-astro";
import { defineConfig } from "eslint/config";

export default defineConfig([
  sycamore,
  astro,
  // your own configs
]);
```

This config builds on [`@sycamore-lab/eslint-config`](../eslint-config) without including it, so list that one first.

Run ESLint from the project's directory, where its `tsconfig.json` is.

For a project with [Tailwind CSS](https://tailwindcss.com) classes, add [`@sycamore-lab/eslint-config-astro-tailwind`](../eslint-config-astro-tailwind) after it.

## What it includes

- Type-aware linting from the project's `tsconfig.json`, for `.astro` files too
- [`eslint-plugin-astro`](https://github.com/ota-meshi/eslint-plugin-astro)'s recommended rules for `.astro` files
- Browser and Node.js globals
- Ignores for `dist/`, `.astro/`, `.lighthouse/` and `node_modules/`

It also checks two conventions:

- **Barrels.** A file in another folder is only imported through that folder's `index`, `integration`, `content`, `server` or `client` file: `"../components"`, not `"../components/hero.astro"`. Stylesheets, images and installed packages are exempt.
- **Default exports.** Only config files (`*.config.ts`, `*.config.mjs`, …) may have one.
