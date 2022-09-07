const timeCreated = 1662591816;
var hitTime = 1662598800;
var currentTime = Math.floor(Date.now() / 1000);


var timer = window.setInterval(computePercentage(hitTime, timeCreated), 1000);



window.addEventListener('load', function () {
	document.getElementById("progressbar").style.width = computePercentage(hitTime, timeCreated);
	console.log("Width: " + document.getElementById("progressbar").style.width);
});


function computePercentage(hitTime, timeCreated) {
	var currentTime = Math.floor(Date.now() / 1000);
	var percentage = Math.floor((hitTime - currentTime) / (hitTime - timeCreated) * 100) + "%";
	console.log(percentage);
	return percentage;
}

function endTimer(timer) {
	clearInterval(timer);
	console.log("Ending timer...");
}


console.log("hitTime: " + hitTime + " Current Time: " + currentTime + " Time Created: " + timeCreated);