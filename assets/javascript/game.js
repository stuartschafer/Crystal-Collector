$(document).ready(function() {

$(".allRows").hide();
$(".btn-info").hide();
$("#gameOver").hide();

var wins = 0;
var losses = 0;
var currentScore = 0;
var requiredScore = 0;
var	candyOne = 0;
var	candyTwo = 0;
var	candyThree = 0;
var candyFour = 0;
var difficulty = 0;
var changingPicOne = 0;
var changingPicTwo = 0;
var changingPicThree = 0;
var changingPicFour = 0;
var changingPicFive = 0;
var changingPicSix = 0;
var changingPicSeven = 0;
var changingPicEight = 0;
var selected = 0;
var attempt = 0;

picOne = (Math.floor((Math.random() * 12) + 1));
picTwo = (Math.floor((Math.random() * 12) + 1));
picThree = (Math.floor((Math.random() * 12) + 1));
picFour = (Math.floor((Math.random() * 12) + 1));
picFive = (Math.floor((Math.random() * 12) + 1));
picSix = (Math.floor((Math.random() * 12) + 1));
picSeven = (Math.floor((Math.random() * 12) + 1));
picEight = (Math.floor((Math.random() * 12) + 1));

requiredScore = (Math.floor((Math.random() * 100) + 20));





$("#currentScore").text(currentScore);



$("#firstBox").click(function() {
	currentScore = currentScore + picOne;
	checkScore();
});

$("#secondBox").click(function() {
	currentScore = currentScore + picTwo;
	checkScore();
});

$("#thirdBox").click(function() {
	currentScore = currentScore + picThree;
	checkScore();
});

$("#fourthBox").click(function() {
	currentScore = currentScore + picFour;
	checkScore();
});

$("#fifthBox").click(function() {
	currentScore = currentScore + picFive;
	checkScore();
});

$("#sixthBox").click(function() {
	currentScore = currentScore + picSix;
	checkScore();
});

$("#seventhBox").click(function() {
	currentScore = currentScore + picSeven;
	checkScore();
});

$("#eighthBox").click(function() {
	currentScore = currentScore + picEight;
	checkScore();
});

// This checks the scores and applies level difficulty if needed.
function checkScore() { 
	$("#currentScore").text(currentScore); 
	
	if (currentScore > requiredScore) {
		attempt = 5;
		$(".allRows").hide();
		$(".rand").hide();
		$(".btn").hide();
		losses++;
		$("#losses").text(losses);
		$("#gameOverText").text("Too bad, but you lose.");
		$("#gameOverText2").text("Click me to play again.");
		$("#gameOver").show(); }

	if (currentScore === requiredScore) {
		$(".allRows").hide();
		attempt = 5;
		$(".rand").hide();
		wins++;
		$("#wins").text(wins);
		$("#gameOverText").text("Congradulations...You WIN!!!!");
		$("#gameOverText2").text("Click me to play again.");
		$("#gameOver").show(); }
		

$("#gameOver").click(function() {
	resetGame();
	
});



	
	if (difficulty === 3) { randomOne = (Math.floor((Math.random() * 12) + 1));
							randomTwo = (Math.floor((Math.random() * 12) + 1));
							randomThree = (Math.floor((Math.random() * 12) + 1));
							randomFour = (Math.floor((Math.random() * 12) + 1));
							$("#randomValueA").text(randomOne);
							$("#randomValueB").text(randomTwo);
							$("#randomValueC").text(randomThree);
							$("#randomValueD").text(randomFour); }
	
	if (difficulty === 4) { randomOne = (Math.floor((Math.random() * 12) + 1));
								 randomTwo = (Math.floor((Math.random() * 12) + 1));
								 randomThree = (Math.floor((Math.random() * 12) + 1));
								 randomFour = (Math.floor((Math.random() * 12) + 1));
								 randomFive = (Math.floor((Math.random() * 12) + 1));
								 randomSix = (Math.floor((Math.random() * 12) + 1));
								 randomSeven = (Math.floor((Math.random() * 12) + 1));
								 randomEight = (Math.floor((Math.random() * 12) + 1));
								 $("#randomValueA").text(randomOne);
								 $("#randomValueB").text(randomTwo);
								 $("#randomValueC").text(randomThree);
								 $("#randomValueD").text(randomFour);
								 $("#randomValueE").text(randomFive);
								 $("#randomValueF").text(randomSix);
								 $("#randomValueG").text(randomSeven);
								 $("#randomValueH").text(randomEight); }

	if (difficulty === 5) { 
		if (attempt === 0) { $("#firstBox").show();
							 $("#secondBox").hide();
						 	 $("#thirdBox").show();
						 	 $("#fourthBox").hide();
						 	 attempt = 1; }
		else if (attempt === 1) { $("#firstBox").hide();
			   $("#secondBox").show();
			   $("#thirdBox").hide();
			   $("#fourthBox").show();
			   attempt = 0; }
		else { $(".allRows").hide(); }
	}

	if (difficulty === 6) { 
		if (attempt === 0) { $("#firstBox").show();
							 $("#secondBox").hide();
						 	 $("#thirdBox").hide();
						 	 $("#fourthBox").show();
						 	 $("#fifthBox").hide();
							 $("#sixthBox").show();
						 	 $("#seventhBox").show();
						 	 $("#eighthBox").hide();
						 	 attempt = 1; }
		else if (attempt === 1) { $("#firstBox").hide();
							 	  $("#secondBox").show();
						 	 	  $("#thirdBox").show();
						 	 	  $("#fourthBox").hide();
						 	 	  $("#fifthBox").show();
							 	  $("#sixthBox").hide();
						 	 	  $("#seventhBox").hide();
						 	 	  $("#eighthBox").show();
			   attempt = 0; }
		else { $(".allRows").hide(); }
	}




	if (difficulty === 7) { changingPicOne = picOne;
							changingPicTwo = picTwo;
							changingPicThree = picThree;
							changingPicFour = picFour;

							picOne = changingPicFour;
							picTwo = changingPicOne;
							picThree = changingPicTwo;
							picFour = changingPicThree;
 }

	if (difficulty === 8) { changingPicOne = picOne;
						    changingPicTwo = picTwo;
							changingPicThree = picThree;
							changingPicFour = picFour;
							changingPicFive = picFive;
							changingPicSix = picSix;
							changingPicSeven = picSeven;
							changingPicEight = picEight;

							picOne = changingPicTwo;
							picTwo = changingPicThree;
							picThree = changingPicFour;
							picFour = changingPicFive;
							picFive = changingPicSix;
							picSix = changingPicSeven;
							picSeven = changingPicEight;
							picEight = changingPicOne; }

}


// This resets the game.
function resetGame() {
currentScore = 0;
$("#requiredScore").text(0);
picOne = (Math.floor((Math.random() * 12) + 1));
picTwo = (Math.floor((Math.random() * 12) + 1));
picThree = (Math.floor((Math.random() * 12) + 1));
picFour = (Math.floor((Math.random() * 12) + 1));

requiredScore = (Math.floor((Math.random() * 100) + 20));

$(".allRows").fadeOut("slow");
$(".difficulty").fadeIn("slow");

$("#currentScore").text(currentScore);
$(".btn-info").hide();
$("#gameOver").hide();

}

// This section is for the levels of difficulty.

// LEVEL 1
$("#diffOne").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$(".firstRow").fadeIn("slow");
});


