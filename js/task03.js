'use strict';

{
	const calculate = (sum, amount, promocode) => {
		let totalSum = sum;

		if (amount > 10) {
			totalSum = totalSum - totalSum * 0.03;
		}
		
		if (totalSum > 30000) {
			totalSum = totalSum - (totalSum - 30000) * 0.15;
		}
		
		if (promocode === 'METHED') {
			totalSum = totalSum - totalSum * 0.1;
		}

		if (promocode === 'G3H2Z1' && totalSum > 2000) {
			totalSum -= 500;
		}
		
		return totalSum;
	}

	const res = calculate(50000, 15, 'G3H2Z1');
	console.log(res);
}