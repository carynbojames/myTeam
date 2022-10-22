class Employee {
    constructor(name, id, email) {
        this.name = name, 
        this.id = id,
        this.email = email
    }
     
    getName() { return this.name }

    getId() { return this.id }

    getEmail() {return this.email }

    getRole() {}
}

const testValue = 'Caryn'; // 
const newEmp = new Employee(testValue)
console.log(newEmp)
console.log(typeof newEmp)

module.exports = Employee; 