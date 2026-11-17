import path from "node:path";

/**
 * Globs for the files inside every node_modules folder. The first covers any
 * folder at all; the rest spell out the path to each folder above `fromDir`,
 * since a leading `**` doesn't cross dot folders, as in a checkout under
 * `.claude`.
 *
 * @returns The globs, nearest folder first.
 */
function installedPackagePatterns(fromDir: string): string[] {
  const patterns = ["**/node_modules/**"];
  let dir = path.resolve(fromDir);
  for (;;) {
    const nodeModules = path
      .join(dir, "node_modules")
      .replaceAll(path.sep, "/")
      .replaceAll(/[*?[\]{}()!+@]/g, String.raw`\$&`);
    // pnpm keeps the real files under node_modules/.pnpm.
    patterns.push(`${nodeModules}/**`, `${nodeModules}/.pnpm/**`);
    const parent = path.dirname(dir);
    if (parent === dir) return patterns;
    dir = parent;
  }
}

/**
 * Patterns for `import-x/no-internal-modules`'s `allow` that let imports
 * reach into installed packages. Those guard their own internals with the
 * "exports" field, and publish APIs like "eslint/config" as subpath exports.
 * A config that sets its own `allow` replaces the rule's options, so it has
 * to include these again.
 */
export const installedPackages: readonly string[] = installedPackagePatterns(
  process.cwd(),
);
