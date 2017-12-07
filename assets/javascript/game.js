$(document).ready(function() {

$(".allRows").hide();
$(".btn-info").hide();
$("#gameOver").hide();

let ummm = 0;

let wins = 0;
let losses = 0;
let currentScore = 0;
let requiredScore = 0;
let difficulty = 0;
let changingPicOne = 0;
let changingPicTwo = 0;
let changingPicThree = 0;
let changingPicFour = 0;
let changingPicFive = 0;
let changingPicSix = 0;
let changingPicSeven = 0;
let changingPicEight = 0;
let attempt = 0;
let remaining = 0;
let begin = 0;
let picValues = [];

// This assigns random values to 8 different pictures
for (let i = 0; i < 8; i++) {
	let pic = (Math.floor((Math.random() * 12) + 2));
	picValues.push(pic);
}

console.log(picValues);

getRequiredScore();

function getRequiredScore() {
	requiredScore = (Math.floor((Math.random() * 100) + 60));
	(requiredScore > 120) ? getRequiredScore() : "";
};

$("#currentScore").text(currentScore);
$("#remaining").text(remaining);

$(".allRows").click(function() {
	let boxClicked = $(this).attr("id");

	// This adds the value of the box to the score
	currentScore = (boxClicked === "firstBox") ? currentScore + picValues[0] :
		(boxClicked === "secondBox") ? currentScore + picValues[1] :
		(boxClicked === "thirdBox") ? currentScore + picValues[2] :
		(boxClicked === "fourthBox") ? currentScore + picValues[3] :
		(boxClicked === "fifthBox") ? currentScore + picValues[4] :
		(boxClicked === "sixthBox") ? currentScore + picValues[5] :
		(boxClicked === "seventhBox") ? currentScore + picValues[6] : currentScore + picValues[7];

	checkScore();
});

$("#extraHelp").click(function() {
	$("h4").fadeIn("slow");
	remaining = requiredScore - currentScore;

	// This only shows if the game has started
	(begin === 1) ? $("#remaining").text(remaining) : "";

});

// This checks the scores and applies level difficulty if needed.
function checkScore() { 
	$("#currentScore").text(currentScore);
	remaining = requiredScore - currentScore;
	$("#remaining").text(remaining); 
	
	if (currentScore > requiredScore) {
		attempt = 5;
		$(".allRows").hide();
		$(".rand").hide();
		losses++;
		$("#losses").text(losses);
		$("#gameOverText").html("Too bad, but you lose. <br /> Click me to play again.");
		$("#gameOver").show();
		$("h4").hide();
	}

	if (currentScore === requiredScore) {
		$(".allRows").hide();
		attempt = 5;
		$(".rand").hide();
		wins++;
		$("#wins").text(wins);
		$("#gameOverText").html("Congradulations...You WIN!!!! <br /> Click me to play again");
		$("#gameOver").show();
		$("h4").hide();
	}
		

$("#gameOver").click(function() {
	resetGame();
});

	// This shows a randon value below each picture.  It has nothing to do with the actual value
	if (difficulty === 3 || difficulty === 4) {
		let randomValues = [];
		for (let i = 0; i < 8; i++) {
			let random = (Math.floor((Math.random() * 12) + 1));
			randomValues.push(random);
		}

		$("#randomValueA").text(randomValues[0]);
		$("#randomValueB").text(randomValues[1]);
		$("#randomValueC").text(randomValues[2]);
		$("#randomValueD").text(randomValues[3]);

		if (difficulty === 4) {
			$("#randomValueE").text(randomValues[4]);
			$("#randomValueF").text(randomValues[5]);
			$("#randomValueG").text(randomValues[6]);
			$("#randomValueH").text(randomValues[7]);
		}
	}

	if (difficulty === 5) { 
		if (attempt === 0) { 
			$("#firstBox").show();
			$("#secondBox").hide();
			$("#thirdBox").show();
			$("#fourthBox").hide();
			attempt = 1;
		}
		else if (attempt === 1) {
			$("#firstBox").hide();
			$("#secondBox").show();
			$("#thirdBox").hide();
			$("#fourthBox").show();
			attempt = 0;
		}
		else {
			$(".allRows").hide();
		}
	}

	if (difficulty === 6) { 
		if (attempt === 0) {
			$("#firstBox").show();
			$("#secondBox").hide();
			$("#thirdBox").hide();
			$("#fourthBox").show();
			$("#fifthBox").hide();
			$("#sixthBox").show();
			$("#seventhBox").show();
			$("#eighthBox").hide();
			attempt = 1;
		}
		else if (attempt === 1) {
			$("#firstBox").hide();
			$("#secondBox").show();
			$("#thirdBox").show();
			$("#fourthBox").hide();
			$("#fifthBox").show();
			$("#sixthBox").hide();
			$("#seventhBox").hide();
			$("#eighthBox").show();
			attempt = 0;
		}
		else {
			$(".allRows").hide();
		}
	}

	if (difficulty === 7 || difficulty === 8) {
		changingPicOne = picValues[0];
		changingPicTwo = picValues[1];
		changingPicThree = picValues[2];
		changingPicFour = picValues[3];
		changingPicFive = picValues[4];
		changingPicSix = picValues[5];
		changingPicSeven = picValues[6];
		changingPicEight = picValues[7];

		picValues[0] = changingPicTwo;
		picValues[1] = changingPicThree;
		picValues[2] = changingPicFour;
		picValues[3] = changingPicFive;
		picValues[4] = changingPicSix;
		picValues[5] = changingPicSeven;
		picValues[6] = changingPicEight;
		picValues[7] = changingPicOne;
 	}
}


// This resets the game.
function resetGame() {
	getRequiredScore();
	currentScore = 0;
	remaining = 0;
	$("#requiredScore").text("");
	picValues = [];
	for (let i = 0; i < 8; i++) {
		let pic = (Math.floor((Math.random() * 12) + 2));
		picValues.push(pic);
	}
	ummm++;
	console.log(ummm);
	// console.log(picValues);
	difficulty = 0;
	begin = 0;

	$(".allRows").fadeOut("slow");
	$(".difficulty").fadeIn("slow");
	$("#remaining").text(remaining);
	$("#currentScore").text(currentScore);
	$(".btn-info").hide();
	$("#gameOver").hide();
	$("h4").hide();
}

// This section is for the levels of difficulty.

// LEVEL 1
$("#diffOne").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$("#remaining").text(remaining);
	$(".firstRow").fadeIn("slow");
	begin = 1;
});


