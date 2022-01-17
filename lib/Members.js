class Members {
    constructor(name = '', id = '', email = '', github = '', officeNumber = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.officeNumber = officeNumber;
    }

    getMember() {
        return `${this.name} has been added to your team.`
    }
}

module.exports = Members;