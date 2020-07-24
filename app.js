// TO DO

//1. display 25 minutes on the screen -- DONE
//2. interval by seconds the 25 minutes -- DONE
//3. stop button should work -- DOne
//4. Perhaps include an API to encourage qutoes every 5 minutes
//5. CSS 


var currentTime;
var twentyFiveMinFromNow;
var displayTime;
var difference;
var interval;
var timerStarted = false;
var timerPaused = false;
var timerLength = 25

$("#start").click(function () {
	// alert("Handler for .click() called.");
	console.log('click')

	if(timerStarted == false){
		createTime()
		timerStarted = true

		startTimer()

	}

	if(timerPaused == true){
		startTimer()
		timerPaused = false;
	}

});


$("#stop").click(function () {
	stopTimer()
});





function createTime() {
	currentTime = moment()
	twentyFiveMinFromNow = moment().add(timerLength, 'm')

	console.log(currentTime)
	console.log(twentyFiveMinFromNow)
}

function stopTimer(){
	clearInterval(interval)
	timerPaused = true;
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
	displayTime = moment(difference).format("mm:ss")
	
	//updates the time left
	$(".timer").html("Time Left: " + displayTime);

	if(difference == 0){
		alert('CONGRATS! Good job');
		stopTimer();
		timerStarted = false;
		$(".timer").html("Time Left: " + displayTime);
	}

}