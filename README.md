# Sociopedia-Backend

This is backend of **Sociopedia**.

# Requirements
Node.js and NPM installed on your machine.

#Steps
*Open your terminal and navigate to the folder where you want to create your new project.
*Run the following command to create a new Node.js project:
```
npm init

```
This command will prompt you for some information about your project, such as the name, version, and description. You can accept the default values by pressing Enter or customize them to your liking.
* Install the Express.js framework and other dependencies:
```
npm install express

```
You can also install other packages that you may need, such as body-parser for parsing JSON data, cookie-parser for parsing cookies, and dotenv for managing environment variables.
*Import the required modules:
```
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

```
* To run the project:
Add the following script to your package.json file:
```
"scripts": {
  "start": "nodemon app.js"
}

```
And then :
```
npm start

```
