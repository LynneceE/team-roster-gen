 const inquirer = require('inquirer');
 const Engineer = require('./lib/Engineer');

 

const promptUser = () => {
    return inquirer.prompt ([

                              // INTRO DATA INPUT //

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
            name: 'id',
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

                       
                               // ADDING A NEW TEAM MEMBER //



const promptTeam = () => {
    console.log(`
    =====================
    Add a New Team Member
    =====================
    `);

                               // GIVE USER OPTIONS TO ADD EITHER AN INTERN OR AN ENGINEER //
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'members',
            message: "Which member would you like to add? (Select only ONE)",
            choices: ['Engineer', 'Intern', 'Finish building my team']
        },

    ]);
};   


 

       
    

promptUser().then(promptTeam); 