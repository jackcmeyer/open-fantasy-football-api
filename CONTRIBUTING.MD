# Contributing

## Prerequisites

- Install [Node.js LTS](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm)

## Start the Project

1. Fork the repository
2. Clone the repository `git clone https://github.com/{{username}}/open-fantasy-football-api.git`
3. change directories into the project `cd open-fantasy-football-api`
4. Install dependencies `npm install`
5. Start the development server `npm start`

## Running Tests

To run all the tests in the project, use `npm test`

## Code Linting/Formatting

The code formatting and linting is manged by [ESLint](https://eslint.org) and [Prettier](https://prettier.io).

To run the linter:

```bash
npm run lint # checks for linting errors/warnings
npm run lint:fix # fixes any autofixable linting errors
```

To run the formatter:

```bash
npm run format # autofixes formatting issues
npm run format:check # checks for formatting issues
```

## Committing

Commits must follow the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#specification) specification
