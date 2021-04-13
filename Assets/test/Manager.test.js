const Manager = require('../employees/Manager')


describe('initizalize', () =>{

    it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
        const manager = new Manager();
        expect(manager instanceof Manager).toBe(true);
    })

    it('should retrieve name', () =>{
        const name = new Manager('george');
        expect(name.name).toBe('george')
    })

    it('should get id', ()=> {
        const employID = new Manager("", 123123);
        expect(employID.id).toEqual(123123)
    })

    it('should get email', ()=>{
        const emailEmp = new Manager("", 0,'Email@email.com');
        expect(emailEmp.email).toEqual('Email@email.com')
    })
})
describe('function testing', () => {
    it('getName funct should get Manager.name', () =>{
        const newName = new Manager('George Washington','123124','email@email.com')
        newName.getName()
        expect(newName.getName()).toEqual('George Washington')
    })

    it('getID should get Manager.id', () =>{
        const newID = new Manager('George Washington',123123,'email@email.com')
        newID.getID()
        expect(newID.getID()).toEqual(123123)
    })

    it('getEmail should get Manager.email', ()=> {
        const newEmail = new Manager('George Washington','123124','email@email.com')
        expect(newEmail.getEmail()).toBe('email@email.com')
    })

    it('getRole should return Manager', ()=>{
        const role = new Manager('George Washington','123124','email@email.com');
        expect(role.getRole()).toBe('Manager')
    })
})