const Manager = require('../lib/manager.class')

describe('Manager', () => {
    it('Should create an instance of the class manager', () => {
        const newEmp = new Manager()
        expect(typeof Manager).toEqual('object')
    })

    it('Should set the office number via constructor arguments', () => {
        
    })
})