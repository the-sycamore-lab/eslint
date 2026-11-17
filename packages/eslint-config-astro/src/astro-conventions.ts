import type { Linter } from "eslint";
import { installedPackages } from "@sycamore-lab/eslint-config";

const barrelNames = ["index", "integration", "content", "server", "client"];
const assetExtensions = ["css", "svg", "png", "jpg", "jpeg", "webp", "avif"];

export const astroConventions: Linter.Config = {
  name: "sycamore/astro/conventions",
  rules: {
    "import-x/no-internal-modules": [
      "error",
      {
        allow: [
          `**/{${barrelNames.join(",")}}`,
          `**/*.{${assetExtensions.join(",")}}`,
          ...installedPackages,
        ],
      },
    ],
    "import-x/no-unresolved": ["error", { ignore: ["^astro:", "^virtual:"] }],
  },
};
