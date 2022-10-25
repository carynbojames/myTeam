function userChoice() {
    const userChoice = [
      {
        type: "list",
        name: "newTeamMember",
        message: "Would you like to add new team member?",
        choices: ["yes", "no"],
        filter(val) {
          return val.toLowerCase();
        },
      },
    ];
    inquirer.prompt(userChoice).then((data) => {
      console.log(data.newTeamMember);
      if (data.newTeamMember == "yes") {
        typeOfEmployee();
      } else writeToFile(__dirname + '/dist/myTeam.html', employees);
    });
  }