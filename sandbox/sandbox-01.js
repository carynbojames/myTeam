// TEST: Push an object to array. Create an array of objects
let test = [];
let emptyVar 

let manager = {
    name: 'caryn',
    email: 'caryn@email.com',
    office: '1'
}

test.push(manager)
console.log('array w/ one object:', test)


// TEST: Push a second object to the array
let employee = {
    name: 'stephanie', 
    email: 'steph@email.com',
    gitHub: 'steph.github'
}

test.push(employee)
console.log('array w/ two objects', test)


// QUESTION: What does the array return as the type of data it is? 
console.log('array type', typeof test) // object


// QUESTION: Does the original variable need to be stated as an empty array?
// emptyVar.push(manager) -- Error received
// emptyVar.push(employee)
console.log('empty varaible:', emptyVar) // emptyVar is undefined


// QUESTION: Can an array be a mix of different types of data? 


// TEST: Constructor added to an array. 
// QUESTION: How is an object versus a constructor/class added to an array different?
let team = []

class Employee {
    constructor(name, id, email) {
        this.name = name, 
        this.id = id,
        this.email = email
    }
}

class Engineer {
    constructor(name, school) {
        this.name = name
        this.school = school
    }
}

let employee01 = new Employee('caryn', '1', 'caryn@gmail.com')
let employee02 = new Employee('michael', '2', 'mike@gmail.com')
let engineer = new Engineer('stephanie', 'MSU')

team.push(employee01)
team.push(employee02)
team.push(engineer)
console.log('Constructor Array', team)
console.log('Type Of', typeof team) // object

// Constructor Array - Team
// [ Employee {name: 'caryn', id: '1', email: 'caryn@gmail.com' },
//   Engineer {name: 'stephanie', school: 'MSU' } ]
// OBSERVATION-01: It includes the constructor name
// OBSERVATION-02: The elements of the object can be different 



