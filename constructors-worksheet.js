function Animal () {
	this.hunger = 100;
}

Animal.prototype.says = '...';

Animal.prototype.speak = function () {
	return this.says;
}

Animal.prototype.eat = function (food) {
	if (food instanceof Animal && this.eats.indexOf('animal') > -1) {
		// 100 - food.hunger would be the amount you subtract from this.hunger
		if (this.hunger > 0) {
			this.hunger -= (100 - food.hunger)
			} else {
				this.hunger = 0;
			}			
	} else if (typeof food === 'string') {
		if (this.eats.indexOf(food) > -1) {
			if (this.hunger > 0) {
				this.hunger -= 10;
			} else {
				this.hunger = 0;
			}		
		} else {
			this.hunger = 100;
		}
	}
}

function Dog () {
	this.hunger = 100;
	this.says = 'woof';
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.eats = ['plant', 'animal'];



function Cat () {
	this.hunger = 100;
	this.says = 'meow';
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.eats = ['animal'];



function Snail () {
	this.hunger = 100;
}	

Snail.prototype = Object.create(Animal.prototype);

Snail.prototype.eats = ['plant','fungus', 'algae']



var spot = new Dog();
var feline = new Cat();
var slime = new Snail();


console.log(spot)

slime.eat('fungus');
slime.eat('algae');
spot.eat(feline);
spot.eat(slime);

console.log(spot.hunger);
console.log(spot.speak());
console.log(feline.speak());


console.assert(slime.speak() === '...');
console.assert(spot.speak() === 'woof');

console.assert(Animal.prototype.eats = ['plant','fungus', 'algae', 'animal'] || Animal)
console.assert(Dog.prototype.eats = Cat);

























