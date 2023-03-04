
// This function outputs the computer's choice in the RockPaperScissors game.
function getComputerChoice () {
    // An array containing valid choices for the computer.
   const comChoice = ['rock', 'paper', 'scissors']; 
// uses math.random to generate a number between 0-1 and then uses math.floor to round it.
// the rounded result is then used as an index to acces the comChoice array.
    return comChoice [Math.floor((Math.random () * comChoice.length))];
}


// -------------
// not relevant as player input goes via buttons.

// function getPlayerChoice () {
    // an array that stores valid player input.
    // const validPlayerChoices = ['Rock', 'Paper', 'Scissors'];
    // let arrayLength = validPlayerChoices.length;
    // let playerInput = prompt("Write down your choice");
    // let lowerCaseInput = playerInput.toLowerCase();
    // let verificationFlag = false; //flag value is true if there was a match or false if there wasn't.
    // let verifiedPlayerInput;
    // goes through the validPlayerChoices array and tries to compare user input to its content.
    // for (i = 0; i <= (arrayLength - 1); i++) {
        // if there is a match, set the flag to 1 and break outside of the loop.
        // if (lowerCaseInput === validPlayerChoices[i].toLowerCase()){
        //   verificationFlag = true;
        //   break
        // }
    // }
    //in case of a match, store the player's input in the verifiedPlayerInput variable.
    //otherwise print "Invalid input" to the console.
    // if (verificationFlag === true) {

        //  verifiedPlayerInput = lowerCaseInput;
    //      return verifiedPlayerInput;
    // // }
    // else {
        
    //     return false; 
//     }

    

// }

// // -----------------

// got the button elements.
const btnR = document.querySelector(".btnR");
const btnP = document.querySelector(".btnP");
const btnS = document.querySelector(".btnS");

// added event listeners on said buttons.
btnR.addEventListener('click', () => playRound(getComputerChoice(), 'rock'));
btnP.addEventListener('click', () => playRound(getComputerChoice(), 'paper'));
btnS.addEventListener('click', () => playRound(getComputerChoice(), 'paper'));

// those variables keep track of both computer and player scores.
let playerScore = 0;
let computerScore = 0;
// round counter
let roundCounter = 0;




//  this function plays a round.
function playRound (computerSelection, playerSelection) {
    // creates a div element to show round results.
    const roundResultBoard = document.getElementById('board');
    // score counters and the round counter.
    const cpuScore = document.getElementById('computerScore');
    const pScore = document.getElementById('playerScore');
    const counter = document.getElementById('counter');

    if(roundCounter < 5){

        // checks if player selection is valid. 
        // UPDATE: player selection is no longer via input so i guess this piece is irrelevent.
        if (playerSelection === false){

            console.log("Player selection invalid. Please re-enter your choice.");

            return false;
        }
        // checks for a tie.
        if (computerSelection === playerSelection) {
            
            roundCounter++;
            pScore.textContent = `player:${playerScore}`;
            cpuScore.textContent = `cpu:${computerScore}`;
            counter.textContent = `round: ${roundCounter}`;
            return roundResultBoard.textContent = "it's a tie!";
        }
    // checks all 3 possibilities in which player wins.
        else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {

            playerScore++;
            roundCounter++;
            pScore.textContent = `player:${playerScore}`;
            cpuScore.textContent = `cpu:${computerScore}`;
            counter.textContent = `round: ${roundCounter}`;
            return roundResultBoard.textContent = "you win! " + playerSelection + " beats " + computerSelection;
        }

        else {

            computerScore++;
            roundCounter++;
            pScore.textContent = `player:${playerScore}`;
            cpuScore.textContent = `cpu:${computerScore}`;
            counter.textContent = `round: ${roundCounter}`;
            return roundResultBoard.textContent = "you lose! " + computerSelection + " beats " + playerSelection;
        }
    }
    else if(playerScore > computerScore){

        roundResultBoard.textContent = 'Player wins!';
    }
    else if (computerScore > playerScore){
        roundResultBoard.textContent = 'Computer wins!';
    }
    else{
        roundResultBoard.textContent = 'Its a tie!';
    }
    // reset counters
    computerScore = 0;
    playerScore = 0;
    roundCounter = 0;

} 



function game () {

    // playes five rounds.

    for (let i = 0; i < 5; i++) {

        // functions get called and their values stored in those const variables.
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();

        // play a round and store its result in the roundResult variable.
        let roundResult = playRound(computerSelection, playerSelection);
        
        // terminates the game if input is invalid. UPDATE: i guess it isn't relevant anymore.

        if (roundResult === false){

            console.log("Invalid input.  game will terminate.");
            
            break
        }

        // prints round result to the console.
        console.log(roundResult);

        

        // checks if 5 rounds have passed.
        if(i === 4){

            if(playerScore > computerScore) {
                
                console.log("Player score: " + playerScore + " Computer score: " + computerScore + "\nPlayer wins!");
            }

            else if (playerScore === computerScore){

                console.log("Its a tie! both get to live another day.");
            }

            else {
                
                console.log("Player score: " + playerScore + " Computer score: " + computerScore + "\nComputer wins!");
            }

            // sets scores back to zero.
            playerScore = 0;
            computerScore = 0;
            break
        }

    } 

    return 0;
}

//  console.log(game());