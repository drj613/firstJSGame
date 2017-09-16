
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess;



//User will be allowed 9 guesses
var updateGuessesLeft = function() {
	//Call the appropriate HTML element and set it to our "guessesLeft" variable
	document.querySelector('#gLeft').innerHTML = "Guesses left: " + guessesLeft;
}


//Updates the letter to be guessed
var updateLetterToGuess = function() {
	letterToGuess = compChoices[Math.floor(Math.random()*compChoices.length)];
}

//Takes letters guessed so far and outputs them
var updateGuessesSoFar = function() {
	document.querySelector('#guessed').innerHTML = "Letters guessed so far: " + guessedLetters.join(', ');
}


//Resets game
var reset = function(){
	guessesLeft = 9;
	guessedLetters = [];
	updateGuessesLeft();
	updateLetterToGuess();
  	updateGuessesSoFar();
}



//Pressing a key triggers the game
document.onkeyup = function(event) {
    
    //Set userGuess equal to the typed key, set to lowercase to match compChoices
  	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  	guessesLeft--;
  	//Push userGuess to the array of guessedLetters
  	guessedLetters.push(userGuess);
  	//Update guesses left and which letters have been guessed
  	updateGuessesLeft();
  	updateGuessesSoFar();


  	//if we have guesses left
  	if(guessesLeft > 0) {
  		//And the latest guess is equal to the letter to guess
  		if(userGuess === letterToGuess){
  			//display win, add to win tally, reset game
  			wins++;
  			document.querySelector('#wins').innerHTML = "Wins: " + wins;
  			alert("Yes! You're psychic!!");
  			reset();
  		}
  	//if we run out of guesses
  	} else if(guessesLeft === 0) {
  		//display loss, add to loss tally, reset game
  		losses++;
  		document.querySelector('#losses').innerHTML = "Losses: " + losses;
  		alert("Sorry, guess you're not psychic...");
  		reset();
  	}


}