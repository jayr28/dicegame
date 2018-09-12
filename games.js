"use strict";

//create variables

let fourSidedDie =[6,8,10,12];
let sixSidedDie = ['a','e','i','o','u','free'];
let eightSidedDie = ['g','a','m','e','o','v','e','r'];
let twentySidedDie = ['5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
let words = ["javascript","devcodecamp","programming","syntax","sublimetext","slack","stackoverflow","w3schools","phyton","ruby","php","yttrium","visualstudio","java","HTML","CSS"];

function randomWord(){


		let guessWord = Math.floor(Math.random()*words.length);

		return guessWord;
		
}

let wordIndex = randomWord();

console.log(words[wordIndex]);



function rollDie(numOfSides) {

	let roll = Math.floor(Math.random()*numOfSides)+1;
 
	return roll;

}

let rollIndex = rollDie(4);

console.log(fourSidedDie[rollIndex-1]);

	if (rollIndex == 6) {
		let rollIndexTwo = rollDie(6);
		console.log(sixSidedDie[rollIndexTwo]);
	
	} else if (rollIndex == 8) {
		let rollIndexThree = rollDie(8);

		console.log(eightSidedDie[rollIndexThree]);

	}
 //create a random number for 4 sided dice with 6 8 10 12


//create a random selection for a,e,i,o,u free

//create 8 questions for 10 categories

// create 10 categories

//create 12 random selection for life

let rollIndexSix = rollDie(20);
function countdown(rollIndexSix) {
    //initialize the variable to be returned with the initial i
    var ret = rollIndexSix;
    //in each iteration, assigns i to i-1 then checks if i >= 0
    while (--rollIndexSix >= 0) {
        //concatenates a space and the current i value to the return string
        ret += ' ' + rollIndexSix;
    }
    //returns the string
    return ret;
}
console.log(twentySidedDie[rollIndexSix]);
//create a countdown from 20 seconds

function getUserInput(guess){
	let userInput = prompt(guess);
	return userInput;
}



















	