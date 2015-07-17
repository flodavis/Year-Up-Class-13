// Ways to Invoke a Function 

// For my Students lets make a function
function sayHello(){
	alert('Hello World');
}
sayHello(); // Alerts Hello World

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//
//A function definition (also called a function declaration)
//
function square(number) {
	return number * number;
}
// Invoking the function 
square(4);

/* 3 Elements in the Function 
1. Name of the Function
2. A list of arguments in the function 
3. And the statements that define the function
// the return statement specifies the value returned by the function 
*/

// Function Declaration
function A(){};
//Calling a function declaration
A();

// Function Expression
var B = function(){};
//Function Expression Example
var foo = function(){
	return 'Welcome to JavaScript 101';
}
var output = foo();
alert(output);

// Immediately Invoked Function Expression 
var E = (function(){
	return function(){}
})();
// Practical Example of Immediate Self Invoked Functions
var output = (function(){
	return 'Welcome to JavaScript 101';
})();
alert(output);

//Function Constructor
var F = new Function();