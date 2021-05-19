const inquirer = require('inquirer')
const fs =require('fs')
const Employee = require('./library/Employee')
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')
const Manager = require('./library/Manager')
const writeHTML = require('./generateHTML')
const path = require ("path")
const { join, dirname } = require('path')
const { writer } = require('repl')
const team = []

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
    message: "what is your Engineer's name?",
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


listTeamManager = () => {
  inquirer
    .prompt([...managerQuestions, ...employeeQuestions])
    .then((data) =>{
      const manager = new Manager(data.name, data.id, data.email, data.number);
      team.push(manager);
      console.log(manager)
      switch (data.nextChoice) {
        case "Engineer": {
          listTeamEngineer();
          break;
        }
        case "Intern": {
          listTeamIntern();
          break;
        }
        case "No":
          printHtml(team);
          
      }
    
    })
    .catch((err) => console.log(err));
};

listTeamEngineer = () => {
  inquirer
    .prompt([...engineerQuestions, ...employeeQuestions])
    .then((data) =>{
      const engineer = new Engineer(data.name, data.id, data.email, data.github);
      team.push(engineer);
      switch (data.nextChoice) {
        case "Engineer": {
          listTeamEngineer();
          break;
        }
        case "Intern": {
          listTeamIntern();
          break;
        }
        case "No":
          printHtml(team);
      }
    })
    .catch((err) => console.log(err));
};

listTeamIntern = () => {
  inquirer
    .prompt([...internQuestions, ...employeeQuestions])
    .then((data) =>{
      const intern = new Intern(data.name, data.id, data.email, data.school);
      team.push(intern);
      switch (data.nextChoice) {
        case "Engineer": {
          listTeamEngineer();
          break;
        }
        case "Intern": {
          listTeamIntern();
          break;
        }
        case "No":
          printHtml(team);
      }
    })
    .catch((err) => console.log(err));
};

//create html here
//this code is incomplete somewhere. it will generate html but will spit out errors. if no errors no html???


const fileExport = (fileName, data) => {
  return fs.writeFile("./dist/index.html", data, (err) =>
    err ? console.error(err) : console.log("success!")
  );
};
printHtml = (data) => {
  fileExport("index.html", writer(data));
};

listTeamManager();