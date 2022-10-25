const Manager = require('../lib/manager.class')

describe('Manager', () => {
    it('Should create an instance of the class manager', () => {
        const newEmp = new Manager()
        expect(typeof newEmp).toEqual('object')
    })

    it('Should set the office number via constructor arguments', () => {
        const testValue = '23'
        const newEmp = new Manager("", "", "", testValue)
        expect(newEmp.officeNum).toEqual(testValue)
    })

    it('Should get school via getOfficeNum()', () => {
        const testValue = '23'
        const newEmp = new Manager("", "", "", testValue)
        const testResult = newEmp.getOfficeNum()
        expect(testValue).toEqual(testResult)
    })

    it('Should get "manager" via getRole()', () => {
        const testValue = 'manager'
        const newEmp = new Manager()
        const testResult = newEmp.getRole()
        expect(testValue).toEqual('manager')
    })
})