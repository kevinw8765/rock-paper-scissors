console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
let ties = 0;
let won5 = false;

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

function getHumanChoice() {
    input = prompt("Enter your choice: ");
    return input;
}

function playRound(humanChoice) {
    human = humanChoice.toLowerCase();
    cc = getComputerChoice();

    if (winGame()) 
    {
        wait( );
        window.location.reload();
    }
    if (human == "rock" && cc == "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore += 1;
        score1.textContent = "Player: " + humanScore;
    }
    else if(human == "scissors" && cc == "paper") {
        console.log("You win! Scissors beats paper");
        humanScore += 1;
        score1.textContent = "Player: " + humanScore;
    }
    else if(human == "paper" && cc == "rock") {
        console.log("You win! Paper beats rock");
        humanScore += 1;
        score1.textContent = "Player: " + humanScore;
    }
    else if(human == cc)
    {
        console.log("Tie!");
        ties += 1;
        tieAmt.textContent = "Ties: " + ties;
    }
    else {
        computerScore += 1;
        score2.textContent = "Computer: " + computerScore;
    }

   
}

rock = document.querySelector(".rock");
scissors = document.querySelector(".scissors");
paper = document.querySelector(".paper");

rock.addEventListener("click", () => {
    plrSelection = "rock";
    playRound(plrSelection);
});

scissors.addEventListener("click", () => {
    plrSelection = "scissors";
    playRound(plrSelection);
});


paper.addEventListener("click", () => {
    plrSelection = "paper";
    playRound(plrSelection);
});

divi = document.createElement("div");
score1 = document.createElement("p");
score2 = document.createElement("p");
tieAmt = document.createElement("p");

divi.appendChild(score1);
divi.appendChild(score2);
divi.appendChild(tieAmt);

container = document.querySelector(".container");
container.appendChild(divi);

divi2 = document.createElement("div");
msg = document.createElement("p");
againbtn = document.createElement("button");

divi2.append(msg);
divi2.append(againbtn);
container.append(divi2);



function winGame() {

    if(humanScore == 5)
    {   
        msg.textContent = "Player wins!";
        return true;
    }
    else if(computerScore == 5)
    {  
        msg.textContent = "Oh no! Computer wins!"; 
        return true;
    }
    else
    {
        return false;
    }

}