[![Build Status](https://travis-ci.org/erwindev/college-app-tracker-ui.svg?branch=master)](https://travis-ci.org/erwindev/college-app-tracker-ui)
# College Application Tracker UI

This application is the front end for the College Tracker Service.  It is built in Angular2 using Angular CLI.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Install Bootstrap
```
npm install bootstrap --save

```
Note: Update style.css to include

```
@import '~bootstrap/dist/css/bootstrap.css';
```

## Docker build
In order to build and push docker images, please login to you [Dockerhub](www.dockerhub.com) account.
Make sure that you run `ng build -prod` before you do a Docker build.
```
$ docker build -t <username>/college-app-tracker-ui .
$ docker push <username>/college-app-tracker-ui
```

## Running the entire application via Docker
The simplest way to spin up the entire application is to run all the components in Docker.  To do this, please refer to[college-app-tracker-docker](https://github.com/erwindev/college-app-tracker-docker)Github repo.

## Questions:
Contact Erwin Alberto (ealberto@me.com)
