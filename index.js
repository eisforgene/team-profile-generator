const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const inquire = require('inquire');
const fs = require('fs');
const { exit } = require('process');

function startmenu() {
    inquire.prompt([
        {
            type: 'list',
            name:"entry",
            message: 'what would you like to do?',
            choices: ['add manager', 'add intern', 'add engineer', 'exit application']
        }
    ])
    .then(function(response){
        switch(response.entry){
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

