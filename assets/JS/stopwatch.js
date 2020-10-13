// The Stopwatch*
// - Output location - var timerOutput = document.getElementById('id');
// - Create Stopwatch - var timer = new Stopwatch(timerOutput);
// - Start Stopwatch - timer.start();
function stopwatch(elem) {
	// On/Off Switch*
	// - default: off
	this.isOn = false;

	// Time starts at '0';
	var time = 0;

	// How often it updates (in milliseconds);
	var interval;

	// How much time has passed (in milliseconds);
	var offset;

	// Time Update*
	// - adds 'timePassed' to time; prints formatted time to index.html;
	function update() {
		time += addTime();
		elem.textContent = timeFormatter(time);
	}

	// Time Passed*
	// - finds current 'time'; subtracts previous 'time' to get 'timePassed'; resets 'offset"; sends result to update();
	function addTime() {
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	}

	// Time Formatter*
	// - formats time to '00 : 00 . 000';
	function timeFormatter(time) {
		// Total Milliseconds*
		// - plugs 'time'(in milliseconds) into the date().
		var time = new Date(time);

		// Time Strings*
		// - converts 'time' variables to Strings so their length can be used to determine the Zeroes Placeholder;
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();

		// Zeroes Placeholder*
		// - 'minutes' get two places; 'seconds' get two places; 'milliseconds' gets three places;
		if (minutes.length < 2) {
			minutes = "0" + minutes;
		}
		if (seconds.length < 2) {
			seconds = "0" + seconds;
		}
		if (milliseconds.length < 2) {
			milliseconds = "0" + milliseconds;
		}

		// Assemble Time*
		// - returns all the correctly formatted 'time' variables together;
		return (
			minutes + " : " + seconds + " . " + milliseconds[0] + milliseconds[1]
		);
	}

	// Start Stopwatch*
	//  - checks if Stopwatch() is 'off'; 'interval' updates every '.0010sec'; resets 'offset'; keeps Stopwatch() switched 'on';
	this.start = function () {
		if (!this.isOn) {
			interval = setInterval(update.bind(this), 10);
			offset = Date.now();
			this.isOn = true;
		}
	};

	// Stop Stopwatch*
	// - checks if Stopwatch() is 'on'; disables 'interval'; makes interval 'null'; turns Stopwatch() 'off';
	this.stop = function () {
		if (this.isOn) {
			mTime = time
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};

	// Reset Stopwatch*
	// - sets 'time' back to '0';
	this.reset = function () {
		time = 0;
	};
}
