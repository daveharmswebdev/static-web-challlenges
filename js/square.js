var elSquares = document.getElementById('squares');
var numbers = [];

function generateNumbers() {
	for (var x = 1; x < 11; x++) numbers.push(x);
}

generateNumbers();

function squareEachNumber(number) {
	return number*number;
} 

function findDifference() {
	var arraySum = numbers.reduce(function(a,b) {
		return a + b;
	});
	var squares = numbers.map(squareEachNumber);
	var sumOfSquares = squares.reduce(function(a,b) {
		return a + b;
	});
	var difference = (arraySum*arraySum) - sumOfSquares;
	return difference;
}

elSquares.innerHTML = 'The difference between the square of natural numbers 1 to 10 and the sum of those numbers squared is <strong>' + findDifference() + '</strong>';


	