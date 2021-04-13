const Engineer = require('../employees/Engineer')


describe('initizalize', () =>{

    it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
        const engineer = new Engineer();
        expect(engineer instanceof Engineer).toBe(true);
    })

    it('should retrieve name', () =>{
        const name = new Engineer('george');
        expect(name.name).toBe('george')
    })

    it('should get id', ()=> {
        const employID = new Engineer("", 123123);
        expect(employID.id).toEqual(123123)
    })

    it('should get email', ()=>{
        const emailEmp = new Engineer("", 0,'Email@email.com');
        expect(emailEmp.email).toEqual('Email@email.com')
    })

    it('should get github', ()=>{
        const github = new Engineer("", 0,'Email@email.com', 'githubuser');
        expect(github.github).toEqual('githubuser')
    })
})
describe('function testing', () => {
    it('getName funct should get Engineer.name', () =>{
        const newName = new Engineer('George Washington','123124','email@email.com')
        newName.getName()
        expect(newName.getName()).toEqual('George Washington')
    })

    it('getID should get Engineer.id', () =>{
        const newID = new Engineer('George Washington',123123,'email@email.com')
        newID.getID()
        expect(newID.getID()).toEqual(123123)
    })

    it('getEmail should get Engineer.email', ()=> {
        const newEmail = new Engineer('George Washington','123124','email@email.com')
        expect(newEmail.getEmail()).toBe('email@email.com')
    })

    it('getGitHub should get Github username', () => {
        const github = new Engineer('George Washington','123124','email@email.com', 'githubuser')
        expect(github.getGithub()).toBe('githubuser')
    })

    it('getRole should return Engineer', ()=>{
        const role = new Engineer('George Washington','123124','email@email.com');
        expect(role.getRole()).toBe('Engineer')
    })
})