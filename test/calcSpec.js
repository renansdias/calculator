var expect = require('chai').expect;
var Calculator = require('../lib/calc');

var calc = new Calculator();

describe('Calculator', function() {
	
	describe('.sum()', function() {
		it('should sum up 2 numbers', function() {
			var x = 10;
			var y = 5;

			expect(calc.sum(x, y)).to.equal(15);
		});
	});

	describe('.multiply()', function() {
		it('should multiply 2 numbers', function() {
			var x = 10;
			var y = 5;	

			expect(calc.multiply(x, y)).to.equal(50);
		});
	});

	describe('.divide()', function() {
		it('should divide 2 numbers', function() {
			var x = 10;
			var y = 5;	

			expect(calc.divide(x, y)).to.equal(2);
		});
	});

	describe('.subtract()', function() {
		it('should subtract 2 numbers', function() {
			var x = 10;
			var y = 5;	

			expect(calc.subtract(x, y)).to.equal(50);
		});
	});
});