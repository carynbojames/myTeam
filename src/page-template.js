// Create the team in HTML
// Input: Inquirir data, but how does it get there? 
// Output: HTML file

const generateTeam = teamBuild => {
    console.log('Generate Team', teamBuild)

    // Create the manager html
    const generateManager = manager => { 
        return `        
        <div class="col-12 col-sm-4 col-lg-3 my-2">
            <div class="card border-secondary mb-3 shadow-lg" style="max-width: 18rem;">
                <div class="card-header pb-1">
                    <h4>Manager</h4>
                    <p>${manager.getName()}</p>
                </div>
                <div class="card-body text-secondary">
                    <p class="card-text">ID: ${manager.getId()}</p> 
                    <p class="card-text">Email: ${manager.getEmail()}</p>
                    <p class="card-text">Office Number: ${manager.getOfficeNum()}</p>
                </div>
            </div>
        </div>`
    }

    // Create the engineer html
    const generateEngineer = engineer => {
        return `    
            <div class="col-12 col-sm-4 col-lg-3 my-2">
                <div class="card border-secondary mb-3 shadow-lg" style="max-width: 18rem;">
                    <div class="card-header pb-1">
                        <h4>Engineer</h4>
                        <p>${engineer.getName()}</p>
                    </div>
                    <div class="card-body text-secondary">
                        <p class="card-text">ID: ${engineer.getId()}</p> 
                        <p class="card-text">Email: ${engineer.getEmail()}</p>
                        <p class="card-text">Github Username: ${engineer.getGithub()}</p>
                    </div>
                </div>
            </div>`
    }

    // Create the intern html
    const generateIntern = intern => {
        return `
            <div class="col-12 col-sm-4 col-lg-3 my-2">
                <div class="card border-secondary mb-3 shadow-lg" style="max-width: 18rem;">
                    <div class="card-header pb-1">
                        <h4>Intern</h4>
                        <p>${intern.getName()}</p>
                    </div>
                    <div class="card-body text-secondary">
                        <p class="card-text">ID: ${intern.getId()}</p> 
                        <p class="card-text">Email: ${intern.getEmail()}</p>
                        <p class="card-text">School: ${intern.getSchool()}</p>
                    </div>
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
    return html.join("")  // join gets rid of the 
}

// Pass this to the index file
module.exports = teamBuild => {  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>My Team Draft</title>
    </head>
    <body>
        <header class="bg-dark text-light text-center p-4 mb-4">
            <h2>My Team</h2>
        </header>
        <section class='container'>
            <div class="row justify-content-start">
                ${generateTeam(teamBuild)}
            </div>
            </section>
        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
    </html>`
}