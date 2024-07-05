var canvas = document.getElementById("signCanvas");
var ctx = canvas.getContext("2d");
var currentMousePos = { x: -1, y: -1 };
var check = false;

$(canvas).click(function () {
	check = true;
});

$(canvas).mousemove(function (event) {
	ctx.fillStyle = "black";
	const rect = canvas.getBoundingClientRect();
	var x = event.clientX - rect.left;
	var y = event.clientY - rect.top;
	if (check) ctx.fillRect(x, y, 5, 5);
});

$(document).ready(function () {
	alert("Please fill in the form below to volunteer 🐾");
});
