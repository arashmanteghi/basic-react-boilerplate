<a href="http://my.emofid.com/">
  <h1 align="center">
    My Mofid project
  </h1>
</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and customizable with [React App Rewired](https://github.com/timarney/react-app-rewired).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### `yarn lint`

There is linter which configured with default react-app linter and [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) linter and also uses [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) plugin.

Any lint error prevent commit changes via [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).


### `yarn lint:fix`

Fix lint error as could as possible.

<hr />

## React Practices
- Use react hooks to create components as could as possible.
- Use dynamic import for importing route components which usually are in `container` folder.


<hr />

## Styling

In this project, creating style is with help of [styled-components](https://styled-components.com/).

<hr />

## State Management

In this project we uses [redux](https://redux.js.org/) as state manager and [redux-saga](https://redux-saga.js.org/) as a middleware that handles async requests.

By the way [redux-logger](https://github.com/LogRocket/redux-logger) is logging redux action in console on development mode.

<hr />

## Routing Mechanism

We've have been using [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) to manage routes in this project.

<hr />

## Git Commit Convention

We've have been using [Karma](http://karma-runner.github.io/4.0/dev/git-commit-msg.html) as convention of commit massage.



