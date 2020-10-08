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
		E: "Is this the real life? Is this just fantasy?",
	},
	q2: {
		Q: "10-20% of U.S. power outages are caused by which of these factors?",
		A: ["A.) Kite Flying", "B.) Pigeons", "C.) Squirrels", "D.) Toaster Ovens"],
		C: 2,
		E: "Squirrels never stop teething.",
	},
	q3: {
		Q: 'Which of these is the "Powerhouse" of the cell?',
		A: ["A.) ATP", "B.) Mitochondria", "C.) Carbohydrates", "D.) The Nucleus"],
		C: 0,
		E: "MITOCHONDRIA IS THE POWERHOUSE OF THE CELL!",
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
		E:
			"In Celtic mythology, The Unicorn is a symbol of purity and innocence, as well as masculinity and power.",
	},
	q5: {
		Q: "The Washington Monument is capped with which metal?",
		A: ["A.) Aluminum", "B.) Bronze", "C.) Steel", "D.) Tin"],
		C: 0,
		E:
			"At the time it was built, in 1848, Aluminum was the most valuable metal.",
	},
	q6: {
		Q: "Which of these planets rotates clockwise?",
		A: ["A.) Earth", "B.) Venus", "C.) Jupiter", "D.) Mars"],
		C: 1,
		E: "Venus is the only planet in our solar system that rotates clockwise.",
	},
	q7: {
		Q: "What are the caps on the end of shoelaces called?",
		A: ["A.) Aglet", "B.) Grommet", "C.) Eyelet", "D.) Rivet"],
		C: 0,
		E: "Aglets keep the fibers of the lace or cord from unraveling.",
	},
	q8: {
		Q: 'How much time is in a "jiffy?"',
		A: [
			"A.) a few seconds.",
			"B.) 3 Milliseconds",
			"C.) one trillionth of a second.",
			"D.) 30 Seconds.",
		],
		C: 1,
		E:
			'A "Jiffy" is the amount of time it takes light to travel one centimeter in a vacuum.',
	},
	q9: {
		Q: "Who invented the word 'nerd?'",
		A: [
			"A.) Stephen Hawking",
			"B.) Earnest Hemingway",
			"C.) Julius Caesar",
			"D.) Dr. Seuss",
		],
		C: 0,
		E: "You Nerd!",
	},
	q10: {
		Q:
			"If you open your eyes in a pitch-black room, the color you'll see is called ____ ?",
		A: ["A.) Vantablack", "B.) Taupe", "C.) Eigengrau", "D.) Davy's gray"],
		C: 0,
		E:
			'Eigengrau is a german word meaning "own grey" and is the intrinsic color we see in the absence of all light.',
	},
};

// button list
// correct/wrong
