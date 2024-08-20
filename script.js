function getRandom() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let choices = ["Rock", "Peper", "Scissor"];
    return choices[getRandom()].toUpperCase();
}

function getHumanChoice() {
    let choices = ["ROCK", "PEPER", "SCISSORS"];
    let choice;

    do {
        choice = prompt('Please choose one: "ROCK", "PEPER", "SCISSORS"');
        if (choice !== null) {
            choice = choice.toUpperCase();
        }
    } while (!choices.includes(choice.toUpperCase()));

    return choice;
}