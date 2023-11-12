


// set deafault score
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  tie: 0
};

updateScoreElement();

/*
if(!score){
  score = {
    wins: 0,
    loses: 0,
    tie: 0 
  };
}*/


/*.....player move funtion.....*/
function findResult(playerMove){

  const computerMove = pickComputerMove();

  let result = '';

  if(playerMove === 'rock') {
    if(computerMove === 'rock') result = 'Tie';
    else if (computerMove === 'paper') result = 'You lose';
    else if (computerMove === 'scissors') result = 'You win';
  }

  else if (playerMove === 'paper') {
    if(computerMove === 'paper') result = 'Tie';
    else if (computerMove === 'scissors') result = 'You lose';
    else if (computerMove === 'rock') result = 'You win';
  }

  else if (playerMove === 'scissors') {
    if(computerMove === 'scissors') result = 'Tie';
    else if (computerMove === 'rock') result = 'You lose';
    else if (computerMove === 'paper') result = 'You win';
  }

  if(result === 'You win') score.wins++;
  else if (result === 'You lose') score.loses++;
  else if (result === 'Tie') score.tie++;

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  moves(playerMove, computerMove);
  // document.querySelector('.js-moves')
  //   .innerHTML = `You ${playerMove} -- ${computerMove} Computer`;
 

//   alert(`You picked ${playerMove}. Compuet picked ${computerMove}. ${result}
// Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.tie}`);
}

/*.....moves function....*/
function moves(yourMove, computerMove) {
  document.querySelector('.js-moves')
    .innerHTML = ` You
    <img src="images/${yourMove}-emoji.png" alt="" class="move-icon">
    <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
    Computer`;
}

/*.....Score update function...*/
function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} |  Loses: ${score.loses} | Ties: ${score.tie}`;
}

/*.....computer pick....*/
function pickComputerMove() {
  let randomNumber = Math.random();
  let computerMove = '';
  if(randomNumber >=0 && randomNumber < 1/3){
  computerMove = 'rock';
  } else if (randomNumber >=1/3 && randomNumber < 2/3) {
  computerMove = 'paper';
  } else if (randomNumber >=2/3 && randomNumber < 1) {
  computerMove = 'scissors';
  } 
  return computerMove;
}

const resultElement = document.querySelector('.js-result');

resultElement.style.color = "#9421D2";
resultElement.style.fontSize = "45px";
resultElement.style.fontFamily = "courier";
resultElement.style.fontWeight = "700";


const movesElement = document.querySelector('.js-moves');  

movesElement.style.color = "whitesmoke";
movesElement.style.fontSize = "22px";

const scroeElement =  document.querySelector('.js-score'); 

scroeElement.style.color = "whitesmoke";
scroeElement.style.fontSize = "22px";   



