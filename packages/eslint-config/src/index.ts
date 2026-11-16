import { defineConfig } from "eslint/config";

import base from "./base.js";
import importConfig from "./import.js";
import misc from "./misc.js";

export default defineConfig([...base, ...importConfig, ...misc]);
