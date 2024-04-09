import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};

export default config;
