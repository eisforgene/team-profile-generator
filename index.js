const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const inquire = require('inquirer');
const fs = require('fs');
const { exit } = require('process');
const inquirer = require('inquirer');
let managerList = [];
let internList = [];
let engineerList = [];

function startMenu() {
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
    .then(function(response){
        const newManager = new Manager('eugene',898,'eugene@gmail.com',300)
        console.log(newManager);
        managerList.push(newManager);
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
    .then(function(response){
        const newIntern = new Intern('eugene', 1001, 'eugene@gmail.com', 'ucla')
        console.log(newIntern);
        internList.push(newIntern);
    })
}

startMenu();