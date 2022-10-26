const Employee = require('../lib/employee.class') 

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email) 
        this.officeNum = officeNum
    }

    getOfficeNum() { return this.officeNum }

    getRole() { return "Manager" }
}

module.exports = Manager

// The subclass constructor needs to list all the input parameters