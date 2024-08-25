module.exports = {
  preset: "jest-expo",   
  moduleNameMapper: {
   '^@components/(.*)$': '<rootDir>/src/components/$1',
   '^@pages/(.*)$': '<rootDir>/src/pages/$1',
   '^@routes/(.*)$': '<rootDir>/src/routes/$1',
   '^@services/(.*)$': '<rootDir>/src/services/$1',
   '^@utils/(.*)$': '<rootDir>/src/utils/$1',
 },
 testMatch: ["**/__tests__/**/*-test.tsx"],
 collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
   '\\.[jt]sx?$': 'babel-jest' 
 },
  transformIgnorePatterns: [
   'node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)'
 ]
}