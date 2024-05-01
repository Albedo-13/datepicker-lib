import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcssModules from "postcss-modules";
import postcss from "rollup-plugin-postcss";

const isDev = process.env.NODE_ENV === "development";

const esmPlugins = [
  resolve(),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.json",
  }),
  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**",
    presets: [
      "@babel/preset-env",
      "@babel/preset-typescript",
      "@babel/preset-react",
    ],
  }),
  postcss({
    extract: false,
    plugins: [
      postcssModules({
        generateScopedName: "[local]",
        minimize: !isDev,
      }),
    ],
  }),
];

if (!isDev) {
  esmPlugins.push(terser());
}

/**
 * Rollup configuration
 * @type {import('rollup').RollupOptions}
 */
const esmConfig = {
  input: "./src/index.tsx",
  output: [
    {
      dir: "dist",
      format: "esm",
      exports: "named",
      preserveModules: true,
      sourcemap: isDev,
    },
  ],
  external: ["react", "styled-components"],
  globals: { "styled-components": "styled" },
  plugins: esmPlugins,
};

export default [esmConfig];
