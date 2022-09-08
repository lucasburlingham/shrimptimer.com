const timeCreated = 1662591816;
var hitTime = 1662609316;
var currentTime = Math.floor(Date.now() / 1000);


// var timer = window.setInterval(computePercentage(hitTime, timeCreated), 1000);
// console.log(timer);


window.addEventListener('load', function () {
	var timer = window.setInterval(computePercentage(hitTime, timeCreated), 1000);
	var currentTime = Math.floor(Date.now() / 1000);
	var percentage = Math.floor((hitTime - currentTime) / (hitTime - timeCreated) * 100) + "%";
	console.log(percentage);
	console.log("Width: " + document.getElementById("progressbar").style.width);
	document.getElementById("progressbar").style.width = percentage;

});


function computePercentage(hitTime, timeCreated) {

	if (document.readyState === 'complete') {}

	return percentage;
}

function endTimer() {
	clearInterval(2);
	console.log("Ending timer...");
}


console.log("hitTime: " + hitTime + " Current Time: " + currentTime + " Time Created: " + timeCreated);