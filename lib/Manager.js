

const Members = require("./Members")

class Manager extends Members{
    constructor(name, email, id, github){
        super(name, email, id)
        this.number = number
    }

    getMember(){
        return "Team Manager"
    }

    getOfficeNumber(){
        return this.number
    }
}





module.exports = Manager