// Get player choice buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const usernameInput = document.getElementById('username');
// create a variable for the username input field
var submit = document.querySelector('#username-submit');
// create variable for submit button
var form = document.getElementById('#username');
// create variable for the form

alert('Please enter and submit a username to start the game');

// if the username input field is empty, display an alert and disable the rock, paper, scissors buttons
// if the username input field is not empty, enable the rock, paper, scissors buttons

var h2 = document.querySelector('.user');

// function getUsername() {
//   const username = usernameInput.value;
//   h2.textContent = `${username}`};

function getUsername() {
  const username = usernameInput.value;
  h2.textContent = username;
  if (h2.textContent === '') {
    alert('Please enter a username');
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else {
    h2.textContent = username;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
  }
}


submit.addEventListener('click',getUsername)


// Get result and computer choice elements
const userResult = document.querySelector('#result');
const computerResult = document.querySelector('#computer-choice');

// Define array of choices
const choices = ['rock', 'paper', 'scissors'];

// Define function to get computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
let win = 0;
let draw = 0;
let loss = 0;
let result = 0;

const wins = document.querySelector('#wins');
const draws = document.querySelector('#draws');
const losses = document.querySelector('#losses');
const round = document.querySelector('#round');

// Define function to determine winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    draw++;
    draws.textContent = draw;
    result++;
    round.textContent = result;
    return 'Tie';
  } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
             (playerChoice === 'paper' && computerChoice === 'rock') ||
             (playerChoice === 'scissors' && computerChoice === 'paper')) {
    win++;
    wins.textContent = win;
    result++;
    round.textContent = result;
    return 'You win!';
  } else {
    loss++;
    losses.textContent = loss;
    result++;
    round.textContent = result;
    return 'Computer wins!';
  }
}

function updateScore() {
  round.textContent = result;
}

updateScore();


// Add click event listeners to player choice buttons
rockBtn.addEventListener('click', function() {
  const playerChoice = 'rock';
  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);
  userResult.textContent = winner;
  computerResult.textContent = `Computer chose ${computerChoice}`;
});

paperBtn.addEventListener('click', function() 
{
  const playerChoice = 'paper';
  const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    userResult.textContent = winner;
    computerResult.textContent = `Computer chose ${computerChoice}`});

scissorsBtn.addEventListener('click', function()    
{
  const playerChoice = 'scissors';
  const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    userResult.textContent = winner;
    computerResult.textContent = `Computer chose ${computerChoice}`});

// reset button reloads the page to reset the game
const resetBtn = document.querySelector('#reset');
  resetBtn.addEventListener('click', function() {
  location.reload();
});

   
