///PHASE ONE OF ROCK RAPER SCISSORS 15NOV




// initializing the game with a loop of 5 rounds 








function game() {

  for (let i = 0; i < 5; i++) {

    
    let validAnswer = false;
    const playerSelection = getPlayerSelection();
    const computerChoice = getComputerChoice();
     


    // player selection must match of the below options once converted to caps, if else statement to restart if not

    if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {

      playRound(playerSelection, computerChoice);
    } else {
       getPlayerSelection();
      
    } }
    
   
    

    
    
  }






function getPlayerSelection(playerSelection, validAnswer) {
  playerSelection = prompt("What's your choice?");
  return playerSelection.toUpperCase();}

 // now turns player choice into caps to stop bug with if statement





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

 

  if (playerSelection === "ROCK" && computerChoice === "Paper") {
    console.log("You Lost!");
     } 
  
  if (playerSelection === "ROCK" && computerChoice === "Rock") {
      console.log("You Draw!");
     } 
  if (playerSelection === "ROCK" && computerChoice === "Scissors") {
        console.log("You win!");
       
     } 


     if (playerSelection === "PAPER" && computerChoice === "Scissors") {
      console.log("You Lost!");
       } 
    
    if (playerSelection === "PAPER" && computerChoice === "Paper") {
        console.log("You Draw!");
       } 
    if (playerSelection === "PAPER" && computerChoice === "Rock") {
          console.log("You win!");
         
       } 

       

       if (playerSelection === "SCISSORS" && computerChoice === "Rock") {
        console.log("You Lost!");
         } 
      
      if (playerSelection === "SCISSORS" && computerChoice === "Scissors") {
          console.log("You Draw!");
         } 
      if (playerSelection === "SCISSORS" && computerChoice === "Paper") {
            console.log("You win!");
            
         }  
         
    
    



        }