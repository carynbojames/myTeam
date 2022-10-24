const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/manager.class')
const Engineer = require('./lib/engineer.class')
const Intern = require('./lib/intern.class')
// const Employee = require('./lib/employee.class')
// ^ "Employee" not required because it gets referenced via other pages

let buildTeamRaw = []; 
let buildTeam = []; 
// The type of parameters aren't going to change so const could be used instead of let

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
                // Create object with respones as the input parameters
                const manager = new Manager(
                    response.name,
                    response.id,
                    response.email,
                    response.office) 
                // Push new object into an array 
                buildTeamRaw.push(response); 
                buildTeam.push(manager); 
                console.log(response)
                console.log('Build Team Raw', buildTeamRaw)
                console.log('Build Team', buildTeam)
                console.log('Get Name:', manager.getName())
                console.log('Office Number -', manager.getofficeNum())
                // Ask if additional team member should be included
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
                    name: 'name'
                },
                {
                    type: 'input',
                    message: "Enter the engineer's ID",
                    name: 'id'
                },
                {
                    type: 'input',
                    message: "Enter the engineer's email",
                    name: 'email'
                },
                {
                    type: 'input',
                    message: "Enter the engineer's gitHub username",
                    name: 'github'
                }
            ])
            .then((response) => {
                const engineer = new Engineer(
                    response.name,
                    response.id,
                    response.email,
                    response.github)
                buildTeamRaw.push(response)
                buildTeam.push(engineer) 
                console.log('Build Team Raw', buildTeamRaw)
                console.log('Build Team', buildTeam)
                // The engineer variable gets rewritten and pushed to the object array
                createTeam()
            })
    }

    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Enter the intern's name",
                    name: 'name'
                },
                {
                    type: 'input', 
                    message: "Enter the intern's ID", 
                    name: 'id'
                },
                {
                    type: 'input',
                    message: "Enter the intern's email",
                    name: 'email'
                },
                {
                    type: 'input', 
                    message: "Enter the intern's school",
                    name: 'school'
                }
            ])
            .then((response) => {
                const intern = new Intern(
                    response.name,
                    response.id,
                    response.email,
                    response.school)
                buildTeam.push(intern)
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

// module.exports = buildTeam; 