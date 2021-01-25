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

# Build

In the file `angular.json` All build tsConfig have been set to `"tsConfig": "apps/wpisa/tsconfig-es5.app.json"` using [differential builds](https://angular.io/guide/deployment#differential-builds)
When IE11 is depprecated in summer 2021 please change the above to `"tsConfig": "apps/wpisa/tsconfig.app.json"`

# Build for production

`npm run supply:app-nam`
Generated file are at this location `C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\app-name`

- `npm run supply:wpisa`
- `npm run supply:find-my-fc`

There is also a PowerShell script for each app ( `RunSupplyWPISA.ps1`, `RunSupplyFindMyFC.ps1`) that runs the previous command and copies the generated `.css` and `.js` files to the correct location in `inetpub` for local dev and `Sitecore Platform` folder.

## Build style.css only

`npm run supply:style`

`style.css` should be locate here `C:\VSTS\Digital Programme\Wesleyan-Frontend\dist\apps\style`

There is also a PowerShell script `RunSupplyStyle.ps1` that runs the previous command and copies the generated styles to the correct location in `inetpub` for local dev and `Sitecore Platform` folder.

# Test

Running end-to-end tests

`npm run nx e2e app-name-e2e -- --watch`

- `npm run nx e2e find-my-fc-e2e -- --watch`

Running unit tests for a library or app

`npm run nx test lib-name|app-name -- --watch`

- `npm run nx test shared-util-validators -- --watch`
- `npm run nx test wpisa-feature-isa-journey -- --watch`

Running all the unit tests

`npm run nx run-many -- --all --target=test`

Running unit tests only for apps/libs affected by your changes

`npm run nx affected:test -- --parallel`

# Creating a new app

It will need to use the shared styling lib `shared-ui-style` and probably the assets lib. In `angular.json` make sure you add the following for the new app

    ...
    "architect": {
        "build": {
          ...,
          "options": {
            ...
            "assets": [
              ...
              {
                "glob": "**/*",
                "input": "libs/shared/assets/src/assets",
                "output": "assets"
              }
            ],
            "styles": ["libs/shared/ui-styles/src/index.scss"],
            "stylePreprocessorOptions": {
              "includePaths": ["libs/shared/ui-styles/src/lib"]
            },

Because we are not directly importing the style lib like a typescript lib nx doesn't know to recompile after a build(builds are cached locally). To make this working we need to add the style lib as an implicit dependency in `nx.json` like

    "find-my-fc": {
      "tags": [],
      "implicitDependencies": ["shared-ui-styles"]
    }

This will also link your new app with the `shared-ui-styles` when viewing the dependency graph.

# Naming conventions

When generating a new app make sure that the same name used for the app is used in the build command in package.json `supply:app-name` and in the `libs` folder i.e `libs\app-name`.

When creating a new library there are few types to consider

- **Feature libraries:**
  Developers should consider feature libraries as libraries that implement smart UI (with access to data sources) for specific business use cases or pages in an application.
  Prefix with `feature-`

* **UI libraries:**
  A UI library contains only presentational components (also called "dumb" components).
  Prefix with `ui-`

- **Data-access libraries:**
  A data-access library contains code for interacting with a back-end system. It also includes all the code related to state management.
  Prefix with `data-access-`

* **Utility libraries:**
  A utility library contains low-level utilities used by many libraries and applications.
  Prefix with `util-`

You can read more about lib types [here](https://nx.dev/latest/angular/workspace/structure/library-types).

# Gotchas

If you have problem running the NX Console in VSCode open PowerShell run `notepad $profile`, comment out everything, save and try again.

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
