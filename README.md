# Wesleyan Frontend

# Introduction

Monorepo for the Frontend apps.

# Getting Started

Angular requires versions of `node >= 10.13.0` and `npm >= 6.11.0`. To be able to switch between different node versions it is recommended to install a node version manager. We will use nvm-windows. Follow the installation process [here](https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows)

After that configure the proxy for nvm, run
`nvm proxy http://wesserverproxy:3128/` in terminal.

Run `nvm install latest`.
To select the installed version run `nvm ls` to see the version number then run `nvm use 14.3.0` (v 14.3.0 at the current time).

If you get an error

> exit status 1: 'C:\Users\ [Your first name]' is not recognized as an internal or external command,
> operable program or batch file.

That is because your user folder in `C:/Users` has a space in it. Follow this fix [here](https://github.com/coreybutler/nvm-windows/issues/405#issuecomment-633395759)

# Run

To run an app locally:

`npm run start app-name`

- `npm run start wpisa`
- `npm run start find-my-fc`

# Build for production

`npm run supply:app-name`

- `npm run supply:wpisa`
- `npm run supply:find-my-fc`

# Test

Running e2e

`npm run nx e2e app-name-e2e -- --watch`

- `npm run nx e2e find-my-fc-e2e -- --watch`

Running unit tests

For a library or app

`npm run nx test lib-name|app-name -- --watch`

- `npm run nx test shared-util-validators -- --watch`
- `npm run nx test wpisa-feature-isa-journey -- --watch`

Running all the unit tests

`npm run nx run-many -- --all --target=test`

Running unit tests only for affected apps or libs by your changes

`npm run nx affected:test -- --parallel`

This project was generated using [Nx](https://nx.dev).

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@wesleyan-frontend/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
