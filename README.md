# IMPORTANT!!!!

This project has been moved to [voltage-form-builder](https://github.com/HurricaneInteractive/voltage-form-builder).

---
---
---

# React Form Builder

> This project is still a **WIP**, I am currently in the "exploring" and "hacking" phase.

The goal for this project is to make form building in react easy and less tedious. I want to build this project to have a easy to use API but still complex for advanced forms.

## Example API

```js
const form = FormBuilder({
  structure: {
    name: string(),
    email: string({ type: "email", value: "abc@abc.com" }),
    age: number(),
    tooYoungMessage: msg("some HTML", { when: ['age', '<', 18] }),
    // optional
    submit: submit("Send email")
  },
  events: {
    submit: (state) => {
      console.log("Submit Form", { state })
    },
    change: (state) => {
      console.log("On Change", { state })
    }
  },
})

// Within a components render method
<div className="form-wrapper">{ form.render() }</div>
```

## In the future

Eventually this project will move away from CRA to allow for packaging and publishing on npm.

## Interested?

If you are interested in knowing more about this project. Feel free to reach out and have a chat.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
