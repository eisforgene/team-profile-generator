// DEPENDENCIES
// ==================================
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

const inquire = require('inquirer');
const fs = require('fs');
const { exit } = require('process');
const inquirer = require('inquirer');

let managerList = [];
let internList = [];
let engineerList = [];

// FUNCTIONS
// ==================================
function startMenu() {
    inquire.prompt([
        {
            type: 'list',
            name: "entry",
            message: 'what would you like to do?',
            choices: ['add manager', 'add intern', 'add engineer', 'exit application']
        }
    ])
        .then(function (response) {
            switch (response.entry) {
                case 'add manager':
                    addManager();
                    break;
                case 'add intern':
                    addIntern();
                    break;
                case 'add engineer':
                    addEngineer();
                    break;
                case 'exit application':
                    exitApp();
                    break;
            }
        })
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'enter employee name',
            name: 'empname'
        },
        {
            type: 'input',
            message: 'enter employee id',
            name: 'empid'
        },
        {
            type: 'input',
            message: 'enter employee email',
            name: 'empemail'
        },
        {
            type: 'input',
            message: 'enter office number',
            name: 'empoffice'
        }
    ])
        .then(function (response) {
            const newManager = new Manager(response.empname, response.empid, response.empemail, response.empoffice)
            console.log(newManager);
            managerList.push(newManager);
            startMenu();
        })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'enter intern name',
            name: 'intname'
        },
        {
            type: 'input',
            message: 'enter intern id',
            name: 'intid'
        },
        {
            type: 'input',
            message: 'enter intern email',
            name: 'intemail'
        },
        {
            type: 'input',
            message: 'enter intern school',
            name: 'intschool'
        }
    ])
        .then(function (response) {
            const newIntern = new Intern(response.intname, response.intid, response.intemail, response.intschool)
            console.log(newIntern);
            internList.push(newIntern);
            startMenu();
        })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'enter engineer name',
            name: 'engname'
        },
        {
            type: 'input',
            message: 'enter engineer id',
            name: 'engid'
        },
        {
            type: 'input',
            message: 'enter engineer email',
            name: 'engemail'
        },
        {
            type: 'input',
            message: 'enter engineer github',
            name: 'enggithub'
        }
    ])
        .then(function (response) {
            const newEngineer = new Engineer(response.engname, response.engid, response.engemail, response.enggithub)
            console.log(newEngineer);
            engineerList.push(newEngineer);
            startMenu();
        })
}

function createTeam() {
    fs.writeFile('./dist/team.html', formattedHTML, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Success!');
        }
    });
}

function exitApp() {
    console.log(managerList,internList,engineerList)
    var openHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" href="../dist/style.css">
        <title>My Team</title>
    </head>
    <body>
    
        <section class="hero has-text-centered has-background-danger-dark margin-bottom">
            <div class="hero-body">
                <h1 class="title has-text-white">My Team</h1>
            </div>
        </section>
        
        <section class="columns">`

    var closingHTML = `    
    </section>
    </body>
    </html> `

    var managerHTML = ``
    for (let i = 0; i < managerList.length ; i++) {
        managerHTML += `
        <div class="column is-one-fourth">
        <div class="content has-background-info is-marginless">
            <h2 class="title has-text-white">${managerList[i].name}</h2>
        <h4 class="subtitle has-text-white">
            <span class="icon">
                <i class="fas fa-mug-hot"></i>
            </span>
        Manager
        </h4>
        </div>
        <section>
            <div class="tile is-12">
                id: ${managerList[i].id}
            </div>
            <div class="tile is-12">
                email:&nbsp; <a href="mailto:email: ${managerList[i].email}">${managerList[i].email}</a>
            </div>
            <div class="tile is-12">
                office number: ${managerList[i].officeNumber}
            </div>
        </section>
    </div>`
     }
     var engineerHTML = ``
     for (let i = 0; i < engineerList.length ; i++) {
        engineerHTML += `
        <div class="column is-one-fourth">
            <div class="content has-background-info is-marginless">
                <h2 class="title has-text-white">${engineerList[i].name}</h2>
                <h4 class="subtitle has-text-white">
                    <span class="icon">
                        <i class="fas fa-glasses"></i>
                    </span>
                Engineer
                </h4>
            </div>
            <section>
                <div class="tile is-12">
                    id: ${engineerList[i].id}
                </div>
                <div class="tile is-12">
                    email:&nbsp; <a href="mailto:email: ${engineerList[i].email}">${engineerList[i].name}</a>
                </div>
                <div class="tile is-12">
                    github:&nbsp; <a href="https://github.com/${engineerList[i].github}">${engineerList[i].github}</a>
                </div>
            </section>
        </div>`
     }
     var internHTML = ``
     for (let i = 0; i < internList.length ; i++) {
        internHTML += `
       <div class="column is-one-fourth">
            <div class="content has-background-info is-marginless">
                <h2 class="title has-text-white">${internList[i].name}</h2>
                <h4 class="subtitle has-text-white">
                    <span>
                        <i class="fas fa-user-graduate"></i>
                    </span>
                Intern
                </h4>
            </div>
            <section>
                <div class="tile is-12">
                    id: ${internList[i].id}
                </div>
                <div class="tile is-12">
                    email:&nbsp; <a href="mailto:email: ${internList[i].email}">${internList[i].email}</a>
                </div>
                <div class="tile is-12">
                    school: ${internList[i].school}
                </div>
            </section>
        </div>`
     }
     var htmlContent = openHTML + managerHTML + engineerHTML + internHTML + closingHTML;
     console.log(htmlContent)
     fs.writeFile("./src/output.html", htmlContent, function(err,data) {
         if(err) throw err;
         console.log(data)
         console.log("HTML generated",htmlContent);

     })
}

startMenu();