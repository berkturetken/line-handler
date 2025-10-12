# Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to set up the development environment?

- Make the *setup-repo.sh* script executable: `chmod 744 setup-repo.sh`
- Run the *setup-repo.sh* script: `./setup-repo.sh`
- You're ready to go! Run `npm start` to spin up the project locally.

## Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions:
- **Production deployment** is triggered automatically on every push to the `main` branch. GitHub Actions workflow builds and deploys to GitHub Pages.
- **Manual deployment** can be triggered via the Actions tab in GitHub.

## Available Commands

In the project directory, you can run:
* `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.
* `npm test`: Launches the test runner in the interactive watch mode.
* `npm run build`: Builds the app for locally to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
* `npm run eject`: **Note: this is a one-way operation. Once you `eject`, you can't go back!** If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own. You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More About Create React App (CRA) and Other Concepts

- [More About CRA](https://facebook.github.io/create-react-app/docs/getting-started)
- [More About React](https://reactjs.org/)
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [`npm run build` Fails to Minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
