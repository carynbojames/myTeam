const Intern = require('../lib/intern.class')

describe ('Intern', () => {
    it('Should create an instance of the class intern', () => {
        const newEmp = new Intern(); 
        expect(typeof newEmp).toEqual('object')
    })

    it('Should set the school via constructor argument', () => {
        const testValue = 'MSU'
        const newEmp = new Intern("", "", "", testValue)
        expect(newEmp.school).toEqual(testValue)
    })

    it('Should get school via getSchool()', () => {
        const testValue = 'MSU'
        const newEmp = new Intern("", "", "", testValue)
        const testResult = newEmp.getSchool()
        expect(testValue).toEqual(testResult)
    })

    it('Should get "intern" via getRole()', () => {
        const testValue = 'intern'
        const newEmp = new Intern()
        const testResult = newEmp.getRole()
        expect(testValue).toEqual('intern')
    })
})