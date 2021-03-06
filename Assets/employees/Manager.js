const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, office){        
        super()
        this.name = name
        this.id = id
        this.email = email
        this.office = office

    }
    getOffice() {
        return this.office
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager