// Create the team in HTML
// Input: Inquirir data, but how does it get there? 
// Output: HTML file

const generateTeam = teamBuild => {
    console.log('Generate Team', teamBuild)

    // Create the manager html
    const generateManager = manager => { 
        return `<div class="card">
            <div class="card-header bg-warning">
                <p>Manager</p>
                <p>${manager.getName()}</p>
            </div>
            <div class="card-body bg-light">
                <p>ID: ${manager.getId()}</p> 
                <p>Email: ${manager.getEmail()}</p>
                <p>Office Number: ${manager.getOfficeNum()}</p>
            </div>
        </div>`
    }

    // Create the engineer html
    const generateEngineer = engineer => {
        return `<div class="card">
        <div class="card-header bg-warning">
            <p>Engineer</p>
            <p>${engineer.getName()}</p>
        </div>
        <div class="card-body bg-light">
            <p>ID: ${engineer.getId()}</p> 
            <p>Email: ${engineer.getEmail()}</p>
            <p>Github: ${engineer.getGithub()}</p>
        </div>
    </div>`
    }

    // Create the intern html
    const generateIntern = intern => {
        return `<div class="card">
        <div class="card-header bg-warning">
            <p>Intern</p>
            <p>${intern.getName()}</p>
        </div>
        <div class="card-body bg-light">
            <p>ID: ${intern.getId()}</p> 
            <p>Email: ${intern.getEmail()}</p>
            <p>Github: ${intern.getSchool()}</p>
        </div>
    </div>`
    }


    const html = []; 

    // Create logic that triggers building the HTML

    html.push(teamBuild  // html.push(variable w/ condition-filter and action-map)
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager)) // .map will perform the action to all constructors that are manager
    )

    html.push(teamBuild
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer)) // Can this be anything?
    )

    html.push(teamBuild
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))    
    )
 
    console.log('html', html)

    return html.join("")
}

// Pass this to the 
module.exports = teamBuild => {  
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${generateTeam(teamBuild)}
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script> 
    </body>
    </html>`
}