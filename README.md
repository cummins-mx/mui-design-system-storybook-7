This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To view this project in storybook:

npm run storybook
Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

As of May 2023, the current Github actions build and deployment process is as follows:
-Github will automatically deploy frmo the docs folder once files are uploaded/modified.
-Files must be built prior to pushing to Github.
-run the following terminal command from the root of the project - 'npm run build-storybook'. This will purge and rebuild the whole docs folder.
-push those files and Github Actions should give you a new hosted link.
