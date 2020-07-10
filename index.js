const fs = require("fs");
const inquirer = require("inquirer");

// Array for the questions
const questions = [];

// Creates the README and appends the user input
fs.appendFileSync("README.md")

//runs the function to create the file 
init();