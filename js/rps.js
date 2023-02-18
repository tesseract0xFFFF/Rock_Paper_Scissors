
// This function outputs the computer's choice in the RockPaperScissors game.
function getComputerChoice () {
    // An array containing valid choices for the computer.
   const comChoice = ['rock', 'paper', 'scissors']; 
// uses math.random to generate a number between 0-1 and then uses math.floor to round it.
// the rounded result is then used as an index to acces the comChoice array.
    return comChoice [Math.floor((Math.random () * comChoice.length))];
}


// -------------

function getPlayerChoice () {
    // an array that stores valid player input.
    const validPlayerChoices = ['Rock', 'Paper', 'Scissors'];
    let arrayLength = validPlayerChoices.length;
    let playerInput = prompt("Write down your choice");
    let lowerCaseInput = playerInput.toLowerCase();
    let verificationFlag = false; //flag value is true if there was a match or false if there wasn't.
    let verifiedPlayerInput;
    // goes through the validPlayerChoices array and tries to compare user input to its content.
    for (i = 0; i <= (arrayLength - 1); i++) {
        // if there is a match, set the flag to 1 and break outside of the loop.
        if (lowerCaseInput === validPlayerChoices[i].toLowerCase()){
          verificationFlag = true;
          break
        }
    }
    //in case of a match, store the player's input in the verifiedPlayerInput variable.
    //otherwise print "Invalid input" to the console.
    if (verificationFlag === true) {

         verifiedPlayerInput = lowerCaseInput;
         return verifiedPlayerInput;
    }
    else {
        
        return false; 
    }

    

}

// -----------------







console.log(playRound(computerSelection, playerSelection));

//  this function plays a round.
function playRound (computerSelection, playerSelection) {


    // checks if player selection is valid.
    if (playerSelection === false){

        return console.log("Player selection invalid.");
    }
    // checks for a tie.
    if (computerSelection === playerSelection) {
    
        return "it's a tie!";
    }
// checks all 3 possibilities in which player wins.
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {

        return "you win! " + playerSelection + " beats " + computerSelection;
    }

    else {

        return "you lose! " + computerSelection + " beats " + playerSelection;
    }

} 

function game () {

// functions get called and their values stored in those const variables.
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();


    
}