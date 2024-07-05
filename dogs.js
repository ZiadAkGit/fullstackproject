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
		if (this.age <= 1)
			return `${this.name} age in human years is: ${this.age * 15}`;
		else if (this.age > 1 && this.age <= 2)
			return `${this.name} age in human years is: ${this.age * 9}`;
		else return `${this.name} age in human years is: ${this.age * 4.5}`;
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

console.log(belle.calculate_human_age());
console.log(cooper.showDescription());
console.log(buddy.showDeatils());
