"use strict";

//create variables

let fourSidedDie =["top nfl teams","sports","top nfl quarterback(last name)","top nba players(last name)"];
let sixSidedDie = ['eagles','packers','steelers','vikings','patriots','falcons'];
let eightSidedDie = ['bastketball','football','soccer','boxing','tennis','golf','boxing','volleyball'];
let tenSidedDie = ['rodgers','brady','newton','brees','rivers','newton','wilson','ryan','stafford','garopollo']
let twelveSidedDie = ['antetokounmpo','curry','james','harden','durant','westbrook','thompson','davis','lillard','mitchell','george','leonard','irving']
let twentySidedDie = ['1','2','3','4','5','6','7','8','9','10'];




runGuessWord();

function runGuessWord() {

	alert("are you ready to guess the words?")
	//let answer = rollDie();
	let numberOfGuesses = (twentySidedDie[rollDie(10)]);

	let playerGuessWord = playerGuess(numberOfGuesses);

}

function playerGuess(numberOfGuesses){

	// let answer = console.log(roll);
	let guessCounter = 0;
	let tryToGuess = "";
	let play = getAnswer();
	let tryAgain = true;
	tryToGuess = prompt("what is your guess?");
	while ( tryAgain ){




			if (play == tryToGuess ){
					
					alert("you guessed correctly!");
			
					tryAgain = false;
		
			} else {

					guessCounter ++;

	        		if ( numberOfGuesses == guessCounter){

					alert ("YOUVE REACH THE MAXIMUM OF GUESSES, BETTER LUCK NEXT TIME DUDE! HAVE DRINK AND TRY AGAIN!");

					tryAgain = false;
			
			}	else {

					

					tryToGuess = prompt("try again, you only have " + (numberOfGuesses-guessCounter) );
					
					tryAgain = true;
				}

					


					
			}

		}



	// 	if ( numberOfGuesses == guessCounter){

	// 			alert ("YOUVE REACH THE MAXIMUM OF GUESSES, BETTER LUCK NEXT TIME DUDE! HAVE DRINK AND TRY AGAIN!");

	// 			tryAgain = false;

	// 		} else {

	// 				if (play == tryToGuess ){
					
	// 				alert("you guessed correctly!");
			
	// 				tryAgain = false;
		
	// 		} else {
	// 				guessCounter ++;

	// 				tryToGuess = prompt("try again, you only have " + (numberOfGuesses-guessCounter) );

	// 				tryAgain = true;


					
	// 		}
			

	// 	}

			

		
	// }
		
}


function rollDie(numOfSides) {

	let roll = Math.floor(Math.random()*numOfSides)+1;
 
		return roll;

}



function getAnswer(){

let rollIndex = rollDie(4);
alert(fourSidedDie[rollIndex-1]);

let index = rollIndex - 1;
//let category = (fourSidedDie[rollIndex-1]);


//do the mapping here of the category to the generated answers
//

	if (index == 0){ // NFL teams 
		let rollIndexTwo = rollDie(6);
		
		//console.log(sixSidedDie[rollIndexTwo-1]);
		return sixSidedDie[rollIndexTwo-1];
		//return rollIndexTwo;

		} else if (index == 1){ //sports

			let rollIndexThree = rollDie(8);
			// return rollIndexThree;
			return  eightSidedDie[rollIndexThree-1];

		} else if (index == 2){ //nfl quarterbacks

			let rollIndexfour = rollDie(10);
			return  tenSidedDie[rollIndexfour-1];
			


		} else if (index == 3){ //nba players

			let rollIndexfive = rollDie(12);
			return  twelveSidedDie[rollIndexfive-1];
			
		}

		return category;
}



function guessWord(answer,guess){

	var answer = "";
	var guess = prompt("what is your guess?")
		if (answer == guess ){
			alert("you guessed correctly!");
			break;
		} else {
			guess = prompt("try again");
		}
}

function displayResult(result, message) {
    console.log(message + result);
   }

// console.log(myVar);


























	