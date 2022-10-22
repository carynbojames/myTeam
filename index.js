const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require('./lib/employee.class')

let buildTeam = []; 

function init() {
    function createManager() {
        inquirer
            // Get the data
            .prompt([
                {
                    type: 'input',
                    message: "Enter the team manager's name",
                    name: 'name'
                },
                {
                    type: 'input',
                    message: "Enter the team manager's employee ID",
                    name: 'id'
                },
                {
                    type: 'input',
                    message: "Enter the team manager's email address",
                    name: 'email'
                },
                {
                    type: 'input',
                    message: "Enter the team manager's office number",
                    name: 'office'
                }
            ])
            .then((response) => {
                console.log('Manager', response)
                // Create object with input
                const manager = new Employee(
                    response.name,
                    response.id,
                    response.email,
                    response.office) 
                buildTeam.push(response); 
                console.log('ManagerArray', buildTeam)
                createTeam()               
            })
    }

    function createTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Do you want to build your team out',
                    choices: ['Add an engineer', 'Add an intern', 'No additional members'], 
                    name: 'build'
                }
            ])
            .then((response) => {
                console.log('Create Team', response)
                if (response.build == 'Add an engineer') {
                    addEngineer()
                } else if (response.build == 'Add an intern') {
                    addIntern()
                // } else {console.log("End")}
                } else {exportTeam()} 
            })   
    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Enter the engineer's name",
                    name: 'engineerName'
                },
                {
                    type: 'input',
                    message: "Enter the engineer's ID",
                    name: 'engineerId'
                },
                {
                    type: 'input',
                    message: "Enter the engineer's email",
                    name: 'engineerEmail'
                },
                {
                    type: 'input',
                    message: "Enter the engineer's gitHub username",
                    name: 'engineerUsername'
                }
            ])
            .then((response) => {
                console.log('Engineer', response)
                buildTeam.push(response)
                console.log('EngineerArry', buildTeam)
                createTeam()

            })
    }

    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Enter the intern's name",
                    name: 'internName'
                },
                {
                    type: 'input', 
                    message: "Enter the intern's ID", 
                    name: 'internId'
                },
                {
                    type: 'input',
                    message: "Enter the intern's email",
                    name: 'internEmail'
                },
                {
                    type: 'input', 
                    message: "Enter the intern's school",
                    name: 'internSchool'
                }
            ])
            .then((response) => {
                console.log('Intern', response)
                buildTeam.push(response)
                console.log('InternArray', buildTeam)
                createTeam()
            })
    }

    // Reference 09-NodeJs > 01 > 20 Stu_Inquirer-Users
    function exportTeam() {
        // fs.writeFile()
    }
    
    createManager()
}

init()