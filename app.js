// Initialize your variables
var letters = ["a","b","c","d","e"];
var userGuess;
var randomLetter;
var wins = 0;
var losses = 0;
var guessesLeftInit = 5;
var guessesLeft = 0;    // Resets game upon start

// Select DOM elements by ID
var userGuessEl = document.getElementById('userGuess');
var winsEl = document.getElementById('wins');
var lossesEl = document.getElementById('losses');
var guessesLeftEl = document.getElementById('guessesLeft');

// What functions will this game require?
// Reset game when window loads
// Only on valid user input, run the game
// Check if there are guesses remaining
// If so, pick a random letter from array
// If not, reset game
// Check if input matches result
// If so, user won, update display, and reset game
// If not, subtract from guesses remaining
// Once there are no guesses left, user loses, update display, and reset game

var resetGame = function() {
  // Resets stats
  guessesLeft = guessesLeftInit;

  // Updates corresponding elements
  userGuessEl.textContent = '';
  winsEl.textContent = wins;
  lossesEl.textContent = losses;
  guessesLeftEl.textContent = guessesLeft;
  console.log(guessesLeft);

  // Resets randomLetter
  pickLetter();
}

var pickLetter = function() {
  // Picks a random letter from array
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log("Random letter: " + randomLetter);
}

var userWins = function() {
  // Alerts if user won
  alert("YAY! YOU ARE PSYCHIC!");
  console.log("USER WINS");

  wins++;
  winsEl.textContent = wins;
  resetGame();
}

var userLoses = function() {
  // Alert if user loses
  alert("BOO! You are NOT psychic!");
  console.log("USER LOSES");

  losses++;
  lossesEl.textContent = losses;
  resetGame();
}

var userGuessed = function() {
  guessesLeft--;
  guessesLeftEl.textContent = guessesLeft;
  console.log("Guesses left: " + guessesLeft);
}

var userEnteredInvalidInput = function() {
  // Alert if invalid input
  alert("You didn't input a letter! Try again.");
}

var compareLetter = function() {



  // Waits for user input
  document.addEventListener('keypress', function(e) {

    // Checks if game is over
    if (guessesLeft == 0) {
      resetGame();
    }

    // Checks if input is a letter
    if (97 <= e.which && e.which <= 122) {

      // Sets userGuess
      userGuess = String.fromCharCode(e.which);
      console.log(userGuess);

      // Appends input to HTML element content
      userGuessEl.textContent += userGuess + " ";

      // Checks if results match
      if (userGuess == randomLetter) {
        userWins();
      } else {
        userGuessed();
        // Checks if last guess
        if (guessesLeft < 1) {
          userLoses();
        }
      }
    } else {
      userEnteredInvalidInput();
    }
  });
}

// Runs the game when window loads
window.onload = function() {
  guessesLeftEl.textContent = guessesLeftInit;
  compareLetter();
}
