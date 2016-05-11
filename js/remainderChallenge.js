var elRemainder = document.getElementById('remainder');

var smallestNumber = function() {
	var number = 1;

	while ( number < 12000 ) {

		var remainders = [];

		for (var x = 1; x < 11; x++) {
			remainders.push(number%x);
		}

		var remaindersSum = remainders.reduce(function(a,b) {
			return a + b;
		});

		if (remaindersSum === 0) break;
		
		number++;

	}

	return number;	
};

elRemainder.innerHTML = 'The smallest number that can be divided by each of the numbers 1 to 10 without a remainder is <strong>' + smallestNumber() + '</strong>';



