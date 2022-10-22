class Employee {
    constructor(name, id, email) {
        this.name = name, 
        this.id = id,
        this.email = email
    }
     
    getName()
    getId()
    getEmail()
    getRole()
}
module.exports = Employee; 

// consider putting this in a different file and requiring it
// const Employee = requrie('') 

class Engineer extends Employee {
    constructor(githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername
    }

    getGithub()
    getRole()
}

class Intern extends Employee {
    constructor(school) {
        super(name, id, email); 
        this.school = school
    }

    getSchool()
    getRole()
}