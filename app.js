// TO DO

//1. display 25 minutes on the screen -- DONE
//2. interval by seconds the 25 minutes -- DONE
//3. stop button should work
//4. Perhaps include an API to encourage qutoes every 5 minutes
//5. CSS 


var currentTime;
var twentyFiveMinFromNow;
var displayTime;
var difference;
var interval;
var timerStarted = false;
var timerPaused = false;

$("#start").click(function () {
	// alert("Handler for .click() called.");
	console.log('click')

	if(timerStarted == false){
		createTime()
		timerStarted = true

		startTimer()

	}

});


$("#stop").click(function () {
	alert("Handler for .click() called.");
});


function createTime() {
	currentTime = moment()
	twentyFiveMinFromNow = moment().add(25, 'm')

	console.log(currentTime)
	console.log(twentyFiveMinFromNow)
}

function stopTimer(){
	clearInterval(interval)

}

function startTimer() {
	//probably should set this to a variable so that I can refer back to it and reset it ? 
	interval = setInterval(count, 1000);

}
function count() {
	//counts down and updates the screen
	//increases the time 
	twentyFiveMinFromNow = twentyFiveMinFromNow - 1000;

	difference = twentyFiveMinFromNow - currentTime

	if(difference == 0){
		alert('CONGRATS! Good job')
	}

	displayTime = moment(difference).format("mm:ss")
	
	//updates the time left
	$(".timer").html("Time Left: " + displayTime);

}