// LEVEL 2
$("#diffTwo").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$(".allRows").fadeIn("slow");
});


// LEVEL 3
$("#diffThree").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#requiredScore").text(requiredScore);
	difficulty = 3;

	$(".firstRow").fadeIn("slow");
	$(".rand").fadeIn("slow");

	randomOne = (Math.floor((Math.random() * 12) + 1));
	randomTwo = (Math.floor((Math.random() * 12) + 1));
	randomThree = (Math.floor((Math.random() * 12) + 1));
	randomFour = (Math.floor((Math.random() * 12) + 1));

	$("#randomValueA").text(randomOne);
	$("#randomValueB").text(randomTwo);
	$("#randomValueC").text(randomThree);
	$("#randomValueD").text(randomFour);
});


// LEVEL 4
$("#diffFour").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#requiredScore").text(requiredScore);
	difficulty = 4;

	$(".allRows").fadeIn("slow");
	$(".rand").fadeIn("slow");

	randomOne = (Math.floor((Math.random() * 12) + 1));
	randomTwo = (Math.floor((Math.random() * 12) + 1));
	randomThree = (Math.floor((Math.random() * 12) + 1));
	randomFour = (Math.floor((Math.random() * 12) + 1));
	randomFive = (Math.floor((Math.random() * 12) + 1));
	randomSix = (Math.floor((Math.random() * 12) + 1));
	randomSeven = (Math.floor((Math.random() * 12) + 1));
	randomEight = (Math.floor((Math.random() * 12) + 1));
	
	$("#randomValueA").text(picOne);
	$("#randomValueB").text(picTwo);
	$("#randomValueC").text(picThree);
	$("#randomValueD").text(picFour);
	$("#randomValueE").text(picFive);
	$("#randomValueF").text(picSix);
	$("#randomValueG").text(picSeven);
	$("#randomValueH").text(picEight);
});

// LEVEL 5
$("#diffFive").click(function() {
	$(".difficulty").hide();
	difficulty = 5;
	attempt = 0;
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$(".firstRow").fadeIn("slow");
});

// LEVEL 6
$("#diffSix").click(function() {
	$(".difficulty").hide();
	difficulty = 6;
	attempt = 0;
	$(this).show();
	$("#requiredScore").text(requiredScore);
	$(".allRows").fadeIn("slow");
});

// LEVEL 7
$("#diffSeven").click(function() {
	$(".difficulty").hide();
	$("#veryHardSeven").fadeIn("slow");
	$(this).show();
	$("#requiredScore").text(requiredScore);
	difficulty = 7;
	$(".firstRow").fadeIn("slow");
});

// LEVEL 8
$("#diffEight").click(function() {
	$(".difficulty").hide();
	$(this).show();
	$("#veryHardEight").fadeIn("slow");
	difficulty = 8;
	$("#requiredScore").text(requiredScore);
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










