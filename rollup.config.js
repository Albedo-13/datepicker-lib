import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import postcssModules from "postcss-modules";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";

// TODO: https://github.com/vitejs/vite/issues/12446

const isDev = process.env.NODE_ENV === "development";

const esmPlugins = [
  resolve(),
  commonjs(),
  typescript({
    compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
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
  external: ["react"],
  plugins: esmPlugins,
};

export default [esmConfig];
