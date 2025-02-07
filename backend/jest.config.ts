/**
 * Jest Configuration
 * Documentation: https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  // Automatically clear mock calls and instances between tests
  clearMocks: true,

  // Enable TypeScript support with ts-jest
  preset: "ts-jest",

  // Use Node.js as the test environment
  testEnvironment: "node",

  // Paths to test files (all `.test.ts` or `.spec.ts` files inside `tests/`)
  testMatch: ["**/tests/**/*.test.ts", "**/tests/**/*.spec.ts"],

  // Collect coverage report and store in "coverage" directory
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  // Ignore certain files from coverage reports (e.g., config files, test helpers)
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/prisma/",
    "/tests/",
  ],

  // Maximum time a test can take before failing (useful for async tests)
  testTimeout: 10000,

  // Logging to make debugging easier
  verbose: true,

  // Module resolution for TypeScript (helps Jest understand absolute imports)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Transform TypeScript files using ts-jest
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default config;
