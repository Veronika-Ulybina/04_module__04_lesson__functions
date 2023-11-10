'use strict';

{
	const calc =  (a, b) => {
		
		if (b === 0) {
			return Math.abs(a);
		}

		return calc(b, a % b);
	}

	const res = calc(-8, 0);
	console.log(res);
}