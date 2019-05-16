


const getUserChoice = (userInput) => {
	userInput = "Paper" //type user choice//
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput ==='bomb'){
      return userInput;
      }else {
    console.log('Input must be rock, paper or scissors');
      }
};

/*test getUserChoice

console.log(getUserChoice('rock'))
*/

function getComputerChoice() {
  random = Math.floor(Math.random()*3);
  switch (random){
   	case 0:
      return "rock";
    case 1:
      return "paper";
   	 case 2:
      return "scissors";
  };
};
/*test getComputerChoice

console.log(getComputerChoice())  
*/
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "It's a tie!";
  }
  
  if (userChoice === 'rock'){
    if (computerChoice==='paper'){
        return "Computer wins!";
    }	
    else{
      return "You win!";
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice==='scissors'){
        return "Computer wins!";
    }else{
      return "You win!";
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice==='rock'){
        return "Computer wins!";
    }else{
      return "You win!";
    }
  }
   if (userChoice === 'bomb'){
     return "You cheat and win!"
   }
  
};  

const playGame = () => {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
  
};

playGame();
  
