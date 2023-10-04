# **Project Name**:  

Bad Bank - the second iteration (create-react-app)

*** I COULD NOT GET THE CARD TO BE VISIBLE AFTER I CONVERTED THE APP TO CREATE REACT APP. THIS WAS SUPPOSED TO BE PORTFOLIO II, BUT I COULD NOT GET IT TO WORK. ALL DATA PAGE WAS NEVER TESTED SINCE I COULD NOT GET CARD TO WORK. LOGIN PAGE ALSO WAS NOT TESTED SINCE IT WAS NOT A REQUIREMENT. IF I FIGURE OUT HOW TO MAKE THE BOOTSTRAP CARD VISIBLE, I CAN UPDATE THIS VERSION'S ALL DATA AND LOGIN PAGES BY COMPARING THEM TO THE THIRD ITERATION OF THE PROJECT, WHICH IS FULLY FUNCTIONAL. ALL OTHER FEATURES REQUIRED FOR THIS ASSIGNMENT WERE FUNCTIONAL AND VERIFIED.

# **Description**: 

The Bad Bank project WILL BE deployed via Amazon Web Service S3 bucket and can be accessed here to see its capabilities: 

The Bad Bank project, a Creat-React-App, is "bad" because there is no security. As a front end banking app; however, it has a register and login page, as well as a deposit and withdraw page. Additionally, there is a home page and a page that tracks all the data in one session. The account balance, initialized at zero, is displayed on the deposit page. Additionally, the account balance, initialized at $100, is displayed on the withdraw page. Unfortunately the account balance is not linked across pages at this time.

This iteration of the project is a create-react-app and has up-to-date code as of October 2023; it is compatible with the latest version of React node.js - version 18.

The following validation was employed:
* All submit buttons are disabled until all the fields have input.
* Email input fields on the Login and Create Account pages require correct email format, otherwise a warning will appear.
* Password input fields on the Login and Create Account pages require 8 or more characters.
* Both Deposit and Withdraw input fields require positive integers, otherwise a warning will appear.
* The Withdraw input cannot exceed the account balance, otherwise an overdraft warning will appear.

Some Features employed:
* When hovering over the NavBar, a title appears explaining what each page is/does. 
* Beware - Account Balance is NOT maintained across pages.
* Each page has a different color card/content to further distinguish its purpose.

The Bad Bank project is an example of the following skills and capabilities: routing, context, tracking state, event handling, parent/child relationships, and forms. I employed Bootstrap and CSS for styling, as well as HTML5, JavaScript, and JSX. As such, this project is one component of my professional portfolio. This particular project is based off of a similar activity I worked on in September and October of 2023 from Modules 18, 19, and Portfolio II in the MIT xPro via Emeritus bootcamp I was enrolled in called "Professional Certificate in Coding: Full Stack Development with MERN."

# **Installation & Dependencies**: 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To use the app, follow these steps:
* Clone the repository or download the code files.
* Navigate to the project directory in your editor (ex/VSCode).
* Examine package.json file for a full list of dependencies.

The following commands were entered in the terminal in creation of this app, after navigating to the project directory:
* npm install
* npm install react
* npm install bootstrap
* npm install react-bootstrap
* npm install react-dom
* npm install react-router
* npm install react-router-dom
* npm install react-scripts
* npm start

# **Usage / How to Run**:

The app initiates on the home page, which is fairly generic, with a welcome message and security warning. The first step would be to "Create Account" or "Login." Once logged in, the user can "Deposit" or "Withdraw" and see the account "Balance" on either of those pages. On the final page, one can see "AllData."

# **Support**: 

Please contact me via email at krentmeester@uwalumni.com.

# **Roadmap**: 

Future fixes or improvements that would be helpful to a user:

* Make the Deposit, Withdraw, and AllData pages only visible upon logging in.
* Track the account balance across all pages 
* Track the account balance even after logging out
* Once logged in, transport the user to an account page where all accounts are visible
* Once an account is created, transport the user to an account page where all accounts are visible
* Remove the AllData page
* NavBar tab is highlighted for the active page

# **License**: 

MIT License

Copyright (c) 2023 Kerri Rentmeester

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
