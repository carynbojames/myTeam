// Create the team in HTML
// Input: Inquirir data, but how does it get there? 
// Output: HTML file

const generateTeam = teamBuild => {
    // console.log('Generate Team', buildTeam)

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
    // const generateEngineer = engineer => {}

    // Create the intern html
    // const generateIntern = intern => {}


    const html = []; 

    // Create logic that triggers building the HTML

    html.push(teamBuild  
        .filter(employee => employee.getRole() === 'manager')
        .map(manager => generateManager(manager)) // .map will perform the action to all constructors that are manager
    )
    // html.push(variable w/ condition-filter and action-map)

    console.log('html', html)
    // return html.join("")
}


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