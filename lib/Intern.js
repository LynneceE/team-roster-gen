

const Members = require("./Members")

class Intern extends Members{
    constructor(name, email, id, github){
        super(name, email, id)
        this.github = github
    }

    getMember(){
        return "Intern"
    }

    getGithub(){
        return this.github
    }
}





module.exports = Intern