var canvas = document.getElementById("signCanvas");
var ctx = canvas.getContext("2d");
var currentMousePos = { x: -1, y: -1 };

$(canvas).mousemove(function (event) {
	currentMousePos.x = event.clientX;
	currentMousePos.y = event.clientY;
	ctx.fillStyle = "black";
	ctx.fillRect(currentMousePos.x - 20, currentMousePos.y - 10, 10, 10);
});

$(document).ready(function (event) {
	console.log(`The width is: ${canvas.style.width}`);
    console.log(`The height is: ${canvas.style.height}`);
});