const inquirer = require('inquirer')
const fs =require('fs')
const Employee = require('./library/Employee')
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')
const Manager = require('./library/Manager')
const generateHTML = require('./generateHTML')

const questions =  [

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err)
          return
        }
      })
}

function init() {
    inquirer.prompt(questions).then((data) => {
    writeToFile("../Index.html", generateHTML(data));
    })
}

init();