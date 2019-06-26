let quantityOfPlayers;
let p1Page = "Single Player Mode";
let hypLink1 = p1Page.link("diceGame.html");
let p2Page = "Multiplayer Mode";
let hypLink2 = p2Page.link("diceGameMultiplayer.html");
let tableArr = [];
let tableArr2 = [];
let playersMany;
let theClick = 0;
let countClicks = 0;
let d4;
let d6;
let d8;
let d10;
let d12;
let d20;
let finalRollTotal; 
document.getElementById("finishButton").disabled = true;
document.getElementById("p1TieBreak").disabled = true;
document.getElementById("p2TieBreak").disabled = true;
function playerQuant() {
  let text;
  quantityOfPlayers = document.getElementById("numb").value;
  if (isNaN(quantityOfPlayers) || quantityOfPlayers < 1 || quantityOfPlayers > 2) {
    text = "Gemstones Digital is best played with 1-2 players. Please enter a valid number of players.";
  } 
  else if (quantityOfPlayers == 1) {
    text = (quantityOfPlayers + " " + "players." + " " + hypLink1);
    console.log("number of players:" + " " + quantityOfPlayers);
  }
  else if (quantityOfPlayers == 2) {
  	text = quantityOfPlayers + " " + "players." + " " + hypLink2;
    console.log("number of players:" + " " + quantityOfPlayers);
    goFirst();
  }
  document.getElementById("demo").innerHTML = text;
}
function goFirst () {
	let p1d20 = Math.floor((Math.random() * 20) + 1);
	console.log("p1 d20 roll:" + p1d20);
	let p2d20 = Math.floor((Math.random() * 20) + 1);
	console.log("p2 d20 roll:" + p2d20);
	if (p1d20 > p2d20) {
		console.log("player 1 goes first");
	}
	else {
		console.log("player 2 goes first");
	}
}
//dice//
if (countClicks > 8) {
	document.getElementById("rollBtn2").disabled = false;
	document.getElementById("rollBtn").disabled = true;
}
else{
	document.getElementById("rollBtn2").disabled = true;
	document.getElementById("rollBtn").disabled = false;
}
function rollDice(){
    d4 = Math.floor(Math.random() * 4) + 1;
    d6 = Math.floor(Math.random() * 6) + 1;
	d8 = Math.floor((Math.random() * 8) + 1);
	d10 = Math.floor((Math.random() * 10) + 1);
	d12 = Math.floor((Math.random() * 12) + 1);
	d20 = Math.floor((Math.random() * 20) + 1);
    let die4 = document.getElementById("dice4");
    let die6 = document.getElementById("dice6");
    let die8 = document.getElementById("dice8");
    let die10 = document.getElementById("dice10");
    let die12 = document.getElementById("dice12");
    let die20 = document.getElementById("dice20");
    let diceTotal = d4 + d6 + d8 + d10 + d12 + d20;
    die4.innerHTML = d4;
    die6.innerHTML = d6;
    die8.innerHTML = d8;
    die10.innerHTML = d10;
    die12.innerHTML = d12;
    die20.innerHTML = d20;
    countClicks++; 
    console.log("clicks:" + " " + countClicks);
    if (countClicks == 7) {
    	calcBonuses();
    	console.log("bonus");
    }
    else if (countClicks == 8) {
    	document.getElementById("9-1").innerHTML = d4;
    	document.getElementById("9-2").innerHTML = d6;
    	document.getElementById("9-3").innerHTML = d8;
    	document.getElementById("9-4").innerHTML = d10;
    	document.getElementById("9-5").innerHTML = d12;
    	document.getElementById("9-6").innerHTML = d20;
    	finalRollTotal = diceTotal;
    	console.log(finalRollTotal);
    	tableArr.push(finalRollTotal);
		console.log(tableArr);
		document.getElementById("rollBtn").disabled = true;
		document.getElementById("rollBtn2").disabled = false;
    }
    else if (countClicks == 9) {
    	document.getElementById("button4").disabled = false;
    	document.getElementById("button6").disabled = false;
    	document.getElementById("button8").disabled = false;
    	document.getElementById("button10").disabled = false;
    	document.getElementById("button12").disabled = false;
    	document.getElementById("button20").disabled = false;
    }
    else if (countClicks == 15) {
    	calcBonuses();
    	console.log("bonus p2");
    }
    else if (countClicks == 16) {
    	document.getElementById("M9-1").innerHTML = d4;
    	document.getElementById("M9-2").innerHTML = d6;
    	document.getElementById("M9-3").innerHTML = d8;
    	document.getElementById("M9-4").innerHTML = d10;
    	document.getElementById("M9-5").innerHTML = d12;
    	document.getElementById("M9-6").innerHTML = d20;
    	finalRollTotal = diceTotal;
    	console.log(finalRollTotal);
    	tableArr2.push(finalRollTotal);
		console.log(tableArr2);
    	document.getElementById("rollBtn2").disabled = true;
    	document.getElementById("finishButton").disabled = false;
    }
    if (countClicks > 7 && playersMany == 1) {
    	document.getElementById("finishButton").disabled = false;
    }
}
function buttonDiceFour(rollValue) {
	console.log("d4: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-1").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 2) {
		document.getElementById("3-1").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 3) {
		document.getElementById("4-1").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 4) {
		document.getElementById("5-1").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 5) {
		document.getElementById("6-1").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 6) {
		document.getElementById("7-1").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 9) {
		document.getElementById("M2-1").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 10) {
		document.getElementById("M3-1").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 11) {
		document.getElementById("M4-1").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 12) {
		document.getElementById("M5-1").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 13) {
		document.getElementById("M6-1").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 14) {
		document.getElementById("M7-1").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	document.getElementById("button4").disabled = true;
	console.log(tableArr);
	console.log(tableArr2);
}
function buttonDiceSix(rollValue) {
	console.log("d6: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-2").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 2) {
		document.getElementById("3-2").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 3) {
		document.getElementById("4-2").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 4) {
		document.getElementById("5-2").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 5) {
		document.getElementById("6-2").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 6) {
		document.getElementById("7-2").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 9) {
		document.getElementById("M2-2").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 10) {
		document.getElementById("M3-2").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 11) {
		document.getElementById("M4-2").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 12) {
		document.getElementById("M5-2").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 13) {
		document.getElementById("M6-2").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 14) {
		document.getElementById("M7-2").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	document.getElementById("button6").disabled = true;
	console.log(tableArr);
	console.log(tableArr2);
}
function buttonDiceEight(rollValue) {
	console.log("d8: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-3").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 2) {
		document.getElementById("3-3").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 3) {
		document.getElementById("4-3").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 4) {
		document.getElementById("5-3").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 5) {
		document.getElementById("6-3").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 6) {
		document.getElementById("7-3").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 9) {
		document.getElementById("M2-3").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 10) {
		document.getElementById("M3-3").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 11) {
		document.getElementById("M4-3").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 12) {
		document.getElementById("M5-3").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 13) {
		document.getElementById("M6-3").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 14) {
		document.getElementById("M7-3").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	document.getElementById("button8").disabled = true;
	console.log(tableArr);
	console.log(tableArr2);
}
function buttonDiceTen(rollValue) {
	console.log("d10: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-4").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 2) {
		document.getElementById("3-4").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 3) {
		document.getElementById("4-4").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 4) {
		document.getElementById("5-4").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 5) {
		document.getElementById("6-4").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 6) {
		document.getElementById("7-4").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 9) {
		document.getElementById("M2-4").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 10) {
		document.getElementById("M3-4").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 11) {
		document.getElementById("M4-4").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 12) {
		document.getElementById("M5-4").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 13) {
		document.getElementById("M6-4").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 14) {
		document.getElementById("M7-4").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	document.getElementById("button10").disabled = true;
	console.log(tableArr);
	console.log(tableArr2);
}
function buttonDiceTwelve(rollValue) {
	console.log("d12: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-5").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 2) {
		document.getElementById("3-5").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 3) {
		document.getElementById("4-5").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 4) {
		document.getElementById("5-5").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 5) {
		document.getElementById("6-5").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 6) {
		document.getElementById("7-5").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 9) {
		document.getElementById("M2-5").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 10) {
		document.getElementById("M3-5").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 11) {
		document.getElementById("M4-5").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 12) {
		document.getElementById("M5-5").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 13) {
		document.getElementById("M6-5").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 14) {
		document.getElementById("M7-5").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	document.getElementById("button12").disabled = true;
	console.log(tableArr);
	console.log(tableArr2);
}
function buttonDiceTwenty(rollValue) {
	console.log("d20: " + rollValue);
	if (countClicks == 1) {
		document.getElementById("2-6").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 2) {
		document.getElementById("3-6").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 3) {
		document.getElementById("4-6").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 4) {
		document.getElementById("5-6").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 5) {
		document.getElementById("6-6").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 6) {
		document.getElementById("7-6").innerHTML = rollValue;
		tableArr.push(rollValue);
	}
	else if (countClicks == 9) {
		document.getElementById("M2-6").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 10) {
		document.getElementById("M3-6").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 11) {
		document.getElementById("M4-6").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 12) {
		document.getElementById("M5-6").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 13) {
		document.getElementById("M6-6").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	else if (countClicks == 14) {
		document.getElementById("M7-6").innerHTML = rollValue;
		tableArr2.push(rollValue);
	}
	document.getElementById("button20").disabled = true;
	console.log(tableArr);
	console.log(tableArr2);
}
function finishGame() {
	let sumNumber = 0;
	for (let i = 0; i < tableArr.length; i++) {
		sumNumber = sumNumber + tableArr[i];
		}
	let number = sumNumber + "";
	console.log(number);
	document.getElementById("9-7").innerHTML = number;
	if (number > 100) {
		console.log("final score: " + number + " " + "You win :)");
		alert("You win:)");
	}
	else if (number <= 100) {
		console.log("You lose :(");
		alert("final score: " + number + " " + "You lose :(");
	}
	else {
		console.log("what happened");
		alert("there be dragons here");
	}
}
function calcBonuses (pointValue) {
	if (countClicks == 7){
		pointValue = Math.floor((Math.random() * 20) + 1);
		document.getElementById("8-6").innerHTML = pointValue;
		tableArr.push(pointValue);
		console.log(tableArr);
	}
	else if (countClicks == 15) {
		pointValue = Math.floor((Math.random() * 20) + 1);
		document.getElementById("M8-6").innerHTML = pointValue;
		tableArr.push(pointValue);
		console.log(tableArr);
	}
}
function finishGameMult() {
	let sumNumber = 0;
	for (let i = 0; i < tableArr.length; i++) {
		sumNumber = sumNumber + tableArr[i];
	}
	let number = sumNumber + "";
	console.log(number);
	document.getElementById("9-7").innerHTML = number;
	//linebreak//
	let sumNumber2 = 0;
	for (let i = 0; i < tableArr2.length; i++) {
		sumNumber2 = sumNumber2 + tableArr2[i];
	}
	let number2 = sumNumber2 + "";
	console.log(number2);
	document.getElementById("M9-7").innerHTML = number2;
	//linebreak//
	if (number > 100 && number > number2 && number2 > 100) {
		console.log("final score: " + number + " " + "Player 1 wins :)");
		alert("Player 1 wins!");
	}
	else if (number2 > 100 && number2 > number && number > 100) {
		console.log("final score: " + number + " " + "Player 2 wins :)");
		alert("Player 2 wins!");
	}
	else if (number < 100 || number2 < 100) {
		console.log("start new round");
		alert("Tie Breaker! Each player must do a tie-break roll. Click finish game to re-score.");
		document.getElementById("p1TieBreak").disabled = false;
		document.getElementById("p2TieBreak").disabled = false;
	}
	else {
		console.log("what happened");
		alert("there be dragons here");
	}
}
function startGame() {
	playersMany = 1;
	console.log(playersMany);
	theClick++;
	console.log(theClick);
	if (theClick == 1) {
		document.getElementById("startTheGame").disabled = true;
		document.getElementById("rollBtn").disabled = false;
	}
}
function p1BreakTie() {
	let p1d20Bonus = Math.floor((Math.random() * 20) + 1);
	document.getElementById("8-5").innerHTML = p1d20Bonus;
	tableArr.push(p1d20Bonus);
	console.log(tableArr);
}
function p2BreakTie() {
	let p2d20Bonus = Math.floor((Math.random() * 20) + 1);
	document.getElementById("M8-5").innerHTML = p2d20Bonus;
	tableArr2.push(p2d20Bonus);
	console.log(tableArr2);
}