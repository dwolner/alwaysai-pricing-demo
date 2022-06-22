# alwaysAI Assessment

## Design Implementation

```
Given this interactive mockup, create the pricing page: https://www.figma.com/proto/kdaqZFLKKCK4qwhWwusm0d/aai-pricing?node-id=40%3A1962&starting-point-node-id=40%3A1962 
Use Next.js, React, and any other packages/frameworks that help you build a pleasing interface. 
Feel free to draw inspiration from the alwaysai.co pages, (i.e., use what you have available to you). 
Your work should be delivered via a git repo and steps to run, lint, deploy, etc. should be NPM scripts and outlined in the README.md. 
We should be able to clone and run your app locally to review and debug your code.
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is data driven from `./constants/data.ts`.

### Requirements
```
yarn/npm
node
```
### Getting Started

After clone run:
```bash
npm i
# or
yarn 
```

Then run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Other commands:
```bash
yarn build
yarn start
yarn lint
```

### Hosted on Vercel
Check out the deployed version on Vercel:
[https://alwaysai-pricing-demo.vercel.app/](https://alwaysai-pricing-demo.vercel.app/)

## Data Modal Design

```
Design a relational data model (using the ERD tool of your choice) to represent the following scenario:  An alwaysAI user is the owner of one team but can be a member on an unlimited number of other teams. Each team can have an unlimited number of projects. A project consists of devices, models, apps, and collaborators and to be a collaborator on a project you must be a member of the team. Devices can belong to a project, but all devices belong to a user.
Include some logical column names in each table (make some up if you're unsure what belongs in a table), most importantly include the columns you need to support the relationships described.
Include this ERD as an image file in the repo with the rest of your project from task #1.
```

Take a look at the `alwaysAI ER diagram (crow's foot).jpeg` to review the data model.