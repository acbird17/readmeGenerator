// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  inquirer.prompt([
    {
      type: "input",
      message: "What was your motivation?",
      name: "question1",
    },
    {
      type: "input",
      message: "Why did you build this project?",
      name: "question2",
    },
    {
      type: "input",
      message: "What problem does it solve?",
      name: "question3",
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "question4",
    },
    {
      type: "input",
      message: "Insert a image link.",
      name: "image",
    },
  ]),
];

// TODO: Create a function to write README file
//function writeToFile(README.md, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
