// Timer Function
// - Utility*
// - sets timer location; creates timer; starts timer;
function startTimer() {
	timerOutput = document.querySelector("#timerOutput");
	timer = new stopwatch(timerOutput);
	timer.start();}

// Array Shuffler
// - Utility*
function shuffle(array) {
	// Variables - how many remaining shuffles; output to back of array; random index;
	var m = array.length, t, i;
	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);
		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;}
	return array;}

// Displays
// - output of the allQuestions data;
timerDisplay = document.querySelector("#timerDisplay");
heartDisplay = document.querySelector("#heartDisplay");
heart1 = document.querySelector('#heart1');
heart2 = document.querySelector('#heart2');
heart3 = document.querySelector('#heart3');
startDisplay = document.querySelector("#startDisplay");
nameDisplay = document.querySelector('#nameDisplay')
questionDisplay = document.querySelector("#questionDisplay");
explanationDisplay = document.querySelector("#explanationDisplay");
answerDisplay = document.querySelector("#answerDisplay");
resultDisplay = document.querySelector("#resultDisplay");
answerDisplayArray = document.querySelectorAll("#ans");

// Buttons
// - self explanatory;
startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", playerName);
nameBtn = document.querySelector("#nameBtn")
nameBtn.addEventListener("click", newName)
nextBtn = document.querySelector("#nextBtn");
nextBtn.addEventListener("click", nextQuestion);
aBtn = document.querySelector("#ansA");
bBtn = document.querySelector("#ansB");
cBtn = document.querySelector("#ansC");
dBtn = document.querySelector("#ansD");
answerButtonArray = document.querySelectorAll("#answerBtn");

// Start Quiz
//  - set starting point; start display; shuffle questions; select question;
function initiateQuiz() {
	nameDisplay.classList.add('hide')
	hearts = 3
	currentQuestion = 0
	displayStart();
	shuffledQuestions = shuffle(allQuestions);
	selectQuestion(currentQuestion);}

// Select Question
// - if currentQuestion is less than total # of questions...; 
function selectQuestion(i) {
	if (i < shuffledQuestions.length) {
		// - display question; load explanation; shuffle answers; load correct answer; 
		questionDisplay.textContent = `${i + 1}.) ` +  shuffledQuestions[i].Q;
		explanationDisplay.textContent = shuffledQuestions[i].E;
		answerDisplay.style.visibility = 'visible'
		shuffledAnswers = shuffle(shuffledQuestions[i].A);
		correctAnswer = shuffledQuestions[i].C;
		// loop - j answer text goes into j button text <span>; if clicked, check answer;
		for (j = 0; j < shuffledAnswers.length; j++) {
			answerDisplayArray[j].textContent = shuffledAnswers[j];
			answerButtonArray[j].addEventListener("click", checkAnswer);}}}

// Check Answer
// - whichever button triggered this event...;
function checkAnswer(event) {
	// - establish button; if button has correct answer...;
	currentButton = event.currentTarget;
	if (event.currentTarget.textContent.includes(correctAnswer)) {
		// - clear display; display correct; *next button is loaded too*
		displayCorrect();
		answerButtonArray.forEach(function (elem){
			elem.removeEventListener('click', checkAnswer)	
		})
	} else {
		// - subtract from hearts; clear display; remove 'click'; *next button is loaded too*;
		hearts--;
		console.log(hearts);
		health()
		displayIncorrect()
		currentButton.removeEventListener('click', checkAnswer)
	;}}

// Next Question
// - add to currentQuestion; clear display; initiate next question; 
function nextQuestion() {
	currentQuestion++;
	displayClear();
	if (currentQuestion === shuffledQuestions.length - 1){
		nextBtn.textContent = 'Finish'
	}
	if (currentQuestion === shuffledQuestions.length){
		displayRecords()
	} else{selectQuestion(currentQuestion);}
}

// Start Display
// - hide startBtn; display answer buttons; display timer; start timer;
function displayStart() {
	playerName()
	answerDisplay.style.display = "block";
	timerDisplay.style.visibility = "visible";
	heartDisplay.style.visibility = "visible";
	startTimer();}

// Correct Display
// - change result to 'Correct'; display results; display explanation; color button green; show nextBtn button; 
function displayCorrect() {
	resultDisplay.textContent = "Correct";
	resultDisplay.style.visibility = 'visible'
	resultDisplay.classList.add("correctChoice");
	explanationDisplay.classList.add("correctChoice");
	currentButton.classList.add("buttonCorrect");
	nextBtn.style.visibility = "visible";}

// Wrong Display
// -  change result to 'Wrong'; display results; display explanation; color button red; show nextBtn button; 
function displayIncorrect() {
	resultDisplay.textContent = "Wrong";
	resultDisplay.style.visibility = 'visible'
	resultDisplay.classList.add("wrongChoice");
	currentButton.classList.add("buttonWrong");}

// Clear Display
function displayClear() {
	// - clear result;
	resultDisplay.style.visibility = 'hidden'
	resultDisplay.classList.remove("wrongChoice");
	resultDisplay.classList.remove("correctChoice");
	// - clear explanation;
	explanationDisplay.classList.remove("wrongChoice");
	explanationDisplay.classList.remove("correctChoice");
	// - hide next button;
	nextBtn.style.visibility = "hidden";
	// - clear answer buttons' event listener and classes.
	answerDisplay.style.visibility = 'hidden'
	answerButtonArray.forEach(function (elem) {
		elem.removeEventListener('click', checkAnswer)		
		elem.classList.remove("buttonCorrect");
		elem.classList.remove("buttonWrong");});}

// Records
function displayRecords(){
	timer.stop()
	displayClear()
	timerDisplay.style.visibility = "hidden"
	answerDisplay.style.visibility = 'hidden'
	explanationDisplay.textContent = 'Your Time: ' + timerOutput.textContent
	explanationDisplay.style.visibility = 'visible'
	questionDisplay.textContent = 'Records'
	
}

// Game Over
function gameOver(){
	heartDisplay.style.visibility = "hidden"
	timerDisplay.style.visibility = "hidden"
	questionDisplay.textContent = 'Game Over'
	nextBtn.removeEventListener("click", nextQuestion);
	nextBtn.textContent = 'retry'
	nextBtn.style.visibility = 'visible'
	nextBtn.addEventListener("click", function(){
		location.reload()
		return false
	});
}

// Player Name
function playerName(){
	startDisplay.style.display = "none";
	nameDisplay.classList.add("display")
}

function newName() {
	event.preventDefault()
	userName = document.getElementById("userInput").value;
	initiateQuiz()
}

// Health
function health(){
	if (hearts == 2){
		heart1.style.display = 'none'
	}
	if (hearts == 1){
		heart2.style.display = 'none'
	}
	if (hearts == 0){
		timer.stop()
		heart3.style.visibility = 'hidden'
		for (i = 0; i < answerDisplayArray.length; i++){
			if (answerDisplayArray[i].textContent.includes(correctAnswer)){
				answerButtonArray[i].classList.add('buttonCorrect')
				explanationDisplay.classList.add("correctChoice");
			} else {
				answerButtonArray[i].classList.add('buttonWrong')
			}
			answerButtonArray[i].removeEventListener('click', checkAnswer)
		}

	}
	if (hearts == -1){
		displayClear()
		gameOver()
	}
}