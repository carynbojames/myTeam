// Create the team
// Input: Inquirir data, but what route
// Output: HTML file

const index = require('../index')

const generateTeam = team => {

    // Create the manager html
    const generateManager = manager => { return }

    // Create the engineer html
    const generateEngineer = engineer => {}
    // Create the intern html

    const generateIntern = intern => {}
}

    const html = []; 

    // Create logic that triggers building the HTML

    html.push(buildTeam  // html.push(variable w/ condition-filter and action-map)
        .filter(employee => employee.getRole() === 'manager')
        .map(manager => generateManager(manager)) // .map will perform the action to all constructors that are manager
    )
    
    console.log(hmtl)

// module.exports = team => {
//     return 
// }