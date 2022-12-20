# Holo Github project

## Project Description 

This project allows you to search on github by users / repos using Github Apis.

## Folder Structure
In the project, I aimed at having it structured in a feature based structure, in which each feature is modular with its own components types, resources, redux-slice, context (to avoid props drilling while maintaining the usage of React Hooks), tests with having the app folder for the shared resources mentioned above.
This structure makes sure each module is a stand-alone application yet still provide ability for inheritance and exposure to other modules, a structure that can be scaled very well or even suit a micro-frontend approach - if any - in the future well.

### Single Module Structure

Since we use redux, it has a big role in the structure, almost every module is going to use redux. hence, have its own `redux-slice`, so we will have a `redux` directory for the slice, the apis functions, and the services to have the thunk actions in a separate file for more cleanness of the code.

  We have a `resources` dir, which includes anything that's not a page, redux, component e.g. Context, hooks, types, utils ...etc.

  We have the components and tests files which contain what their title says for their respective modules.

  the index file is the page file of this module, if we have multiple pages we can either create pages folder if they are on the same level or nest modules in case of them having parent - children relationship e.g.

    -> products
     ---> [productId]
    -> search
    right here the products and the search are on the same level but the productId dynamic route is a child module of our products module.

    we can have cases in which they all are separated in different modules which means they have separate directories in the src directory
       

## Features
I have 3 main features:
- Form handling
- Querying the data from the API
- Listing the Search Results

### Form Handling
I have created a custom hook `useForm` and used within it `useReducer` as I [find it more proficient with forms data] (https://dev.to/ahmedsarhan/the-trap-of-the-usestate-hook-with-forms-2d86)

I have then created a context to wrap the page to access the form data through it and consumed the `useForm` within it
this helps me avoid drilling props and raising the level of my `useForm` hook just to check for the value of the `searchType`.

I have also created couple helper hooks `useDebounce` and `useInfiniteScroll` which both can be used in different modules, so they are in the shared `app` directory.

I have created `useFetchData` hook to keep the `useForm` a bit clean as it's consuming and handling a lot of computations and data so it's become a big chunk of code.

### Querying the data from the API && Listing the Search Results

- I created an Axios instance with the baseUrl coming from the .env.local file which wasn't pushed to this codebase -> check the [Devops and Deployment section] (#devops-and-deployment)

- All the following assumes the user have typed at least 3 characters in the `searchInput`;

- I depended on debouncing the `searchInput` value to delay hitting the API calls, once the timeout is over the data is fetched, a skeleton that displays a UI similar to the data expected, once the API finishes the data listing replaces the skeleton.

- If the user scrolls down to the bottom of the list and the amount of the data in our `redux-store` is less than the one stored in the `usersCount` or `reposCount` coming from `total_count` index that's being sent with APIs response, the App will fetch another page from the same endpoint.

- If the user changes the selected option of the `searchType`, the App will clear the data on the store and fetch again for the same query in the `searchInput`.

- On changes in the `searchInput` value, the same scenario apply.


## Devops and Deployment

- I decided instead of deploying to Vercel which have their own CI/CD out of the box and deploy right away on every new commit to the `main` branch, to create my own CI/CD using `Github Actions` and deploy to `Firebase`.

- I have stored the `REACT_APP_API_URL` and the `FirebaseConfig` values in the Github repo secrets which seem very secure and easily accessible by the github actions [see here] (https://github.com/AhmedSarhan/holo-github/blob/main/.github/workflows/firebase-hosting-merge.yml)

- I have created two CI/CD one for what should be the projects production connected to the `main` branch and deploys on each new commit to the `main` branch with the caveat that the "No one" can commit to the `main` branch directly and the only path is `pull-request`.

- The `pull-request` approach mentioned above would be vey beneficial in a team setup as you can prevent merging without a PR review and approval, this means you usually have a code-review, keeping the code quality at a good level "very opinionated at my side 😁".

- The Second CI/CD runs on every new `pull-request` or a commit to source branch of that `PR` creating on completion a `preview-url` that lasts for almost 2 weeks which allows teams to test on a `testing-env` without deploying to production before completion.
 

## What Needs improvement

- Usage of a data caching mechanism on the server e.g. `RTK-Query`.
- Writing more inclusive Tests with mocks for the api calls.
- using the router params to include the `searchInput` and `searchType` values to the page url to allow users to copy and share the url for better ux.


 ## CRA basic setup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.








## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
