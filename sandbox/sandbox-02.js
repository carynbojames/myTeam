const Manager = require('../lib/manager.class')
const Engineer = require('../lib/engineer.class')

const manager = new Manager('caryn','1', 'caryn@gmail.com','23')
const engineer01 = new Engineer('stephanie', '2', 'stephanie@email.com','steph')
const engineer02 = new Engineer('mike', '2', 'mike@gmail.com', 'michael')

const team = []
team.push(manager)
team.push(engineer01)
team.push(engineer02)

console.log('Team:', team)

   
let teamTestManager = team.filter(anyname => anyname.getRole() === 'Manager')
console.log('Filter: Manager -', teamTestManager)

let teamTestEngineer = team.filter(anyname => anyname.getRole() === 'Engineer')
console.log('Filter: Engineer -', teamTestEngineer)


// OBSERVATION: It gave an error when I tried to name bot of the functions the same thing


// html.push(buildTeam  // html.push(variable w/ condition-filter and action-map)
//         .filter(employee => employee.getRole() === 'manager')
//         .map(manager => generateManager(manager)) // .map will perform the action to all constructors that are manager
//         .join('')
//     )
    