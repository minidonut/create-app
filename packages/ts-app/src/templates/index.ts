export const packageJson = `{
  "name": "{{project-name}}",
  "version": "1.0.0",
  "description": "",
  "license": "MIT",
  "main": "dist/index.js",
  "repository": "{{git-user-id}}/{{project-name}}",
  "scripts": {
    "build": "tsc",
    "test": "NODE_ENV=test jest",
    "lint": "eslint . --ext .js,.ts",
    "start": "ts-node src/index.ts",
    "test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand",
    "start:debug": "node --require ts-node/register --inspect-brk src/index.ts"
  },
  "author": {
    "name": "{{git-user-name}}",
    "email": "{{git-user-email}}"
  },
  "devDependencies": {
    "@types/jest": "^26.0.15",
    "@types/node": "^14.14.10",
    "@typescript-eslint/eslint-plugin": "^4.8.2",
    "@typescript-eslint/parser": "^4.8.2",
    "eslint": "^7.14.0",
    "jest": "^26.6.3",
    "prettier": "^2.2.0",
    "ts-jest": "^26.4.4",
    "ts-node": "^9.0.0",
    "typescript": "^4.1.2"
  }
}`;

export const indexTestTs = `test('pass', () => {
  expect(true).toBeTruthy();
});`;
