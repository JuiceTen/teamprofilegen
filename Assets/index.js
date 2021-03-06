const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./employees/Employee')
const Manager = require('./employees/Manager')
const Engineer = require('./employees/Engineer')
const Intern = require('./employees/Intern')

const employees = []

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getID();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOffice();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

function addEmployee() {
        
    inquirer
        .prompt([
            {
            type: 'list',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'employee',
            message: `What is your employee's full name`
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide a valid email address:'
        },
        {
            type: 'input',
            name: 'id',
            message: `Please Enter your employee's ID number:`
        },
        ])
        .then(function ({ name, id, email, role }) {
            console.log(name)
            let roleInfo = " ";
            switch (role) {
                case "Manager":
                    roleInfo = "What is their Office Number?";
                    break
                case "Engineer":
                    roleInfo = "What is their GitHub Username?"
                    break
                case "Intern":
                    roleInfo = "What school did they go to?"
                    break
            }
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "sideinfo",
                        message: `${roleInfo}`
                    },
                    {
                        type: "list",
                        name: "addingpeople",
                        message: "Do you want to add more team members?",
                        choices: ["yes", "no"]
                    }
                ])
                .then(function ({ sideinfo, addingpeople }) {
                    let newMember;
                    switch (role) {
                        case "Manager":
                            newMember = new Manager(name, id, email, sideinfo)
                            console.log(sideinfo)
                            break
                        case "Engineer":
                            newMember = new Engineer(name, id, email, sideinfo)
                            console.log(sideinfo)
                            break
                        case "Intern":
                            newMember = new Intern(name, id, email, sideinfo)
                            console.log(sideinfo)
                            break
                    }
                    employees.push(newMember);
                    addHtml(newMember)
                    console.log("person added")
                    setTimeout(()=>{
                        switch(addingpeople){
                        case "yes":
                            console.log('add');
                            addEmployee();
                            break
                        default:
                            console.log('end')
                            finishHtml();
                            break
                        }
                    },100)
                });
        })
}
function init() {
    startHtml()
    addEmployee()
}



init();