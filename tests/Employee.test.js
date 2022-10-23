const Employee = require('../lib/employee.class')

describe ('Employee', () => {
    it('Should create an instance of the class employee', () => {
        // Test to see if it returns an object
        const newEmp = new Employee();
        expect(typeof newEmp).toEqual('object'); 
    })

    it('Should set the name via constructor arguments', () => {
        const testValue = 'Jane'; // 
        const newEmp = new Employee(testValue);
        expect(newEmp.name).toEqual(testValue);
    })

    it('Should set the id via constructor arguments', () => {
        const testValue = '1';
        const newEmp = new Employee("", testValue);
        expect(newEmp.id).toEqual(testValue);
    })

    it('Should set the email via constructor arguments', () => {
        const testValue = 'jane@email.com'
        const newEmp = new Employee("", "", testValue)
        expect(newEmp.email).toEqual(testValue)
    })

    it('Should get name via getName()', () => {
        const testValue = 'Jane'
        const newEmp = new Employee(testValue);
        const testResult = newEmp.getName()
        expect(testValue).toEqual(testResult)
    })

    it('Should get id via getId()', () => {
        const testValue = '1'
        const newEmp = new Employee('', testValue)
        const testResult = newEmp.getId()
        expect(testValue).toEqual(testResult)
    })

    it('Should get email via getEmail()', () => {
        const testValue = 'jane@email.com'
        const newEmp = new Employee('', '', testValue)
        const testResult = newEmp.getEmail()
        expect(testValue).toEqual(testResult)
    })

    it('Should get "employee" via getRole()', () => {
        const testValue = 'employee'
        const newEmp = new Employee()
        const testResult = newEmp.getRole()
        expect(testValue).toEqual('employee')        
    })
})