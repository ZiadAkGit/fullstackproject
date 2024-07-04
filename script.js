var canvas = document.getElementById("signCanvas");
var ctx = canvas.getContext("2d");
var currentMousePos = { x: -1, y: -1 };

$(canvas).mousemove(function (event) {
	ctx.fillStyle = "black";
	const rect = canvas.getBoundingClientRect();
	var x = event.clientX - rect.left;
	var y = event.clientY - rect.top;
	ctx.fillRect(x, y, 5, 5);
});
