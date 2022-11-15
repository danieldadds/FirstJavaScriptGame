///PHASE ONE OF ROCK RAPER SCISSORS 15NOV


game();

// initializing the game with a loop of 5 rounds 


function game() {

  for (let i = 0; i < 5; i++) {


    const playerSelection = getPlayerSelection();
    const computerChoice = getComputerChoice();
  
    playRound(playerSelection, computerChoice);
    
  }

}




function getPlayerSelection(playerSelection) {
  return playerSelection = prompt("What's your choice?");
 // add more code for case sensitive etc 

}


function getComputerChoice(computerChoice = "") {

// generates a number between 0-2 to act as rock, paper and scissors, then return value 
const random = Math.floor(Math.random() * 3);


// switch statement to convert the random number assigned to rock, paper and scissors. 
switch(random) {
  case 0:
      return computerChoice.toString = "Rock";
    break;
  case 1:
      return computerChoice.toString = "Paper";
    break;
  case 2:
      return computerChoice.toString = "Scissors";
    
  default:
    
}}



// round system that displays player and computers choise 

function playRound(playerSelection, computerChoice){

  console.log("Your choice " + playerSelection);
  console.log("Computers choice " + computerChoice);

   


  /// needs revising - basic logic system to determine winner 

  /// too add a points system to determine overall winner, best of 5 



  if (playerSelection == "Rock" || playerSelection == "ROCK" || playerSelection == "rock"  && computerChoice == "Paper") {
    console.log("You Lost!");
     } 
  
  if (playerSelection == "Rock" || playerSelection == "ROCK" || playerSelection == "rock" && computerChoice == "Rock") {
      console.log("You Draw!");
     } 
  if (playerSelection == "Rock" || playerSelection == "ROCK" || playerSelection == "rock" && computerChoice == "Scissors") {
        console.log("You win!");
     } 



     if (playerSelection == "Paper" || playerSelection == "PAPER" || playerSelection == "paper" && computerChoice == "Scissors") {
      console.log("You Lost!");
       } 
    
    if (playerSelection == "Paper" || playerSelection == "PAPER" || playerSelection == "paper"  && computerChoice == "Paper") {
        console.log("You Draw!");
       } 
    if (playerSelection == "Paper" || playerSelection == "PAPER" || playerSelection == "paper"  && computerChoice == "Rock") {
          console.log("You win!");
       } 

       

       if (playerSelection == "Scissors" || playerSelection == "SCISSORS" || playerSelection == "scissors" && computerChoice == "Rock") {
        console.log("You Lost!");
         } 
      
      if (playerSelection == "Scissors" || playerSelection == "SCISSORS" || playerSelection == "scissors" && computerChoice == "Scissors") {
          console.log("You Draw!");
         } 
      if (playerSelection == "Scissors" || playerSelection == "SCISSORS" || playerSelection == "scissors" && computerChoice == "Paper") {
            console.log("You win!");
         } 
    



}