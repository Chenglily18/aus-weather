# Australia major city weather

This is a web page to show current Australia major cities weather. Including: Melbourne, Sydney, Brisbane, Canberra, Adelaide, Perth, Hobart and Darwin.

## Getting Started

Here is the step to start the project on your local environment.

Please make sure your have install Node on your machine. If not, go to [Node](https://nodejs.org/en/download/) to install node package manager.

Extract the code folder or download the code from Github, then navigate to the project on the command prompt.

Install project package with
```bash
  npm install 
```

Ensure you have Open Weather API KEY ready. If you don't have one handy, go to [Open Weather Map](https://home.openweathermap.org/users/sign_in) and register an account. You will receive an email that contains your API KEY shortly.

Once you have the API KEY, navigate to .env file and replace your API KEY with the placeholder of REACT_APP_API_KEY.
```bash
  aus-weather/.env
```

Make sure you are at ./aus-weather level and run the following command in the terminal.
```bash
  npm start 
```

You are good to go!

## Some Thoughts

As required, I have built a page that shows Australia major city weather. Other than putting the simple cards to show weather, I have only considered some user experience.
For example, if there is no city retrieved from the API call, users would see a message saying there is no city in the system to prevent waiting for nothing. 
I have discovered the icon API from Open Weather that I can utilise, so I have. Their icons change base on the real time weather and the icons' colour change base on daytime and nighttime.

Also, I have added a refresh button for users to refresh the page to get the latest weather for the cities.

The website follows WCAG standards, I have run the accessibility test and screen reader on the page. The result is quite positive.

I have some ideas to put in to make the website more interactive like:
* adding more icons for those items like max and min temperature, wind and pressure like the real weather forecast to make it more exciting,
* adding a search box for users to search for the city they want to see if there are many cities on the list, 
* adding a sort button for users to sort cities by name,
* adding a toggle button for dark mode.

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
