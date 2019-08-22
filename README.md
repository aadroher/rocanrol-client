# 🤘 Rocanrol Client

Rocanrol is a basic audio file server. This repo contains the code for Rocanrol Client, the web client for the service that lives [here](https://github.com/aadroher/rocanrol).

![Rocanrol Client demo](doc/img/rocanrol_client_demo.gif)

## Installation

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

At the time of writing, the web client can only be run in development mode. In other words, on the Webpack development server. When run in this mode, it fetches the service data from `localhost:3000`, since all requests to `/api` will be proxied to this endpoint, as defined in [`src/setupProxy.js`](src/setupProxy.js). 

Therefore, the service needs to be running in order for this web client to run properly.

### Start the service

See the instructions in the `README.md` file of the [rocanrol repository](https://github.com/aadroher/rocanrol) to set up and run the service. 

Neither that nor this applications are versioned. Please make sure that you have first pulled `master` for both of them and have the last version of the audio data file before proceeding to setting it up and running it.

### Start the client

Once the `rocanrol` service is running on port 3000 type the following command in the root folder client to start the development server.

```
npm start
```

The client will then be served from `http://localhost:3001`.

### Allow audio playback

Rocanrol Client does not currently prompt the user asking for permission to play audio. Some browsers give it automatically and some silently fail to do so at all (e.g. Firefox). Make sure that you have configured the site to allow audio playback:

![Allow audio playback](doc/img/allow_audio.png)

### Interact with the client

Enjoy the music! 🤘

## Internal architechture

Rocanrol Client is built on top of React and Redux, and the interface uses components from Material UI. The routes are managed by React Router.

As expected, the different files and directories under `/src` contain the following elements:

- `/app.jsx`: The main React component, which is the entry point of the application.
- `/styles`: Contains the theme configuration to pass to the MUI theme provider.
- `/components`: The presentational React components that are used throughout the application. Most of its organisation is still flat, except for `/components/hocs`, that contains the only higher order component.
- `/containers`: The store-aware connected components, which map both the state and the action dispatchers to the presentational components props.
- `/actions`: Includes a single file with all the actions defined in the system.
- `/reducer`: As the name implies, the collection of reducers which, combined, update the store when receiving dispatched apps.
- `/__test__`: The few tests written so far live here.

The audio itself is managed by wrapping an `<audio>` element with the `<AudioPlayer>` component. The interaction with the imperative interface of this DOM element is triggered by the change of values of its props.

## What is missing

This app is for now a clear case of work in progress. By this I mean that there is still _a lot_ missing before one may even consider it to be a minimum viable set of features. As a todo list of sorts these are the features that are yet to be implemented:

### User interface

Having the controls of the audio element customised (as opposed to using the defaults of the browser) is cool and all but at the moment the user interface is a bit confusing. When a song is selected, the play/pause button gives enough feedback about the current state of the playback both when it is present in the song list page or in its detail view. However, it is possible to navigate away from them and the music keeps playing, with no clear way to return to its controls. 

An always-visible component of the current state of the song playback should be added.

### Use of MUI

This project has been my first exposure to the Material UI framework. I am well aware that its use in the code of this project suffers at least from the following 2 flaws:

- There surely are some redundant components and props assigned to them. It may well be the case that the same final result can be achieved with a simpler DOM structure.

- All the app components are tightly coupled with the MUI styling ones. While with SCSS one should assign semantic classes to the DOM elements and then attach the styles to them, something similar has to be possible with this framework.  

### Caching

Each time a song list page is rendered, a new HTTP request is sent to the backend in order to retrieve the songs for it. The `fetch` call is triggered by an action dispatched by a call to the `useEffect` hook in the song list component. 

The new request on each new route change to a different list page retrieves information that may have been available previously during the interaction session. This data could be cached locally in order to prevent it.

### Error handling

Lots of things can go wrong in a web app like this, since there is a considerable amount of side effects involved. For example, the HTTP request may throw and error or the audio file may get stalled while loading. Besides the `RECEIVE_SONGS_ERROR` action, that is dispatched and never handled, there is currently no other error handling in place. Some needs to be added, with the corresponding feedback to the user. 

### Testing

As mentioned above, the current state of the unit testing is a joke. I have added so far only a couple of test suites, which should serve as an example of what needs to be done for the whole code.

 