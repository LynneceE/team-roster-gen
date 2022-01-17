 // bringing in all files  for each member's input 
 
 const inquirer = require('inquirer');
 const Manager = require('./lib/Manager');
 const generateRoster = require('./src/page-template');
 const { writeFile, copyFile } = require('./utils/generate-site');


 
                  // INITIATE QUESTIONS //

promptQuestions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What's your name?"
        },

        {
            type: 'input',
            name: 'email',
            message: "What's your email address?"
        },

        {
            type: 'input',
            name: 'id',
            message: "What's your Employee ID?"
        },

        {
            type: 'input',
            name: 'office number',
            message: "What's your office number?"
        }
       
    ]).then(({ answers }) => {
        this.data = new Manager( err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: `${this.name} has been successfully added to your team!`
            })
        })

    });
    
}

const promptRoster = rosterData => {
    console.log(`
    =====================
    Add a New Team Member
    =====================
    `);

    if(!rosterData.member) {
        rosterData.member = [];
    }

    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What's your name?"
        },

        {
            type: 'input',
            name: 'email',
            message: "What's your email address?"
        },

        {
            type: 'input',
            name: 'id',
            message: "What's your Employee ID?"
        },

        {
            type: 'input',
            name: 'office number',
            message: "What's your office number?"
        },

        {
            type: 'input',
            name: 'username',
            message: "What's your Github username?"
        }
        
    ])
    .then(rosterData => {
        rosterData.member.push(rosterData);
        if (rosterData.confirmAddMember) {
            return promptRoster(rosterData);
        } else {
            return rosterData;
        }
    });
};



promptQuestions().then(promptRoster).catch(err => {
    console.log(err);
});
 