module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testRegex: 'src/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.(j|t)sx?$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!**/node_modules/**', '!**/dist/**'],
  coverageDirectory: '<rootDir>/coverage',
  setupFilesAfterEnv: ['./src/test/setupTests.js'],
};