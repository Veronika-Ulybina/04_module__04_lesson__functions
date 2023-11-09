'use strict';

{
	const calc =  (a, b) => {

		if (b === 0) {
			return Math.abs(a);
		}

		return calc(b, a % b);
	}

	const res = calc(12, 15);
	console.log(res);
}