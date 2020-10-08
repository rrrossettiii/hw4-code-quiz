// Timer Function*
// - sets timer location; creates Stopwatch; starts Stopwatch;
function startTimer() {
	var timerOutput = document.querySelector("#timerOutput");
	var timer = new stopwatch(timerOutput);
	timer.start();
}

// startTimer();

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
		C: 1,
		E: "Is this the real life? Is this just fantasy?",
	},
	{
		Q: "10-20% of U.S. power outages are caused by which of these factors?",
		A: ["Kite Flying", "Pigeons", "Squirrels", "Toaster Ovens"],
		C: 2,
		E: "Squirrels never stop teething.",
	},
	{
		Q: 'Which of these is the "Powerhouse" of the cell?',
		A: ["ATP", "Mitochondria", "Carbohydrates", "The Nucleus"],
		C: 0,
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
		C: 3,
		E:
			"In Celtic mythology, The Unicorn is a symbol of purity and innocence, as well as masculinity and power.",
	},
	{
		Q: "The Washington Monument is capped with which metal?",
		A: ["Aluminum", "Bronze", "Steel", "Tin"],
		C: 0,
		E:
			"At the time it was built, in 1848, Aluminum was the most valuable metal.",
	},
	{
		Q: "Which of these planets rotates clockwise?",
		A: ["Earth", "Venus", "Jupiter", "Mars"],
		C: 1,
		E: "Venus is the only planet in our solar system that rotates clockwise.",
	},
	{
		Q: "What are the caps on the end of shoelaces called?",
		A: ["Aglet", "Grommet", "Eyelet", "Rivet"],
		C: 0,
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
		C: 1,
		E:
			'A "Jiffy" is the amount of time it takes light to travel one centimeter in a vacuum.',
	},
	{
		Q: "Who invented the word 'nerd?'",
		A: ["Stephen Hawking", "Earnest Hemingway", "Julius Caesar", "Dr. Seuss"],
		C: 0,
		E: "You Nerd!",
	},
	{
		Q:
			"If you open your eyes in a pitch-black room, the color you'll see is called ____ ?",
		A: ["Vantablack", "Taupe", "Eigengrau", "Davy's gray"],
		C: 0,
		E:
			'Eigengrau is a german word meaning "own grey" and is the intrinsic color we see in the absence of all light.',
	},
];

function renderQuestions() {
	var question = document.querySelector("#questions");
	// Attach too Buttons
	var btnA = document.querySelector("#ansA");
	var btnB = document.querySelector("#ansB");
	var btnC = document.querySelector("#ansC");
	var btnD = document.querySelector("#ansD");

	function printAll() {
		question.textContent = allQuestions[0].Q;
		btnA.textContent = allQuestions[0].A[0];
		btnB.textContent = allQuestions[0].A[1];
		btnC.textContent = allQuestions[0].A[2];
		btnD.textContent = allQuestions[0].A[3];
	}
	printAll();
}
renderQuestions();

function shuffle(array) {
	var temporaryValue, randomIndex;
	var currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex > 1) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

allQuestions.forEach(function (G) {
	var otherIndex;
	var choices = question.choices;
	var lastIndex = choices.length - 1;
	shuffle(choices);
	otherIndex = choices.indexOf("Other");
	if (otherIndex >= 0) {
		choices[otherIndex] = choices[lastIndex];
		choices[lastIndex] = "Other";
	}
	console.log(choices);
});
// button list
// correct/wrong
