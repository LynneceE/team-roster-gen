const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt ([

                              // INTRO INFO //

        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter your Team Manager's name!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'ID',
            message: "Please enter your Employee ID (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("You must enter your Employee ID!");
                    return false;
                }
            }
        },
        
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address",
            validate: emInput => {
                if (emInput) {
                    return true;
                } else {
                    console.log("You must enter an email address!");
                    return false; 
                }
            }
        },

        {
            type: 'input',
            name: 'office',
            message: "Please enter your office number (Required)",
            validate: offNum => {
                if (offNum) {
                    return true;
                } else {
                    console.log("You must enter your office number!");
                    return false;
                }
            }

            
        }

    ]);
};

promptUser();