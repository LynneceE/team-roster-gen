// data input for engineer object is created here

const Members = require("./Members")

class Engineer extends Members{
    constructor(name = '', email = '', id = '', github = ''){
        super(name, email, id)
        this.github = github
    }

    getMember(){
        return "Engineer"
    }

    getGithub(){
        return this.github
    }
}





module.exports = Engineer