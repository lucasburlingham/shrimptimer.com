const timeCreated = 1662672921;
var hitTime = 1662680021;
var currentTime = Math.floor(Date.now() / 1000);

window.addEventListener('load', function () {
	const timer = window.setInterval(function () {
		var currentTime = Math.floor(Date.now() / 1000);
		var percentage = Math.floor((hitTime - currentTime) / (hitTime - timeCreated) * 100) + "%";
		console.log(percentage);
		// console.log("Width: " + document.getElementById("progressbar").style.width);
		document.getElementById("progressbar").style.width = percentage;
	}, 1000);
});


function endTimer(timer) {
	clearInterval(timer);
	var end_toast = document.getElementById("end_toast");
	var myToast = new bootstrap.Toast(end_toast);
	myToast.show();
	console.log("Ending timer...");
}