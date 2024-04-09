import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};

export default config;
