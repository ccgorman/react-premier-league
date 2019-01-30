Information of the setup can be viewed at the bottom of this file, the project was bootstrapped with [Create React App].

Setup Steps:

Search Create React App should be at https://github.com/facebook/create-react-app

npx create-react-app my-app
where my-app is the name of the app

1. Enable CSS modules so CSS classes in CSS file can be scoped to a specific component and not global.
```a. npm run eject
b. Open files webpack.config.dev.js and webpack.config.prod.js and change test: cssRegex in loader: getStyleLoaders() add modules: true, localIdentName: '[name]__[local]__[hash:base64:5]'```

2. Remove React logos and css to make it a base app

3. Enable prop type validation
```a. npm install --save prop-types```

4. Enable axios HTTP client
```a. npm install --save axios```

5. Enable routing
```a. npm install --save react-router-dom```

6. Enable Testing 
```a. npm install --save enzyme react-test-renderer enzyme-adapter-react-16```

---

Provided during setup of 'create react app':

---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
