import type { StorybookConfig } from "@storybook/react-webpack5";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: "tag",
  },
  // TODO: NOT WORKING THO
  // babel: async (options) => ({
  //   ...options,
  //   presets: [
  //     ...options.presets,
  //     [
  //       "@babel/preset-react",
  //       {
  //         runtime: "automatic",
  //       },
  //       "preset-react-jsx-transform", // Can name this anything, just an arbitrary alias to avoid duplicate presets'
  //     ],
  //   ],
  // }),
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ]
    }
    return config
  },
};
export default config;
