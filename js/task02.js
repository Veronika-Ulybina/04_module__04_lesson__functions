'use strict';

{
	const getString = str => {
	
		const firstLetter = str[0].toUpperCase();
		const subString = str.slice(1).toLowerCase();
		
		return firstLetter.concat(subString);
	}
	
	const res = getString('привет Мир');
	console.log(res);
}