// TO DO

//1. display 25 minutes on the screen -- DONE
//2. interval by seconds the 25 minutes -- DONE
//3. stop button should work -- DOne
//4. Perhaps include an API to encourage qutoes every 5 minutes
//5. CSS -- DONE

//space bar control
// mobile ???

//post grading

// need to be clear on the THREE MAIN TOPICS
// * Procrastination
// * Diffuse and Focused Learning
// * Chunking



var currentTime;
var futureTime;
var displayTime;
var difference;
var interval;
var timerStarted = false;
var timerPaused = false;
var focusTimerLength = 25;
var relaxTimerLength = 5;
var state = 'focus'; //either focus or relax

var phrases = ['overcome procrastination',
	'engage your acetylcholine neurons',
	"aren't tomatoes red?",
	'chunking, big picture, and context',
	"process over product",
	"deliberate practice makes you stronger",
	"don't look here, focus",
	"make this fullscreen with F11",
	"kudos to Francesco Cirillo",
	'no interuptions',
	'neurodiscomfort only lasts a couple minutes']

var relaxPhrases = ['a diffuse mind is a wonderful thing',
	'release your octopus',
	'Salvador Dali, Thomas Edison...',
	'remember to treat yourself',
	'you deserve a reward',
	'build the habit and reward yourself']


$(window).on('load', function () {
	//console.log('modal loaded?')
	$('.modal').modal('show');
});


$("#start").click(function () {
	// alert("Handler for .click() called.");
	console.log('click')

	if (timerStarted == false && state == 'focus') {
		createTime(focusTimerLength)


		var phrase = phraseSelector()
		$('.encouragement').html(phrase)
		startTimer()

	}

	if (timerStarted == false && state == 'relax') {
		createTime(relaxTimerLength)


		var phrase = phraseSelector()
		$('.encouragement').html(phrase)
		startTimer()

	}

	if (timerPaused == true) {
		startTimer()
		timerPaused = false;
		var phrase = phraseSelector()
		$('.encouragement').html(phrase)
	}

});


$("#stop").click(function () {
	stopTimer()
});


function createTime(timerLength) {
	currentTime = moment()
	futureTime = moment().add(timerLength, 'm')


}

function stopTimer() {
	clearInterval(interval)
	timerPaused = true;
}

function phraseSelector() {
	if (state == 'focus') {
		var selection = Math.floor((Math.random() * phrases.length));

		return phrases[selection]
	}
	else if (state == 'relax') {
		var selection = Math.floor((Math.random() * relaxPhrases.length));

		return relaxPhrases[selection]
	}


}

function startTimer() {
	timerStarted = true
	//probably should set this to a variable so that I can refer back to it and reset it ? 
	interval = setInterval(count, 1000);

}
function count() {
	//counts down and updates the screen
	//increases the time 
	futureTime = futureTime - 1000;

	difference = futureTime - currentTime
	displayTime = moment(difference).format("mm:ss")

	//updates the time left
	$("#counter").html(displayTime);

	$("#counter-title").html(displayTime);



	if (difference % 300000 == 0) {
		var phrase = phraseSelector()
		$('.encouragement').html(phrase)
		console.log('TRIGGERED')
	}
	// when display time shows 00:00
	if (displayTime == '00:00') {
		if (state == 'focus') {
			clearInterval(interval)
			$('body').addClass('relax')
			$('body').removeClass('focus')
			timerStarted = false;
			$("#counter").html(displayTime);

			setTimeout(setMood, 3900)
			state = 'relax'
			$('.encouragement').html('click start to relax')
			$("#counter").html('5:00')

		}
		else if (state == 'relax') {
			clearInterval(interval)
			$('body').addClass('focus')
			$('body').removeClass('relax')
			timerStarted = false;
			$("#counter").html(displayTime);
			setTimeout(setMood, 3900)
			$('.encouragement').html('click start to focus again')
			$("#counter").html('25:00')
			state = 'focus'
		}
		// triggers the animimation 

	}
}

function setMood() {
	if (state == 'relax') {
		$("body").css("background-color", "#DD5713");
	}
	else if (state == 'focus') {
		$("body").css("background-color", "#007ACC");
	}

}