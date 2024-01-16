//Simple Library

export function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomFloat(min, max) {
	return (Math.random() * (max - min)) + min;
}
