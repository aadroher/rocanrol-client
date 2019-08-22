# 🤘 Rocanrol Client

![Rocanrol Client demo](./doc/img/rocanrol_client_demo.gif)

Rocanrol is a basic audio file server. This project contains the code of the web client for the service that lives [here](https://github.com/aadroher/rocanrol).

## Installation

### Node version

As specified in the `.nvmrc` file, this service has only been tested on Node 12.7. It may work in older (but modern) versions of Node, but run it on >12.0.0 for best results.

## Dependencies

As expected, the dependencies are installed by running:

```
npm install
```

This project is an ejected instance of [create-react-app](https://create-react-app.dev/). This is why it has such a huge number of dev dependencies. Some cleanup is needed in order to leave only the ones needed.

## Test

As usual, tests may be run with:

```
npm test
```

The tests generate a coverage report. The current test coverage is _really_ poor.

## Run the app

At the time of writing, the web client can only be run in development mode, in other words, on then Webpack development server. When run in this mode, it fetches the service data from `localhost:3000`, since all requests to `/api` will be proxied to this endpoint, as defined in [src/setupProxy.js](src/setupProxy.js)

### Start the service
