import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  verbose: true,
  rootDir: "./",
  roots: ["<rootDir>", "./src/"],
  modulePaths: ["<rootDir>", "./src/"],
  moduleDirectories: ["node_modules", "./src/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
  },
};

export default config;
