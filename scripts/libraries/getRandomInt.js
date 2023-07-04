//Simple Library

export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min; //I'm adding 1 to the max - min because the random function has never an output of 1, therefore to make the max inclusive after flooring we need to add one.
}

export function getRandomFloat(min, max) {
	return (Math.random() * (max - min)) + min;
}
