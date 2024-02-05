
## Hosting on Github

### 1. Install gh-pages

```bash
npm install gh-pages --save-dev
```

or

```bash
yarn add gh-pages
```

### 2. Add a homepage property

```json
{
    "name": "my-app",
    "version": "0.1.0",
+   "homepage": "https://vixcin.github.io/ReactPortfolio",
    "private": true,
    ...
}
```

### 3. Add predeploy and deploy scripts

```json
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
}
```

### Predeploy then deploy

Deploy

```bash
npm run predeploy
```

or

```bash
yarn run predeploy
```

predeploy (optional to add a message)

```bash
npm run deploy -- -m "Deploy React app to GitHub Pages"
```

or

```bash
yarn run deploy -- -m "Deploy React app to GitHub Pages"
```

### Configure Deployment branch on GitPages

Set deployment branch to `gh-pages`

Set the directory to `/root`

### All set

Check the browser at [your gh link](https://vixcin.github.io/ReactPortFolio)
