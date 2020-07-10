const fs = require("fs");
const inquirer = require("inquirer");

// Array for the questions
const questions = [
    //ask user for name of the app 
    {
        type: 'input',
        name: 'titleApp',
        message: 'What is title of this application? (This will also the main header of the README)',

    },
    // asks for a description of the project 
    {
        type: 'input',
        message: 'Write a description of this application',
        name: 'description',

    },
    // How do you install your app? 
    {
        type: 'input',
        message: 'How does a user install the application? Provide instuctions here',
        name: 'installApp',

    },
    // How does a user use your application? 
    {
        type: 'input',
        message: 'How does the application work? Provide instuctions here',
        name: 'appInstructions',

    },
    // What license does the user have? 
    {
        type: 'input',
        message: 'What license they would you  like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none" ',
        name: 'license',

    },

    {
        name: 'badge',
        message: 'Do you want a standard-readme compliant badge?',
        type: 'confirm',
        default: true
    },
    //Asks who else contributed to their application 
    {
        type: 'input',
        message: 'Who else contributed to your application? if none write "none" ',
        name: 'contributors',

    },

    //Asks if there's anything else they would like to include 
    {
        type: 'input',
        message: 'Is there any other information you would like to include in this README? if none write "none" ',
        name: 'otherInfo',

    },
    //asks user for git hub user name 
    {
        type: 'input',
        name: 'gitHubUserName',
        message: 'What is your username on Github?',

    },
];

function init() {
    inquirer.prompt(questions).then((response) => {

        // Creates the README and appends the user input
        fs.appendFileSync("README.md", ("# " + response.titleApp) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }
        })
        // adds the discription of the project that the users entered 
        fs.appendFileSync("README.md", (response.description) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })
        //creates a sub header for installation and adds the instructions the users entered 
        fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installApp) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })
        // creates a sub header for App usage and adds the instructions the users entered 
        fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.appInstructions) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })
        // creates a sub header for issue reporting and contriubiting and adds the instructions the users entered 
        fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.contributors) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })
        // creates a sub header for licences and adds the licences the users entered 
        fs.appendFileSync("README.md", ("## Licence(s)" + '\n' + response.license) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })

        fs.appendFileSync("README.md", ("## " + response.otherInfo) + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })
        // this will create the 2nd line of readme discribing the application was developed by the users reponse to gitHubUserName 
        fs.appendFileSync("README.md", ("##### This application was developed by: " + response.gitHubUserName + '\n') + '\n', function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("Success")
            }

        })

    })
}

//runs the function to create the file 
init();

//for testing purposes: 

//Shows what the response for the questions were. 
// console.log(response)
// console.log(response.gitHubUserName)
// console.log(response.titleApp)
// console.log(response.description)
// console.log(response.appInstructions)
// console.log(response.appIssuesAndCont)
// console.log(response.license)
// console.log(response.contributors)