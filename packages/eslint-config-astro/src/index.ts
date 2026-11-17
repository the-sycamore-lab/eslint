import type { Linter } from "eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import { configs as astroConfigs } from "eslint-plugin-astro";
import globals from "globals";
import { astroConventions } from "./astro-conventions.js";

const astroFiles: Linter.Config = {
  name: "sycamore/astro/astro-files",
  files: ["**/*.astro"],
  languageOptions: {
    // astro-eslint-parser doesn't support projectService yet.
    parserOptions: { projectService: false, project: true },
  },
};

const configFiles: Linter.Config = {
  name: "sycamore/astro/config-files",
  files: ["**/*.config.{js,mjs,cjs,ts,mts,cts}"],
  rules: {
    "import-x/no-default-export": "off",
  },
};

// These build on @sycamore-lab/eslint-config, which the project lists first:
// it registers the parser and the plugins whose rules are set here.
export default defineConfig(
  globalIgnores([
    "**/dist/",
    "**/.astro/",
    "**/.lighthouse/",
    "**/node_modules/",
  ]),
  {
    name: "sycamore/astro/globals",
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  astroConfigs.recommended,
  {
    name: "sycamore/astro/typed-linting",
    languageOptions: {
      parserOptions: {
        // tsconfig.json already includes every file, so the config files
        // don't need the base config's allowDefaultProject fallback.
        projectService: true,
        extraFileExtensions: [".astro"],
      },
    },
  },
  astroFiles,
  astroConventions,
  configFiles,
);
