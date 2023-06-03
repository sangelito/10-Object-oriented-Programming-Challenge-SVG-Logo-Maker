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
    // conditional takes inputs and adds to SVG String
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // generate svg file prompts message below or error message
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
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