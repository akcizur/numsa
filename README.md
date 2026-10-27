# Jakub Růžička — Cinematic Portfolio

React, TypeScript and Vite portfolio site.

## Local development

Requirements: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## GitHub Pages

The site deploys automatically when changes are pushed to the `main` branch. In the repository settings, enable **Pages → Build and deployment → GitHub Actions**. The workflow builds the site and publishes the `dist` directory.

For a project site (`https://<owner>.github.io/<repository>/`), Vite derives the base path from the GitHub Actions repository name. For a user or organization site (`https://<owner>.github.io/`), name the repository `<owner>.github.io`; the build uses the root path.
