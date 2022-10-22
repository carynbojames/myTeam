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