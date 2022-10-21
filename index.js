const inquirer = require('inquirer');

function init() {
    function createManager() {
        inquirer
            // Get the data
            .prompt([
                {
                    type: 'input',
                    message: "Enter the team manager's name",
                    name: 'managerName'
                },
                {
                    type: 'input',
                    message: "Enter the team manager's employee ID",
                    name: 'managerId'
                },
                {
                    type: 'input',
                    message: "Enter the team manager's email address",
                    name: 'managerEmail'
                },
                {
                    type: 'input',
                    message: "Enter the team manager's office number",
                    name: 'managerOfficeNum'
                }
            ])
            .then((response) => 
                console.log('Manager', response),
                // Do I create the constructor here?
                createTeam()
            )
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
    //             if (response.build == 'Add an engineer') {
    //                 addEngineer()
    //             } else if (response.build == 'Add an intern') {
    //                 addIntern()
    //             } else {buildTeam()}
            })    
    }

    // function addEngineer() {
    //     inquirer
    //         .prompt([
    //             {
    //                 type: 'input',
    //                 message: "Enter the engineer's name",
    //                 name: 'engineerName'
    //             },
    //             {
    //                 type: 'input',
    //                 message: "Enter the engineer's ID",
    //                 name: 'engineerId'
    //             },
    //             {
    //                 type: 'input',
    //                 message: "Enter the engineer's email",
    //                 name: 'engineerEmail'
    //             },
    //             {
    //                 type: 'input',
    //                 message: "Enter the engineer's gitHub username",
    //                 name: 'engineerUsername'
    //             }
    //         ])
    //         .then((response) =>
    //             console.log('Engineer', response)
    //             createTeam()
    //         )
    // }

    // function addIntern()

    // function buildTeam()

    createManager()
}

init()