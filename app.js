 // bringing in all files  for each member's input 
 
 const inquirer = require('inquirer');
 const Manager = require('./lib/Manager');

const promptQuestions = () => {
    inquirer.prompt([

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


    ]);
}

promptQuestions();

 
                  