// LEVEL 2
$("#diffTwo").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$("#remaining").text(remaining);
	$(".allRows").fadeIn("slow");
	begin = 1;
});


// LEVEL 3
$("#diffThree").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$("#remaining").text(remaining);
	difficulty = 3;
	begin = 1;

	$(".firstRow").fadeIn("slow");
	$(".rand").fadeIn("slow");

	let randomValues = [];
		for (let i = 0; i < 4; i++) {
			let random = (Math.floor((Math.random() * 12) + 1));
			randomValues.push(random);
		}

		$("#randomValueA").text(randomValues[0]);
		$("#randomValueB").text(randomValues[1]);
		$("#randomValueC").text(randomValues[2]);
		$("#randomValueD").text(randomValues[3]);

});


// LEVEL 4
$("#diffFour").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$("#remaining").text(remaining);
	difficulty = 4;
	begin = 1;

	$(".allRows").fadeIn("slow");
	$(".rand").fadeIn("slow");

	let randomValues = [];
	for (let i = 0; i < 8; i++) {
		let random = (Math.floor((Math.random() * 12) + 1));
		randomValues.push(random);
	}

	$("#randomValueA").text(randomValues[0]);
	$("#randomValueB").text(randomValues[1]);
	$("#randomValueC").text(randomValues[2]);
	$("#randomValueD").text(randomValues[3]);
	$("#randomValueE").text(randomValues[4]);
	$("#randomValueF").text(randomValues[5]);
	$("#randomValueG").text(randomValues[6]);
	$("#randomValueH").text(randomValues[7]);

});

// LEVEL 5
$("#diffFive").click(function() {
	$(".difficulty").hide();
	difficulty = 5;
	attempt = 0;
	begin = 1;
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$("#remaining").text(remaining);
	$(".firstRow").fadeIn("slow");
});

// LEVEL 6
$("#diffSix").click(function() {
	$(".difficulty").hide();
	difficulty = 6;
	attempt = 0;
	begin = 1;
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$("#remaining").text(remaining);
	$(".allRows").fadeIn("slow");
});

// LEVEL 7
$("#diffSeven").click(function() {
	$(".difficulty").hide();
	$("#veryHardSeven").fadeIn("slow");
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$("#remaining").text(remaining);
	difficulty = 7;
	begin = 1;
	$(".firstRow").fadeIn("slow");
});

// LEVEL 8
$("#diffEight").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#veryHardEight").fadeIn("slow");
	difficulty = 8;
	begin = 1;
	$("#requiredScore").text(requiredScore);
	$("#remaining").text(remaining);
	$(".allRows").fadeIn("slow");
});

// Hint button for level 7
$("#veryHardSeven").click(function() {
	alert("All 4 values stay the same for the entire game, However, they move from button to button. Pay attention to the pattern.  For the answer, just do what you would do to comfort a coding bug.  :)");
	console.log("For dificulty 7, each value moves from LEFT to RIGHT."); 
	console.log("When you click, the value on picture 2 becomes the value on picture 3.");
	console.log("The value on picture 4 becomes the value on picture 1.");
	console.log("You know how it works now, but it's still VERY HARD.")
});

// Hint button for level 8
$("#veryHardEight").click(function() {
	alert("All 8 values stay the same for the entire game, However, they move from button to button. Pay attention to the pattern.  For the answer, just do what you would do to comfort a coding bug.  :)");
	console.log("For dificulty 8, each value moves from RIGHT to LEFT."); 
	console.log("When you click, the value on picture 2 becomes the value on picture 1.");
	console.log("The value on picture 1 becomes the value on picture 8.");
	console.log("Picture counts are top row 1,2,3,4.  Bottom row 5,6,7,8.");
	console.log("You know how it works now, but it's still VERY HARD.");
});



});










