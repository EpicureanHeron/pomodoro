// TO DO

//1. display 25 minutes on the screen
//2. interval by seconds the 25 minutes
//3. stop button should work
//4. Perhaps include an API to encourage qutoes every 5 minutes
//5. CSS 


var timerValue = 0
// var moment = require('moment'); // require

$("#start").click(function () {
	// alert("Handler for .click() called.");
	console.log('click')
	createTime()
	startTimer()
});


$("#stop").click(function () {
	alert("Handler for .click() called.");
});


function createTime() {
	timerValue = moment().minute(25);
	console.log(timerValue)
}

function startTimer() {
	//probably should set this to a variable so that I can refer back to it and reset it ? 
	interval = setInterval(count, 1000);

}
function count() {
	//counts down and updates the screen
	//increases the time 
	timerValue = timerValue - 1;
	//updates the time left
	$(".timer").html("Time Left: " + timerValue);

}