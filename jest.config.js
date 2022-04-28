module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/test/**/*.spec.tsx'],
  collectCoverageFrom: ['<rootDir>/src/**/*', '!<rootDir>/src/types/**/*'],
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
    },
  },
};
