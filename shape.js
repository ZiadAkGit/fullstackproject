//for all functions: https://www.w3schools.com/jquery/default.asp

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var currentMousePos = { x: -1, y: -1 };
var randomColors = [
	"yellow",
	"red",
	"green",
	"blue",
	"purple",
	"orange",
	"pink",
	"brown",
	"black",
];
const button = document.getElementById("clear");
var check = false;

$(c).click(function (event) {
	// var sizes = [400, 300, 200]; // Sizes of the squares
	// var colors = ["red", "green", "blue"]
	// for (var i = 0; i < sizes.length; i++) {
	// 	var size = sizes[i];
	// 	var color = colors[i];
	// 	var position = (c.width - size) / 2; // Center the squares
	// 	ctx.strokeStyle = color;
	// 	ctx.strokeRect(position, position, size, size);
	// }
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.moveTo(120, 100);
	ctx.lineTo(110, 110);
	ctx.lineTo(210, 220);
	ctx.lineTo(410, 330);
	ctx.closePath();
	ctx.fill();
});

function clearCanvas() {
	ctx.clearRect(0, 0, c.width, c.height);
	check = false;
}

$(c).mousemove(function (event) {
	if (check) {
		currentMousePos.x = event.clientX;
		currentMousePos.y = event.clientY;
		const number = Math.floor(Math.random() * randomColors.length);
		ctx.fillStyle = randomColors[number];
		ctx.fillRect(currentMousePos.x - 20, currentMousePos.y - 10, 10, 10);
	}
});

$(document).ready(function () {
	$.ajax({
		url: "https://cors-anywhere.herokuapp.com/https://ziadak.com/",
		type: "GET",
		success: function (data) {
			const page = data.toString();
		},
	});
});

class Shape {
	constructor(color) {
		this.color = color;
	}
	change_color(choice) {
		this.color = choice;
		return this.color;
	}
}

class Circle extends Shape {
	constructor(color, radius) {
		super(color);
		this.radius = radius;
	}
	calculate_area() {
		return Math.PI * (this.radius * this.radius);
	}
	calculate_perimeter() {
		return 2 * Math.PI * this.radius;
	}
}

class Rectangle extends Shape {
	constructor(color, a, b) {
		super(color);
		this.a = a;
		this.b = b;
	}
	calculate_area() {
		return this.a * this.b;
	}
	calculate_perimeter() {
		return (this.a + this.b) * 2;
	}
}

class Triangle extends Shape {
	constructor(color, base, height) {
		super(color);
		this.base = base;
		this.height = height;
	}
	calculate_area() {
		return (this.base * this.height) / 2;
	}
	calculate_perimeter() {
		// Assuming an equilateral triangle for perimeter calculation
		return this.base * 3;
	}
}

// Create instances
// const c = new Circle("red", 3);
const r = new Rectangle("blue", 3, 4);
const t = new Triangle("green", 2, 1);

// Output results
// console.log(c.change_color("yellow"));
// console.log(c.calculate_perimeter());
// console.log(c.calculate_area());

console.log(r.calculate_perimeter());
console.log(r.calculate_area());

console.log(t.calculate_perimeter());
console.log(t.calculate_area());
