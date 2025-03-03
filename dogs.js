class Dog {
	constructor(name, breed, age) {
		this.name = name;
		this.breed = breed;
		this.age = age;
	}

	showDeatils() {
		return `${this.name} is a ${this.age} years old ${this.breed} dog!`;
	}

	calculate_human_age() {
		if (this.age <= 1) return this.age * 15;
		else if (this.age > 1 && this.age <= 2) return this.age * 9;
		else return this.age * 4.5;
	}
}

class Belle extends Dog {
	constructor(name, breed, age, color, description) {
		super(name, breed, age);
		this.color = color;
		this.description = description;
	}
	showDescription() {
		return `${this.name}'s description is:\n${this.description}`;
	}
}

class Buddy extends Dog {
	constructor(name, breed, age, color, description) {
		super(name, breed, age);
		this.color = color;
		this.description = description;
	}
	showDescription() {
		return `${this.name}'s description is:\n${this.description}`;
	}
}

class Cooper extends Dog {
	constructor(name, breed, age, color, description) {
		super(name, breed, age);
		this.color = color;
		this.description = description;
	}
	showDescription() {
		return `${this.name}'s description is:\n${this.description}`;
	}
}

const belle = new Belle(
	"Belle",
	"pitbull",
	3,
	"brown",
	"belle is a cute pitbull dog that loves tennis balls"
);
const buddy = new Buddy(
	"Buddy",
	"husky",
	6,
	"golden",
	"buddy is a cute husky dog that loves tennis balls"
);
const cooper = new Cooper(
	"Cooper",
	"golden retriver",
	0.7,
	"blonde",
	"cooper is a cute golden retriver dog that loves tennis balls"
);

const dogs = [belle, buddy, cooper];
const div_details = document.getElementById("details");

for (let i = 0; i < dogs.length; i++) {
	const element = dogs[i];
	div_details.innerText += `${element.showDeatils()}\n${
		element.name}'s age in human years is: ${element.calculate_human_age()}\n${element.showDescription()}\n\n`;
}
