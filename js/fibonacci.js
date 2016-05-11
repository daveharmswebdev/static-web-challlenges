var elFibonacci = document.getElementById('fibonacci');

var fibonacciSequence = function() {
	var numbers = [0,1];
	var index = 1;
	while (numbers[numbers.length - 1] < 500) {
		var newNumber = numbers[numbers.length -2] + numbers[numbers.length - 1];
		if (newNumber < 500) { 
			numbers.push(newNumber);
		} else {
			break;
		}
	}
	return numbers;
};

console.log(fibonacciSequence());

elFibonacci.innerHTML = 'Fibonacci Sequence with numbers less than 500: ' + fibonacciSequence();