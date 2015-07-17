// Everything in JavaScript is an Object 

// There is a couple of ways to make an Object 

// Here is an Example of An Empty Object

var myCar = new Object();

// or 

var obj = {}; // I prefer this ways

// Here we insert key value pairs using dot notation
myCar.make = 'BMW'; 
myCar.model = '335i';
myCar.year = 2010;

// Return my car 

//Also can you braket notation to 
// Assign properties the same as you would
// Use in Bracket notation

myCar["make"] = "BMW";
myCar["model"] = "335i";
myCar["year"] = 2010;
// Final Result 

var myCar = {
	make : "BMW",
	model : "335i",
	year : 2010
}

// You can also Create an object via

// A constructor function 

function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

var mycar2 = new Car("Tesla", "T", 2013);

// Another Example of the Constructor function

function Person(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}

var flow = new Person('Florence', 28, 'F');

//http://javascriptissexy.com/javascript-objects-in-detail/
// Mozilla Doc Link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects