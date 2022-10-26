const Employee = require('../lib/employee.class') 

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email) // QUESTION: What is this for? 
        this.officeNum = officeNum
    }

    getOfficeNum() { return this.officeNum }

    getRole() { return "Manager" }
}

module.exports = Manager

// The subclass constructor needs to list all the input parameters.
// Some of the input parameter values are 