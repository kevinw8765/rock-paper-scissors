console.log("Hello World");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    num = Math.random();

    if (num >= 0 && num <= 0.3) {
        return "rock";
    }
    else if (num > 0.3 && num <= 0.6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
console.log(getComputerChoice())

function getHumanChoice() {
    input = prompt("Enter your choice: ");
    return input;
}
console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
    human = humanChoice.toLowerCase();
    if (human == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore += 1;
    }
    else if(human == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper");
        humanScore += 1;
    }
    else if(human == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock");
        humanScore += 1;
    }
    else {
        console.log("You suck");
        computerScore += 1;
    }
}


function playGame() {
    for(let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame()