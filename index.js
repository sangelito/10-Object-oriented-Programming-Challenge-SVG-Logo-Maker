// node package manager import
const inquirer = require("inquirer"); 
const fs = require("fs"); 

//adds shapes 
const {Triangle, Square, Circle} = require("./shape")

//function write file used eto create SVG file using answers from inquire prompt
function writeToFile(fileName, answers){
    let svgString = ""; 
    //height and width of logo container
    svgString = 
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag wraps <text> tag so that text input is on top of shape
    svgString += "<g>";
    // Takes shape input and inserts it into SVG file
    svgString += `${answers.shape}`;
}

// Inquirer prompt to to prompt user to answer q's in command line 
function promptUser() {
    inquirer
      .prompt([
        // Text prompt
        {
          type: "input",
          message:
            "What text would you like you logo to display? (Enter up to three characters)",
          name: "text",
        },
        // Text color prompt
        {
          type: "input",
          message:
            "Choose text color (Enter color keyword OR a hexadecimal number)",
          name: "textColor",
        },
        // Shape choice prompt
        {
          type: "list",
          message: "What shape would you like the logo to render?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        // Shape color prompt
        {
          type: "input",
          message:
            "Choose shapes color (Enter color keyword OR a hexadecimal number)",
          name: "shapeBackgroundColor",
        },
      ])
      .then((answers) => {
        // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
        if (answers.text.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          promptUser();
        } else {
          // Calling write file function to generate SVG file
          writeToFile("logo.svg", answers);
        }
      });
  }
  
  // Calling promptUser function so inquirer prompts fire off when application is ran
  promptUser();