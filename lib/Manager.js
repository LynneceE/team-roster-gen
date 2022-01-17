const Members = require('./Members.js')

class Manager extends Members{
    constructor(name, email, id, officeNumber){
        super(name, email, id, officeNumber);
    }

    getMember() {
        return {
            name: this.name,
            email: this.email,
            id: this.id,
            officeNumber: this.officeNumber
        };
    }
}

module.exports = Manager;