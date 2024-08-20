function getRandom() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let choices = ["Rock", "Peper", "Scissor"];
    return choices[getRandom()];
}