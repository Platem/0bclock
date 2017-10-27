function createbClock(wrapper_id) {
	return clock = new bClock(wrapper_id);
}

function stopbclock(clock) {
	clearInterval(clock.clockInterval);
}

function startbClock(clock) {
	let d, hour;

	clock.clockInterval = setInterval(function() {
		d = new Date();
		hour = {
			h: "" + d.getHours(),
			m: "" + d.getMinutes(),
			s: "" + d.getSeconds()
		};

		if (hour.h.length == 1) hour.h = "0" + hour.h;
		if (hour.m.length == 1) hour.m = "0" + hour.m;
		if (hour.s.length == 1) hour.s = "0" + hour.s;

		updateClockHour(clock, hour);
	}, 1000);
}

function updateClockHour(clock, hour_object) {
	// Hour
	switch (hour_object.h[0]) {
		case '0':
			clock.$hours_circle20.removeClass('active');
			clock.$hours_circle10.removeClass('active');
			break;
		case '1':
			clock.$hours_circle20.removeClass('active');
			clock.$hours_circle10.addClass('active');
			break;
		case '2':
			clock.$hours_circle20.addClass('active');
			clock.$hours_circle10.removeClass('active');
			break;
		default:
			clock.$hours_circle20.removeClass('active');
			clock.$hours_circle10.removeClass('active');
			break;
	}
	switch (hour_object.h[1]) {
		case '0':
			clock.$hours_circle4.removeClass('active');
			clock.$hours_circle3.removeClass('active');
			clock.$hours_circle2.removeClass('active');
			clock.$hours_circle1.removeClass('active');
			break;
		case '1':
			clock.$hours_circle4.removeClass('active');
			clock.$hours_circle3.removeClass('active');
			clock.$hours_circle2.removeClass('active');
			clock.$hours_circle1.addClass('active');
			break;
		case '2':
			clock.$hours_circle4.removeClass('active');
			clock.$hours_circle3.removeClass('active');
			clock.$hours_circle2.addClass('active');
			clock.$hours_circle1.removeClass('active');
			break;
		case '3':
			clock.$hours_circle4.removeClass('active');
			clock.$hours_circle3.removeClass('active');
			clock.$hours_circle2.addClass('active');
			clock.$hours_circle1.addClass('active');
			break;
		case '4':
			clock.$hours_circle4.removeClass('active');
			clock.$hours_circle3.addClass('active');
			clock.$hours_circle2.removeClass('active');
			clock.$hours_circle1.removeClass('active');
			break;
		case '5':
			clock.$hours_circle4.removeClass('active');
			clock.$hours_circle3.addClass('active');
			clock.$hours_circle2.removeClass('active');
			clock.$hours_circle1.addClass('active');
			break;
		case '6':
			clock.$hours_circle4.removeClass('active');
			clock.$hours_circle3.addClass('active');
			clock.$hours_circle2.addClass('active');
			clock.$hours_circle1.removeClass('active');
			break;
		case '7':
			clock.$hours_circle4.removeClass('active');
			clock.$hours_circle3.addClass('active');
			clock.$hours_circle2.addClass('active');
			clock.$hours_circle1.addClass('active');
			break;
		case '8':
			clock.$hours_circle4.addClass('active');
			clock.$hours_circle3.removeClass('active');
			clock.$hours_circle2.removeClass('active');
			clock.$hours_circle1.removeClass('active');
			break;
		case '9':
			clock.$hours_circle4.addClass('active');
			clock.$hours_circle3.removeClass('active');
			clock.$hours_circle2.removeClass('active');
			clock.$hours_circle1.addClass('active');
			break;
		default:
			clock.$hours_circle4.removeClass('active');
			clock.$hours_circle3.removeClass('active');
			clock.$hours_circle2.removeClass('active');
			clock.$hours_circle1.removeClass('active');
			break;
	}

	// Minutes
	switch (hour_object.m[0]) {
		case '0':
			clock.$minutes_circle30.removeClass('active');
			clock.$minutes_circle20.removeClass('active');
			clock.$minutes_circle10.removeClass('active');
			break;
		case '1':
			clock.$minutes_circle30.removeClass('active');
			clock.$minutes_circle20.removeClass('active');
			clock.$minutes_circle10.addClass('active');
			break;
		case '2':
			clock.$minutes_circle30.removeClass('active');
			clock.$minutes_circle20.addClass('active');
			clock.$minutes_circle10.removeClass('active');
			break;
		case '3':
			clock.$minutes_circle30.removeClass('active');
			clock.$minutes_circle20.addClass('active');
			clock.$minutes_circle10.addClass('active');
			break;
		case '4':
			clock.$minutes_circle30.addClass('active');
			clock.$minutes_circle20.removeClass('active');
			clock.$minutes_circle10.removeClass('active');
			break;
		case '5':
			clock.$minutes_circle30.addClass('active');
			clock.$minutes_circle20.removeClass('active');
			clock.$minutes_circle10.addClass('active');
			break;
		default:
			clock.$minutes_circle30.removeClass('active');
			clock.$minutes_circle20.removeClass('active');
			clock.$minutes_circle10.removeClass('active');
			break;
	}
	switch (hour_object.m[1]) {
		case '0':
			clock.$minutes_circle4.removeClass('active');
			clock.$minutes_circle3.removeClass('active');
			clock.$minutes_circle2.removeClass('active');
			clock.$minutes_circle1.removeClass('active');
			break;
		case '1':
			clock.$minutes_circle4.removeClass('active');
			clock.$minutes_circle3.removeClass('active');
			clock.$minutes_circle2.removeClass('active');
			clock.$minutes_circle1.addClass('active');
			break;
		case '2':
			clock.$minutes_circle4.removeClass('active');
			clock.$minutes_circle3.removeClass('active');
			clock.$minutes_circle2.addClass('active');
			clock.$minutes_circle1.removeClass('active');
			break;
		case '3':
			clock.$minutes_circle4.removeClass('active');
			clock.$minutes_circle3.removeClass('active');
			clock.$minutes_circle2.addClass('active');
			clock.$minutes_circle1.addClass('active');
			break;
		case '4':
			clock.$minutes_circle4.removeClass('active');
			clock.$minutes_circle3.addClass('active');
			clock.$minutes_circle2.removeClass('active');
			clock.$minutes_circle1.removeClass('active');
			break;
		case '5':
			clock.$minutes_circle4.removeClass('active');
			clock.$minutes_circle3.addClass('active');
			clock.$minutes_circle2.removeClass('active');
			clock.$minutes_circle1.addClass('active');
			break;
		case '6':
			clock.$minutes_circle4.removeClass('active');
			clock.$minutes_circle3.addClass('active');
			clock.$minutes_circle2.addClass('active');
			clock.$minutes_circle1.removeClass('active');
			break;
		case '7':
			clock.$minutes_circle4.removeClass('active');
			clock.$minutes_circle3.addClass('active');
			clock.$minutes_circle2.addClass('active');
			clock.$minutes_circle1.addClass('active');
			break;
		case '8':
			clock.$minutes_circle4.addClass('active');
			clock.$minutes_circle3.removeClass('active');
			clock.$minutes_circle2.removeClass('active');
			clock.$minutes_circle1.removeClass('active');
			break;
		case '9':
			clock.$minutes_circle4.addClass('active');
			clock.$minutes_circle3.removeClass('active');
			clock.$minutes_circle2.removeClass('active');
			clock.$minutes_circle1.addClass('active');
			break;
		default:
			clock.$minutes_circle4.removeClass('active');
			clock.$minutes_circle3.removeClass('active');
			clock.$minutes_circle2.removeClass('active');
			clock.$minutes_circle1.removeClass('active');
			break;
	}

	// Seconds
	switch (hour_object.s[0]) {
		case '0':
			clock.$seconds_circle30.removeClass('active');
			clock.$seconds_circle20.removeClass('active');
			clock.$seconds_circle10.removeClass('active');
			break;
		case '1':
			clock.$seconds_circle30.removeClass('active');
			clock.$seconds_circle20.removeClass('active');
			clock.$seconds_circle10.addClass('active');
			break;
		case '2':
			clock.$seconds_circle30.removeClass('active');
			clock.$seconds_circle20.addClass('active');
			clock.$seconds_circle10.removeClass('active');
			break;
			break;
		case '3':
			clock.$seconds_circle30.removeClass('active');
			clock.$seconds_circle20.addClass('active');
			clock.$seconds_circle10.addClass('active');
			break;
		case '4':
			clock.$seconds_circle30.addClass('active');
			clock.$seconds_circle20.removeClass('active');
			clock.$seconds_circle10.removeClass('active');
			break;
		case '5':
			clock.$seconds_circle30.addClass('active');
			clock.$seconds_circle20.removeClass('active');
			clock.$seconds_circle10.addClass('active');
			break;
		default:
			clock.$seconds_circle30.removeClass('active');
			clock.$seconds_circle20.removeClass('active');
			clock.$seconds_circle10.removeClass('active');
			break;
	}
	switch (hour_object.s[1]) {
		case '0':
			clock.$seconds_circle4.removeClass('active');
			clock.$seconds_circle3.removeClass('active');
			clock.$seconds_circle2.removeClass('active');
			clock.$seconds_circle1.removeClass('active');
			break;
		case '1':
			clock.$seconds_circle4.removeClass('active');
			clock.$seconds_circle3.removeClass('active');
			clock.$seconds_circle2.removeClass('active');
			clock.$seconds_circle1.addClass('active');
			break;
		case '2':
			clock.$seconds_circle4.removeClass('active');
			clock.$seconds_circle3.removeClass('active');
			clock.$seconds_circle2.addClass('active');
			clock.$seconds_circle1.removeClass('active');
			break;
		case '3':
			clock.$seconds_circle4.removeClass('active');
			clock.$seconds_circle3.removeClass('active');
			clock.$seconds_circle2.addClass('active');
			clock.$seconds_circle1.addClass('active');
			break;
		case '4':
			clock.$seconds_circle4.removeClass('active');
			clock.$seconds_circle3.addClass('active');
			clock.$seconds_circle2.removeClass('active');
			clock.$seconds_circle1.removeClass('active');
			break;
		case '5':
			clock.$seconds_circle4.removeClass('active');
			clock.$seconds_circle3.addClass('active');
			clock.$seconds_circle2.removeClass('active');
			clock.$seconds_circle1.addClass('active');
			break;
		case '6':
			clock.$seconds_circle4.removeClass('active');
			clock.$seconds_circle3.addClass('active');
			clock.$seconds_circle2.addClass('active');
			clock.$seconds_circle1.removeClass('active');
			break;
		case '7':
			clock.$seconds_circle4.removeClass('active');
			clock.$seconds_circle3.addClass('active');
			clock.$seconds_circle2.addClass('active');
			clock.$seconds_circle1.addClass('active');
			break;
		case '8':
			clock.$seconds_circle4.addClass('active');
			clock.$seconds_circle3.removeClass('active');
			clock.$seconds_circle2.removeClass('active');
			clock.$seconds_circle1.removeClass('active');
			break;
		case '9':
			clock.$seconds_circle4.addClass('active');
			clock.$seconds_circle3.removeClass('active');
			clock.$seconds_circle2.removeClass('active');
			clock.$seconds_circle1.addClass('active');
			break;
		default:
			clock.$seconds_circle4.removeClass('active');
			clock.$seconds_circle3.removeClass('active');
			clock.$seconds_circle2.removeClass('active');
			clock.$seconds_circle1.removeClass('active');
			break;
	}
}

