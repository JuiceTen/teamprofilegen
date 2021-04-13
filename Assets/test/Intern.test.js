const Intern = require('../employees/Intern')


describe('initizalize', () =>{

    it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
        const intern = new Intern();
        expect(intern instanceof Intern).toBe(true);
    })

    it('should retrieve name', () =>{
        const name = new Intern('george');
        expect(name.name).toBe('george')
    })

    it('should get id', ()=> {
        const employID = new Intern("", 123123);
        expect(employID.id).toEqual(123123)
    })

    it('should get email', ()=>{
        const emailEmp = new Intern("", 0,'Email@email.com');
        expect(emailEmp.email).toEqual('Email@email.com')
    })

    it('should get school', () => {
        const school = new Intern("", 0, "", "schoolHS")
        expect(school.school).toBe('schoolHS')
    })
})
describe('function testing', () => {
    it('getName funct should get Intern.name', () =>{
        const newName = new Intern('George Washington','123124','email@email.com')
        newName.getName()
        expect(newName.getName()).toEqual('George Washington')
    })

    it('getID should get Intern.id', () =>{
        const newID = new Intern('George Washington',123123,'email@email.com')
        newID.getID()
        expect(newID.getID()).toEqual(123123)
    })

    it('getEmail should get Intern.email', ()=> {
        const newEmail = new Intern('George Washington','123124','email@email.com')
        expect(newEmail.getEmail()).toBe('email@email.com')
    })

    it('getSchool should get this.school', () => {
        const school = new Intern('George Washington','123124','email@email.com', 'schoolHS')
        expect(school.getSchool()).toBe('schoolHS')
    })

    it('getRole should return Intern', ()=>{
        const role = new Intern('George Washington','123124','email@email.com');
        expect(role.getRole()).toBe('Intern')
    })
})