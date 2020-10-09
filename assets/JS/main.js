// Timer Function
// - Utility*
// - sets timer location; creates timer; starts timer;
function startTimer() {
	var timerOutput = document.querySelector("#timerOutput");
	var timer = new stopwatch(timerOutput);
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
startDisplay = document.querySelector("#startDisplay");
questionDisplay = document.querySelector("#questionDisplay");
explanationDisplay = document.querySelector("#explanationDisplay");
answerDisplay = document.querySelector("#answerDisplay");
resultDisplay = document.querySelector("#resultDisplay");
answerDisplayArray = document.querySelectorAll("#ans");

// Buttons
// - self explanatory;
startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", initiateQuiz);
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
	indexStart = 0
	displayStart();
	shuffledQuestions = shuffle(allQuestions);
	selectQuestion(indexStart);}

// Select Question
// - if indexStart is less than total # of questions...; 
function selectQuestion(i) {
	if (i < shuffledQuestions.length) {
		// - display question; load explanation; shuffle answers; load correct answer; 
		questionDisplay.textContent = `${i + 1}.) ` +  shuffledQuestions[i].Q;
		explanationDisplay.textContent = shuffledQuestions[i].E;
		shuffledAnswers = shuffle(shuffledQuestions[i].A);
		correctAnswer = shuffledQuestions[i].C;
		// loop - x answer text goes into x button text <span>; if clicked, check answer;
		for (j = 0; j < shuffledAnswers.length; j++) {
			answerDisplayArray[j].textContent = shuffledAnswers[j];
			answerButtonArray[j].addEventListener("click", checkAnswer);
		}
	}
}

// Check Answer
// - whichever button triggered this event...;
function checkAnswer(event) {
	// - establish button; if button has correct answer...;
	currentButton = event.currentTarget;
	if (event.currentTarget.textContent.includes(correctAnswer)) {
		// - clear display; display correct; *next button is loaded too*;
		displayClear()
		displayCorrect();
	} else {
		// - clear display; display incorrect; *next button is loaded too*;
		displayClear()
		displayIncorrect();
	}}

// Next Question
// - add to indexStart; clear display; initiate next question; 
function nextQuestion() {
	indexStart++;
	displayClear();
	selectQuestion(indexStart);}

// Start Display
// - hide startBtn; display answer buttons; display timer; start timer;
function displayStart() {
	startDisplay.style.display = "none";
	answerDisplay.style.display = "block";
	timerDisplay.style.visibility = "visible";
	startTimer();}

// Correct Display
// - change result to 'Correct'; display results; display explanation; color button green; show nextBtn button; 
function displayCorrect() {
	resultDisplay.textContent = "Correct";
	resultDisplay.classList.add("correctChoice");
	explanationDisplay.classList.add("correctChoice");
	currentButton.classList.add("buttonCorrect");
	nextBtn.style.visibility = "visible";}

// Wrong Display
// -  change result to 'Wrong'; display results; display explanation; color button red; show nextBtn button; 
function displayIncorrect() {
	resultDisplay.textContent = "Wrong";
	resultDisplay.classList.add("wrongChoice");
	explanationDisplay.classList.add("wrongChoice");
	currentButton.classList.add("buttonWrong");
	nextBtn.style.visibility = "visible";}

// Clear Display
function displayClear() {
	// - clear result;
	resultDisplay.classList.remove("wrongChoice");
	resultDisplay.classList.remove("correctChoice");
	// - clear explanation;
	explanationDisplay.classList.remove("wrongChoice");
	explanationDisplay.classList.remove("correctChoice");
	// - hide next button;
	nextBtn.style.visibility = "hidden";
	// - clear answer buttons' event listener and class.
	answerButtonArray.forEach(function (elem) {
		elem.removeEventListener('click', checkAnswer)		
		elem.classList.remove("buttonCorrect");
		elem.classList.remove("buttonWrong");});}

// score keeper
// high scores

