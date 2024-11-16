export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Handle CSS imports in tests
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  setupFiles: ["<rootDir>/setup.jest.ts"],
};
