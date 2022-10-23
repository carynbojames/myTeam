const Employee = require('../lib/employee.class') 

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email) // QUESTION: What is this for? 
        this.officeNum = officeNum
    }

    getofficeNum() { return this.officeNum }

    getRole() { return "Manager" }
}

module.exports = Manager