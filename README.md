# Tanplast Ghana Official Website

Modern React web application for Tanplast Ghana Limited, showcasing plastic packaging solutions, industrial products, company mission, and contact information.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`
Compiles production-ready optimized assets into the `build` directory.

### `npm run deploy`
Builds and deploys the production bundle to the `gh-pages` branch on GitHub using the `gh-pages` package.

---

## GitHub Pages Hosting Guide

This project is fully configured for deployment on **GitHub Pages**:

### Option 1: Automated Deployment via GitHub Actions (Recommended)
A GitHub Actions workflow is set up at `.github/workflows/deploy.yml`.
1. Go to your repository on GitHub: **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push commits to `phase1` or `main`. The deployment workflow will trigger automatically and publish the website to:
   `https://taldartech.github.io/Tanplast/`

### Option 2: Manual Deployment with `gh-pages`
If you prefer deploying directly from your local terminal:
1. Ensure your git remote is configured and you have write permissions.
2. Run:
   ```bash
   npm run deploy
   ```
3. Go to **Settings > Pages** on GitHub and set **Source** to **Deploy from a branch**, selecting the `gh-pages` branch and `/ (root)`.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
