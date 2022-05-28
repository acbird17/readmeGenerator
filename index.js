// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
function userPrompt() {
  const questions = [
    {
      type: "input",
      message: "What is the title of the application?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a description of the application?",
      name: "description",
    },
    {
      type: "input",
      message: "Please include any relevant installation instructions.",
      name: "install",
    },
    {
      type: "input",
      message: "Include information about how someone can contribute.",
      name: "contribute",
    },
    {
      type: "list",
      message: "Please select a license",
      choices: ["MIT", "GNU", "Apache"],
      name: "license",
    },
    {
      type: "input",
      message: "Please enter your Github username",
      name: "github",
    },
    {
      type: "input",
      message: "Please enter your email address",
      name: "email",
    },
    {
      type: "input",
      message: "Enter any tests for the application.",
      name: "tests",
    },
    {
      type: "input",
      message: "Please insert an image link.",
      name: "image",
    },
  ];

  return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("README file has been created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  userPrompt()
    .then((answers) => {
      //console.log(answers.title);
      const markdown = generateMarkdown(answers);
      writeToFile("generatedREADME.md", markdown);
    })
    .catch((err) => {
      if (err) {
        console.log(error);
      }
    });
}

// Function call to initialize app
init();
