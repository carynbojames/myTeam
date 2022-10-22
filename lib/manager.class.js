function Manager (name, id, email, room) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.room = room;
}

const person = new Manager('caryn', '1', 'caryn@gmail.com', '5')
console.log(person)
console.log(person.name)
console.log(person.room)

// There will only be one manager card
// Engineer + Interns can have multiple elements
// Create an array that builds the HTML tha is separate for each
