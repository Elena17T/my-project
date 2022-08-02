var square = document.getElementById("squareId");
var color = prompt ("which color of rectangle do you want?");
var width = prompt ("which width do you want?");
var height = prompt ("which height do you want?");
var border = prompt ("which color of border do you want?");
var number1 = prompt ("Please, type the first number");
var number2 = prompt ("Please, type the second number");
var sum = parseFloat(number1) + parseFloat(number2);

square.style.backgroundColor = color;
square.style.borderStyle = border;
square.style.width = width;
square.style.height = height;
square.style.border = border;
square.style.number = number1;
square.style.number = number2;
alert(sum);