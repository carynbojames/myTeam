const Employee = require('../lib/employee.class');
const Engineer = require('../lib/engineer.class')

describe('Engineer', () => {
    it('Should create an instance of the engineer employee', () => {
        const newEmp = new Engineer();
        expect(typeof newEmp).toEqual('object')
    })

    it('Should set the Github username via constructor arguments', () => {
        const testValue = 'github';
        const newEmp = new Engineer("", "", "", testValue);
        expect(newEmp.github).toEqual(testValue)
    })

    it('Should get the name via getGithub()', () => {
        const testValue = 'github'
        const newEmp = new Engineer("", "", "", testValue)
        const testResult = newEmp.getGithub()
        expect(testValue).toEqual(testResult)
    })

    it('Should get "engineer" via getRole()', () => {
        const testValue = 'engineer'
        const newEmp = new Employee()
        const testResult = newEmp.getRole()
        expect(testValue).toEqual('engineer')
    })
})