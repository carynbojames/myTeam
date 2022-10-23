const Employee = require('../lib/employee.class') 

class Manager extends Employee {
    constructor(officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
    }

    getofficeNum() { return this.officeNum }

    getRole() { return "Manager" }
}

module.exports = Manager