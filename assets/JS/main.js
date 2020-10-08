// Start Button
//
var startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
	document.querySelector("#startDisplay").style.display = "none";
	document.querySelector("#answerDisplay").style.display = "block";
	document.querySelector("#timer").style.visibility = "visible";
	startTimer();

	console.log("started");
}

// Timer Function*
// - sets timer location; creates timer; starts timer;
function startTimer() {
	var timerOutput = document.querySelector("#timerOutput");
	var timer = new stopwatch(timerOutput);
	timer.start();
}

let shuffledQuestions, currentQuestionIndex;

// score keeper
// high scores
// start button

// Text Outputs*
// - Questions; Explanations;
var questions = document.querySelector("#questions");
var explanation = document.querySelector("#explanation");

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

function renderQuestions() {
	// Attach info
	var question = document.querySelector("#questions");
	var explanations = document.querySelector("#explanations");
	// Attach too Buttons
	var btnA = document.querySelector("#ansA");
	var btnB = document.querySelector("#ansB");
	var btnC = document.querySelector("#ansC");
	var btnD = document.querySelector("#ansD");

	function printAll() {
		question.textContent = allQuestions[0].Q;
		explanations.textContent = allQuestions[0].E;
		btnA.textContent = allQuestions[0].A[0];
		btnB.textContent = allQuestions[0].A[1];
		btnC.textContent = allQuestions[0].A[2];
		btnD.textContent = allQuestions[0].A[3];
	}
	printAll();
}
renderQuestions();

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

let elementsArray = document.querySelectorAll("#answerBtn");

elementsArray.forEach(function (elem) {
	elem.addEventListener("click", findAnswer);
});

function findAnswer(event) {
	console.log(event.currentTarget.textContent);
	console.log(allQuestions[0].C);
	if (event.currentTarget.textContent.includes(allQuestions[0].C)) {
		displayCorrect();
	} else {
		displayIncorrect();
	}
}

function displayCorrect() {
	// select #result; change #result; display #result;
	var result = document.querySelector("#result");
	result.textContent = "Correct";
	result.style.visibility = "visible";
}

function displayIncorrect() {
	// select #result; change #result; display #result;
	var result = document.querySelector("#result");
	result.textContent = "Wrong";
	result.style.visibility = "visible";
}
