const Employee = require('../lib/employee.class')

describe ('Employee', () => {
    it('Should create an instance of the class employee', () => {
        // Test to see if it returns an object
        const newEmp = new Employee();
        expect(typeof newEmp).toEqual('object'); 
    })

    it('Should set the name via constructor arguments', () => {
        const testValue = 'Caryn'; // 
        const newEmp = new Employee(testValue);
        expect(newEmp.name).toEqual(testValue);
    })

    it('Should set the id via constructor arguments', () => {
        const testValue = '1';
        const newEmp = new Employee("", testValue);
        expect(newEmp.id).toEqual(testValue);
    })
})