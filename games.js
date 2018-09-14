"use strict";

//create variables

let fourSidedDie =["TOP RANK NFL TEAMS THIS SEASON","SPORTS","TOP RANK NFL QUARTERBACKS OF 2018(fullname)","TOP 2018 NBA PLAYERS(fullname)"];
let sixSidedDie = ['philadelphia eagles','greenbay packers','pittsburgh steelers','minnesota vikings','new england patriots','atlanta falcons'];
let eightSidedDie = ['bastketball','football','soccer','boxing','tennis','golf','boxing','volleyball'];
let tenSidedDie = ['aaron rodgers','tom brady','cam newton','drew brees','philip rivers','cam newton','russell wilson','matt ryan','matthew stafford','jimmy garopollo']
let twelveSidedDie = ['giannis antetokounmpo','stephen curry','lebron james','james harden','kevin durant','russell westbrook','klay thompson','anthony davis','damon lillard','donovan mitchell','george',' kawhi leonard','kyrie irving']
let twentySidedDie = ['1','2','3','4','5','6','7','8','9','10'];




runGuessWord();

function runGuessWord() {

	alert("WELCOME TO DICEGUESSDRINK GAME, ROLL THE DICE FOR YOUR CATEGORY AND HOW MANY TIMES YOU CAN TRY TO GUESS THE WORD OR THE NAMES. RULES IS, IF YOU GUESSED IT RIGHT EVERYONE DRINKS TO CELEBRATE, IF YOU DID NOT GUESS IT RIGHT, YOU DRINK ALONE. SO SAD =( ");
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
	tryToGuess = prompt("WHAT IS YOUR GUESS?" );
	while ( tryAgain ){




			if (play == tryToGuess ){
					
					alert("NICE GUESS! YOU DESERVE A DRINK. CHEERS AND CELEBRATE WITH EVERYONE!");
			
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

}


function rollDie(numOfSides) {

	let roll = Math.floor(Math.random()*numOfSides)+1;
 
		return roll;

}



function getAnswer(){

let rollIndex = rollDie(4);
alert("YOUR CATEGORY IS " + (fourSidedDie[rollIndex-1]) + " ROLL THE DICE AGAIN FOR THE WORD OR THE NAME THAT YOU ARE GONNA TRY TO GUESS-goodluck!");

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





























	