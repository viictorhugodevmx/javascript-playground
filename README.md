# JavaScript Playground

[English](./README.md) | [Español](./README.es.md)

## React Lab 2.0 — APP 01

JavaScript Playground is an interactive learning platform designed to strengthen JavaScript fundamentals through practical exercises, experiments, challenges, debugging, and assessments.

It is the first application in React Lab 2.0, a progressive learning program focused on JavaScript, TypeScript, React, and Next.js.

## Project Status

**Current phase:** Step 0 — Project setup.

The development environment, quality tools, automated tests, and production build have been configured and verified.

The application features and user interface will be implemented in the following development steps.

## Learning Objectives

- Strengthen modern JavaScript fundamentals.
- Understand functions, scope, closures, arrays, and objects.
- Explore prototypes, classes, and ES modules.
- Practice recursion and algorithmic complexity.
- Develop debugging and problem-solving skills.
- Apply clean code and software design principles.
- Build accessible and responsive web interfaces.
- Practice automated testing and professional Git workflows.

## Planned Features

- Dashboard: learning overview and navigation.
- Fundamentals: JavaScript concepts and practical examples.
- Laboratory: controlled interactive JavaScript experiments.
- Challenges: exercises to practice problem-solving.
- Debugging: identify and fix common JavaScript errors.
- Assessments: evaluate knowledge and understanding.
- Progress: track learning progress using Local Storage.

## Technology Stack

| Technology      | Purpose                                 |
| --------------- | --------------------------------------- |
| JavaScript ES6+ | Application logic                       |
| Vite            | Development server and production build |
| HTML5           | Semantic document structure             |
| CSS3            | Styling and responsive design           |
| Local Storage   | Planned client-side persistence         |
| Vitest          | Automated unit testing                  |
| ESLint          | Static code analysis                    |
| Prettier        | Consistent code formatting              |
| Git and GitHub  | Version control and collaboration       |

This application intentionally uses vanilla JavaScript without React, TypeScript, or a backend.

## Requirements

- Node.js 22.19.0
- npm 10.9.3
- Git
- NVM (recommended for Node.js version management)

The required Node.js version is defined in the `.nvmrc` file.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/viictorhugodevmx/javascript-playground.git
cd javascript-playground
```

Select the project Node.js version:

```bash
nvm install
nvm use
```

Install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Available Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the development server         |
| `npm run build`        | Generate the production build        |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Run ESLint                           |
| `npm run format`       | Format supported project files       |
| `npm run format:check` | Check code formatting                |
| `npm run test`         | Run automated tests                  |
| `npm run test:watch`   | Run tests in watch mode              |

## Project Structure

The following structure includes directories prepared for future development.

```text
javascript-playground/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── features/
│   │   ├── dashboard/
│   │   ├── fundamentals/
│   │   ├── laboratory/
│   │   ├── challenges/
│   │   ├── debugging/
│   │   ├── assessments/
│   │   └── progress/
│   ├── styles/
│   ├── utils/
│   │   ├── calculatePercentage.js
│   │   └── calculatePercentage.test.js
│   ├── main.js
│   └── style.css
├── .nvmrc
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── README.es.md
```

Empty directories may not appear in Git until they contain tracked files.

## Quality Gate

Run the following commands before completing a development step:

```bash
npm run format:check
npm run lint
npm run test
npm run build
```

The initial quality gate passed successfully:

- Prettier: passed.
- ESLint: passed.
- Vitest: 4 out of 4 tests passed.
- Production build: passed.
- Development and production browser checks: passed.

## Security

The production dependency audit reported zero known vulnerabilities during the initial project setup.

The full dependency audit reported four moderate alerts associated with minimatch 10.2.6, a transitive development dependency used by ESLint 10.14.0.

Advisory: [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).

The automatic forced correction proposed downgrading ESLint to version 9.39.5. The current configuration has been retained to avoid introducing breaking changes.

This is a temporarily accepted development dependency risk, not a resolved vulnerability. It will be reviewed when a compatible correction becomes available.

## Development Methodology

This project follows the APP methodology v0.2.0:

- Step 0 prepares and validates the development environment.
- Development progresses through sequential steps and validation points.
- Each point is reviewed before moving forward.
- Each completed step includes a Git commit and immediate push to GitHub.
- Quality checks are integrated throughout development.
- Documentation evolves alongside the application.

## Author

Víctor Hugo Segundo Aguilar

Frontend Engineer | JavaScript | TypeScript | React | Angular

- [GitHub](https://github.com/viictorhugodevmx)
- [Portfolio and contact](https://linktr.ee/viictorhugomxm)

---

Part of React Lab 2.0 — From Zero to Expert.
