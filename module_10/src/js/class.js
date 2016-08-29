function Factory(){
	var dogAmount
	var animals = ['cat', 'dog'];
	this.init = function(type){
		switch(type){
			case 'cat': return new Cat();
			case 'dog': return new Dog();
			default: return;
		}
	}
}

var factory = new Factory ();

function Cat (){
	this.say = function(){
		console.log('I am a cat');
	}
}

Cat.prototype.factory = factory;

function Dog (){
	this.say = function(){
		console.log('I am a dog');
	}
}

Dog.prototype.factory = factory;

console.log (factory.init('dog'));
console.log (factory.init('cat'));
console.log (factory.init('catdog'));