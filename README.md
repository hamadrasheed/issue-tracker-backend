
# Issue Tracker

Application that will help you out to maintain issues being logged.



# Issue Tracker Backend



# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Chiro Build Backend](#Chiro-build-backend)
	- [Project Structure](#project-structure)
	- [ESLint](#eslint)
- [Dependencies](#dependencies)
	- [`dependencies`](#dependencies-1)
	- [`devDependencies`](#devdependencies)

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)(VERSION 22.14.0)
- Install [NPM](https://www.npmjs.com/package/npm)(VERSION 10.9.2)

- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone https://github.com/hamadrasheed/issue-tracker-backend
```
- Install dependencies
```
cd issue-tracker-backend
npm install
```
- Configure app with your local MYSQL variables
```bash
# create a new file name it as '.env'
# go to sample.env file
# copy all keys from sample.env to .env file
# update the .env with your current local setting

```
- Migration and Seeder
```
Once .env is setup, we need to run 'npm run db:migrate' that will 
run the migrations and create the tables in our database.
Once migrations are run, we will run 'npm run db:seed' that will run our seeders
to seed data in our tables.  
```

- Run the project
```
npm run dev
```

Finally, navigate to `http://localhost:8082` and you should see the backend is running. Now you will test apis with postman!

# Issue Tracker Backend



### Running the scripts
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.

Below is a list of all the scripts this template has available:


| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Run the `./app.js` main file (build). Can be invoked with `npm start`.   |
| `start:dev`             | Run the application in development using webpack.        |
| `test`             | Run the test file.        |
| `build`                   | Full build for production.                                                         |
| `dev`                     | Runs nodemon on `src/app.ts` which is the apps entry point.         |
| `copy-config`             | Copies the sequelize config file into dist/config directory.        |
| `db:migrate`             | Runs Sequelize migrations on the database.        |
| `db:seed`             | Runs all Sequelize seeders to populate the database.        |



## TSLint
ESLint is a code linter which mainly helps catch minor code quality and style issues.

### TSLint rules
Like most linters, TSLint has a wide set of configurable rules as well as support for custom rule sets.
All rules are configured through `tslint.json`.


# Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

| Package              | Description                                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chalk                | Terminal string styling library for colored output.                                                                                                                                                                                   |
| connect-timeout      | Times out a request in the Connect/Express application framework.                                                                                                                                                                     |
| cors                 | Package for providing a [Connect](http://www.senchalabs.org/connect/)/[Express](http://expressjs.com/) middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options. |
| dotenv               | Loads environment variables from .env file.                                                                                                                                                                                           |
| express              | Node.js web framework.                                                                                                                                                                                                                |
| helmet               | Security middleware that helps secure Express apps by setting various HTTP headers.                                                                                                                                                   |
| lodash               | Utility library providing helpful functions for arrays, objects, and other data types.                                                                                                                                                |
| morgan               | HTTP request logger middleware for Node.js.                                                                                                                                                                                           |
| mysql2               | MySQL client for Node.js with focus on performance.                                                                                                                                                                                   |
| reflect-metadata     | Allows you to do runtime reflection on TypeScript types.                                                                                                                                                                              |
| sequelize            | Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.                                                                                                                               |
| sequelize-typescript | Adds TypeScript support and decorators for Sequelize models.                                                                                                                                                                          |
| xss-clean            | Middleware to sanitize user input and prevent XSS attacks.                                                                                                                                                                            |
| zod                  | TypeScript-first schema validation library for parsing and validating data.                                                                                                                                                           |
                                                     |


## `devDependencies`

| Package                          | Description                                                                               |
| -------------------------------- | ----------------------------------------------------------------------------------------- |
| @types/chalk                     | TypeScript type definitions for the `chalk` library.                                      |
| @types/connect-timeout           | TypeScript type definitions for the `connect-timeout` middleware.                         |
| @types/cors                      | TypeScript type definitions for the `cors` middleware.                                    |
| @types/dotenv                    | TypeScript type definitions for the `dotenv` library.                                     |
| @types/express                   | TypeScript type definitions for the `express` framework.                                  |
| @types/express-serve-static-core | TypeScript type definitions for core Express middleware functions.                        |
| @types/lodash                    | TypeScript type definitions for the `lodash` utility library.                             |
| @types/morgan                    | TypeScript type definitions for the `morgan` HTTP logger middleware.                      |
| @types/node                      | TypeScript type definitions for Node.js built-in modules.                                 |
| @types/sequelize                 | TypeScript type definitions for the `sequelize` ORM.                                      |
| nodemon                          | Automatically restarts the Node.js application when file changes are detected.            |
| shelljs                          | Portable Unix shell commands for Node.js scripts.                                         |
| ts-loader                        | TypeScript loader for webpack.                                                            |
| ts-node                          | Executes TypeScript files directly without precompiling.                                  |
| tslint                           | Linter for TypeScript code.                                                               |
| typescript                       | TypeScript language compiler.                                                             |
| webpack                          | Module bundler to bundle JavaScript/TypeScript files for browser or Node.js environments. |
| webpack-cli                      | Command-line interface for webpack.                                                       |
| webpack-node-externals           | Webpack plugin to exclude Node.js modules from the bundle.                                |


To install or update these dependencies you can use `npm install` or `npm update`.


# Improvements:
```
If i have more time, i could have setup to run backend using docker file.
```