let bClock = function(wrapper_id) {
	// Select wrapper
	this.$wrapper = $('#' + wrapper_id);
	// Create clock div
	this.$clock = $('<div class="clock"></div>');

	// Select sections
	this.$hours = $('<div class="clock-section hour-section"></div>');
	this.$minutes = $('<div class="clock-section minutes-section"></div>');
	this.$seconds = $('<div class="clock-section seconds-section"></div>');

	// Append circles to hour-section
	this.$hours_circle40 = $('<div class="clock-circle circle40 hide"></div>')
	this.$hours.append(this.$hours_circle40);
	this.$hours_circle4 = $('<div class="clock-circle circle4"></div>')
	this.$hours.append(this.$hours_circle4);
	this.$hours_circle30 = $('<div class="clock-circle circle30 hide"></div>')
	this.$hours.append(this.$hours_circle30);
	this.$hours_circle3 = $('<div class="clock-circle circle3"></div>')
	this.$hours.append(this.$hours_circle3);
	this.$hours_circle20 = $('<div class="clock-circle circle20"></div>')
	this.$hours.append(this.$hours_circle20);
	this.$hours_circle2 = $('<div class="clock-circle circle2"></div>')
	this.$hours.append(this.$hours_circle2);
	this.$hours_circle10 = $('<div class="clock-circle circle10"></div>')
	this.$hours.append(this.$hours_circle10);
	this.$hours_circle1 = $('<div class="clock-circle circle1"></div>')
	this.$hours.append(this.$hours_circle1);

	// Append circles to minutes-section
	this.$minutes_circle40 = $('<div class="clock-circle circle40 hide"></div>')
	this.$minutes.append(this.$minutes_circle40);
	this.$minutes_circle4 = $('<div class="clock-circle circle4"></div>')
	this.$minutes.append(this.$minutes_circle4);
	this.$minutes_circle30 = $('<div class="clock-circle circle30"></div>')
	this.$minutes.append(this.$minutes_circle30);
	this.$minutes_circle3 = $('<div class="clock-circle circle3"></div>')
	this.$minutes.append(this.$minutes_circle3);
	this.$minutes_circle20 = $('<div class="clock-circle circle20"></div>')
	this.$minutes.append(this.$minutes_circle20);
	this.$minutes_circle2 = $('<div class="clock-circle circle2"></div>')
	this.$minutes.append(this.$minutes_circle2);
	this.$minutes_circle10 = $('<div class="clock-circle circle10"></div>')
	this.$minutes.append(this.$minutes_circle10);
	this.$minutes_circle1 = $('<div class="clock-circle circle1"></div>')
	this.$minutes.append(this.$minutes_circle1);

	// Append circles to seconds-section
	this.$seconds_circle40 = $('<div class="clock-circle circle40 hide"></div>')
	this.$seconds.append(this.$seconds_circle40);
	this.$seconds_circle4 = $('<div class="clock-circle circle4"></div>')
	this.$seconds.append(this.$seconds_circle4);
	this.$seconds_circle30 = $('<div class="clock-circle circle30"></div>')
	this.$seconds.append(this.$seconds_circle30);
	this.$seconds_circle3 = $('<div class="clock-circle circle3"></div>')
	this.$seconds.append(this.$seconds_circle3);
	this.$seconds_circle20 = $('<div class="clock-circle circle20"></div>')
	this.$seconds.append(this.$seconds_circle20);
	this.$seconds_circle2 = $('<div class="clock-circle circle2"></div>')
	this.$seconds.append(this.$seconds_circle2);
	this.$seconds_circle10 = $('<div class="clock-circle circle10"></div>')
	this.$seconds.append(this.$seconds_circle10);
	this.$seconds_circle1 = $('<div class="clock-circle circle1"></div>')
	this.$seconds.append(this.$seconds_circle1);

	// Append sections to clock
	this.$clock.append(this.$hours);
	this.$clock.append(this.$minutes);
	this.$clock.append(this.$seconds);

	// Append clock to wrapper
	this.$wrapper.append(this.$clock);
};
