// Requiring the dependencies of this application.

const inquirer = require('inquirer');
const fs = require('fs');

// List of prompts for the user in the command line that will then be generated into the HTML. 

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: 'What is the team manager name?',
        },
        {
            type: 'input',
            name: 'managerid',
            message: 'What is the team manager employee ID?',
        },
        {
            type: 'input',
            name: 'manageremail',
            message: 'What is the team manager email?',
        },
        {
            type: 'input',
            name: 'managernumber',
            message: 'What is the team manager office number?',
        },
        {
            type: 'input',
            name: 'engineername',
            message: 'What is the engineer name?',
        },
        {
            type: 'input',
            name: 'engineerid',
            message: 'What is the engineer employee ID?',
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: 'What is the engineer email?',
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: 'What is the engineer github username?',
        },
        {
            type: 'input',
            name: 'internname',
            message: 'What is the intern name?',
        },
        {
            type: 'input',
            name: 'internid',
            message: 'What is the intern employee ID?',
        },
        {
            type: 'input',
            name: 'internemail',
            message: 'What is the intern email?',
        },
        {
            type: 'input',
            name: 'internschool',
            message: 'What school does the intern attend?',
        },
    ]);
};

// The content that will be generated into the HTML including template literals that will be populated with the user inputs. 

const generateHTML = ({managername, managerid, manageremail, managernumber, engineername, engineerid, engineeremail, engineergithub, internname, internid, internemail, internschool}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <h1 class="display-4">My Team</h1>
    </div>
    <div class="custom-card">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${managername}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Team Manager</h6>
            <p class="card-text">Employee ID: ${managerid}</p>
            <p class="card-text">Email: ${manageremail}</p>
            <p class="card-text">Number: ${managernumber}</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineername}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <p class="card-text">Employee ID: ${engineerid}</p>
            <p class="card-text">Email: ${engineeremail}</p>
            <p class="card-text">GitHub Username: ${engineergithub}</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${internname}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <p class="card-text">Employee ID: ${internid}</p>
            <p class="card-text">Email: ${internemail}</p>
            <p class="card-text">School: ${internschool}</p>
        </div>
    </div>
    </div>
</body>
</html>
`;

// The starting function that begins the application and applies the prompt answers to the generate HTML process. 

const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();