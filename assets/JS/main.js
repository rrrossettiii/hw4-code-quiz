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

// Text Outputs
//
var questions = document.querySelector("#questions");
var explanation = document.querySelector("#explanation");

// Questions
//
// Q = The Question; A = The Answers; C = The Correct Choice;
var allQuestions = {
	q1: {
		Q: "What was the first 1080p video on YouTube?",
		A: [
			'A.) "Numa Numa"',
			'B.) The Muppets (singing) - "Bohemian Rhapsody"',
			'C.) Rick Astley - "Never Gonna Give You Up"',
			'D.) "Chocolate Rain"',
		],
		C: 1,
	},
	q2: {
		Q: "10-20% of power outages are caused by which of these factors?",
		A: ["A.) Kite Flying", "B.) Pigeons", "C.) Squirrels", "D.) Toaster Ovens"],
		C: 2,
	},
	q3: {
		Q: 'Which of these is the "Powerhouse" of the cell?',
		A: ["A.) ATP", "B.) Mitochondria", "C.) Carbohydrates", "D.) The Nucleus"],
		C: 0,
	},
	q4: {
		Q: "What is the national animal of Scotland?",
		A: [
			"A.) The Highland Cow",
			"B.) The Loch Ness Monster",
			"C.) The Bottle-nosed Dolphin",
			"D.) The Unicorn",
		],
		C: 3,
	},
	q5: {
		Q: "The Washington Monument is capped with which metal?",
		A: ["A.) Aluminum", "B.) Bronze", "C.) Steel", "D.) Tin"],
		C: 0,
	},
	q6: {
		Q: "what?",
		A: ["A.)", "B.)", "C.)", "D.)"],
		C: 0,
	},
	q7: {
		Q: "what?",
		A: ["A.)", "B.)", "C.)", "D.)"],
		C: 0,
	},
	q8: {
		Q: "what?",
		A: ["A.)", "B.)", "C.)", "D.)"],
		C: 0,
	},
	q9: {
		Q: "what?",
		A: ["A.)", "B.)", "C.)", "D.)"],
		C: 0,
	},
	q10: {
		Q: "what?",
		A: ["A.)", "B.)", "C.)", "D.)"],
		C: 0,
	},
};

// button list
// correct/wrong
