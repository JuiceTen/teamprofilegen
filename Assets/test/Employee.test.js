
const Employee = require('../employees/Employee')


describe('initizalize', () =>{

    it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
        const employee = new Employee();
        expect(employee instanceof Employee).toBe(true);
    })

    it('should retrieve name', () =>{
        const name = new Employee('george');
        expect(name.name).toBe('george')
    })

    it('should get id', ()=> {
        const employID = new Employee("", 123123);
        expect(employID.id).toEqual(123123)
    })

    it('should get email', ()=>{
        const emailEmp = new Employee("", 0,'Email@email.com');
        expect(emailEmp.email).toEqual('Email@email.com')
    })
})
describe('function testing', () => {
    it('getName funct should get employee.name', () =>{
        const newName = new Employee('George Washington','123124','email@email.com')
        newName.getName()
        expect(newName.getName()).toEqual('George Washington')
    })

    it('getID should get employee.id', () =>{
        const newID = new Employee('George Washington',123123,'email@email.com')
        newID.getID()
        expect(newID.getID()).toEqual(123123)
    })

    it('getEmail should get employee.email', ()=> {
        const newEmail = new Employee('George Washington','123124','email@email.com')
        expect(newEmail.getEmail()).toBe('email@email.com')
    })

    it('getRole should return Employee', ()=>{
        const role = new Employee('George Washington','123124','email@email.com');
        expect(role.getRole()).toBe('Employee')
    })
})