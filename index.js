const inquirer = require('inquirer')
const fs =require('fs')
const Employee = require('./library/Employee')
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')
const Manager = require('./library/Manager')
const generateHTML = require('./generateHTML')
const path = require ("path")
const { join, dirname } = require('path')
const { writer } = require('repl')

//questions go here 
const managerQuestions =  [
  {
    type: 'input',
    message: "what is your managers name?",
    name: "name",
},
  {
    type: 'input',
    message: "what is their ID number?",
    name: "id",
},
  {
    type: 'input',
    message: "what was their work email?",
    name: "email",
},
  {
    type: 'input',
    message: "what is their office number?",
    name: "number",
},
  {
    type: "list",
    message: 'Who else is part of your team?',
    choices: ["Engineer", "Intern", "No"],
    name: "nextChoice",
},
];
const employeeQuestions =  [
  {
    type: 'input',
    message: "what is your employees name?",
    name: "name",
},
  {
    type: 'input',
    message: "what is their ID number?",
    name: "id",
},
  {
    type: 'input',
    message: "what was their work email?",
    name: "email",
},
  {
    type: "list",
    message: 'Who else is part of your team?',
    choices: ["Engineer", "Intern", "No"],
    name: "nextChoice",
},
];
const engineerQuestions =  [
  {
    type: 'input',
    message: "what is your interns name?",
    name: "name",
},
  {
    type: 'input',
    message: "what is their ID number?",
    name: "id",
},
  {
    type: 'input',
    message: "what was their work email?",
    name: "email",
},
  {
    type: 'input',
    message: "what is their Github ID?",
    name: "github",
},
  {
    type: "list",
    message: 'Who else is part of your team?',
    choices: ["Engineer", "Intern", "No"],
    name: "nextChoice",
},
];
const internQuestions =  [
  {
    type: 'input',
    message: "what is your interns name?",
    name: "name",
},
  {
    type: 'input',
    message: "what is their ID number?",
    name: "id",
},
  {
    type: 'input',
    message: "what was their work email?",
    name: "email",
},
  {
    type: 'input',
    message: "what school did they go to?",
    name: "school",
},
  {
    type: "list",
    message: 'Who else is part of your team?',
    choices: ["Engineer", "Intern", "No"],
    name: "nextChoice",
},
];


listTeam = () => {
  inquirer
    .prompt([...managerQuestions, ...employeeQuestions])
    .then((data) =>{
      team.push(new Manager(data.name, data.id, data.email, data.number));
      switch (data.nextChoice) {
        case "Engineer": {
          engineerInput();
          break;
        }
        case "Intern": {
          internInput();
          break;
        }
        case "No":
          printHtml(team);
      }
    })
    .catch((err) => console.log(err));
};

listTeam = () => {
  inquirer
    .prompt([...engineerQuestions, ...employeeQuestions])
    .then((data) =>{
      team.push(new Engineer(data.name, data.id, data.email, data.gihub));
      switch (data.nextChoice) {
        case "Engineer": {
          engineerInput();
          break;
        }
        case "Intern": {
          internInput();
          break;
        }
        case "No":
          printHtml(team);
      }
    })
    .catch((err) => console.log(err));
};

listTeam = () => {
  inquirer
    .prompt([...internQuestions, ...employeeQuestions])
    .then((data) =>{
      team.push(new Intern(data.name, data.id, data.email, data.school));
      switch (data.nextChoice) {
        case "Engineer": {
          engineerInput();
          break;
        }
        case "Intern": {
          internInput();
          break;
        }
        case "No":
          printHtml(team);
      }
    })
    .catch((err) => console.log(err));
};

//create html here
const fileExport = (fileName, data) => {
  return fs.writeFile(path.join(dirname + "/dist", fileName), data, (err) =>
    err ? console.error(err) : console.log("success!")
  );
};
printHtml = (data) => {
  fileExport("index.html", writer(data));
};

init();