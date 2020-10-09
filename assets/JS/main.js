// Displays
timerDisplay = document.querySelector("#timerDisplay");
startDisplay = document.querySelector("#startDisplay");
questionDisplay = document.querySelector("#questionDisplay");
explanationDisplay = document.querySelector("#explanationDisplay");
answerDisplay = document.querySelector("#answerDisplay");
resultDisplay = document.querySelector("#resultDisplay");
answerDisplayArray = document.querySelectorAll("#ans");

// Timer Function*
// - sets timer location; creates timer; starts timer;
function startTimer() {
	var timerOutput = document.querySelector("#timerOutput");
	var timer = new stopwatch(timerOutput);
	timer.start();
}

// Buttons
startBtn.addEventListener("click", initiateQuiz);
startBtn = document.querySelector("#startBtn");
aBtn = document.querySelector("#ansA");
bBtn = document.querySelector("#ansB");
cBtn = document.querySelector("#ansC");
dBtn = document.querySelector("#ansD");
answerButtonArray = document.querySelectorAll("#answerBtn");

// Start Quiz
//  - display timer; hide start button; display answer buttons; start timer;
function startQuiz() {
	timerDisplay.style.visibility = "visible";
	startDisplay.style.display = "none";
	answerDisplay.style.display = "block";
	startTimer();
	console.log("The Quiz has started.");
}

// score keeper
// high scores

// Questions
// Q = The Question; A = The Answers; C = The Correct Choice; E = Explanation;
var allQuestions = [
	{
		Q: "What was the first 1080p video on YouTube?",
		A: [
			'"Numa Numa"',
			'The Muppets (singing) - "Bohemian Rhapsody"',
			'Rick Astley - "Never Gonna Give You Up"',
			'"Chocolate Rain"',
		],
		C: 'The Muppets (singing) - "Bohemian Rhapsody"',
		E: "Is this the real life? Is this just fantasy?",
	},
	{
		Q: "10-20% of U.S. power outages are caused by which of these factors?",
		A: ["Kite Flying", "Pigeons", "Squirrels", "Toaster Ovens"],
		C: "Squirrels",
		E: "Squirrels never stop teething their whole lives.",
	},
	{
		Q: 'Which of these is the "Powerhouse" of the cell?',
		A: ["ATP", "Mitochondria", "Carbohydrates", "The Nucleus"],
		C: "Mitochondria",
		E: "MITOCHONDRIA IS THE POWERHOUSE OF THE CELL!",
	},
	{
		Q: "What is the national animal of Scotland?",
		A: [
			"The Highland Cow",
			"The Loch Ness Monster",
			"The Bottle-nosed Dolphin",
			"The Unicorn",
		],
		C: "The Unicorn",
		E:
			"In Celtic mythology, The Unicorn is a symbol of purity and innocence, as well as masculinity and power.",
	},
	{
		Q: "The Washington Monument is capped with which metal?",
		A: ["Aluminum", "Bronze", "Steel", "Tin"],
		C: "Aluminum",
		E:
			"At the time it was built, in 1848, Aluminum was the most valuable metal.",
	},
	{
		Q: "Which of these planets rotates clockwise?",
		A: ["Earth", "Venus", "Jupiter", "Mars"],
		C: "Venus",
		E: "Venus is the only planet in our solar system that rotates clockwise.",
	},
	{
		Q: "What are the caps on the end of shoelaces called?",
		A: ["Aglet", "Grommet", "Eyelet", "Rivet"],
		C: "Aglet",
		E: "Aglets keep the fibers of the lace or cord from unraveling.",
	},
	{
		Q: 'How much time is in a "jiffy?"',
		A: [
			"a few seconds.",
			"3 Milliseconds",
			"one trillionth of a second.",
			"30 Seconds.",
		],
		C: "one trillionth of a second.",
		E:
			'A "Jiffy" is the amount of time it takes light to travel one centimeter in a vacuum.',
	},
	{
		Q: "Who invented the word 'nerd?'",
		A: ["Stephen Hawking", "Earnest Hemingway", "Julius Caesar", "Dr. Seuss"],
		C: "Stephen Hawking",
		E: "You Nerd!",
	},
	{
		Q:
			"If you open your eyes in a pitch-black room, the color you'll see is called ____ ?",
		A: ["Vantablack", "Taupe", "Eigengrau", "Davy's gray"],
		C: "Eigengrau",
		E:
			'Eigengrau is a german word meaning "own grey" and is the intrinsic color we see in the absence of all light.',
	},
];

// Array Shuffler
function shuffle(array) {
	// Variables - how many remaining shuffles; output to back of array; random index;
	var m = array.length,
		t,
		i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}

//
//
//
//
function initiateQuiz() {
	startQuiz();
	shuffledQuestions = shuffle(allQuestions);
	for (i = 0; i < shuffledQuestions.length; i++) {
		correctAnswer = shuffledQuestions[i].C;
		questionDisplay.textContent = shuffledQuestions[i].Q;
		explanationDisplay.textContent = shuffledQuestions[i].E;
		shuffledAnswers = shuffle(shuffledQuestions[i].A);
		for (j = 0; j < shuffledAnswers.length; j++) {
			answerDisplayArray[j].textContent = shuffledAnswers[j];
			answerButtonArray.forEach(function (elem) {
				elem.addEventListener("click", findAnswer);
			});

			function findAnswer(event) {
				resultButton = event.currentTarget;
				if (event.currentTarget.textContent.includes(correctAnswer)) {
					displayCorrect();
					event.currentTarget.classList.remove("buttonWrong");
					event.currentTarget.classList.add("buttonCorrect");
				} else {
					displayIncorrect();
					event.currentTarget.classList.remove("buttonCorrect");
					event.currentTarget.classList.add("buttonWrong");
				}
			}
		}
	}
}

// shuffle questions
// display question
// shuffle answers
// display each answer
// check answer
// display result
// show next button
//

function displayCorrect() {
	// select #result; change #result; display #result;
	resultDisplay.textContent = "Correct";
	resultDisplay.classList.remove("wrongChoice");
	explanationDisplay.classList.remove("wrongChoice");
	resultDisplay.classList.add("correctChoice");
	explanationDisplay.classList.add("correctChoice");
}

function displayIncorrect() {
	// select #result; change #result; display #result;
	resultDisplay.textContent = "Wrong";
	resultDisplay.classList.remove("correctChoice");
	explanationDisplay.classList.remove("correctChoice");
	resultDisplay.classList.add("wrongChoice");
	explanationDisplay.classList.add("wrongChoice");
}
