import * as lib0 from '../libraries/getRandomInt';

export function generateNameMan() {
	const prefix = [ "Theo", "Dhean", "Gus", "Gean", "Geo", "Thus", "Dhus", "Min", "Mer", "Mich", "Vin", "Vich", "Vint", "Leo", "Fe" ];
	const suffix = [ "res", "dosios", "ael", "arya", "fers", "riou", "tav", "and", "tavand" ];
	
	var redPlainsNameMan = prefix[lib0.getRandomInt(0, 14)] + suffix[lib0.getRandomInt(0, 8)];

	return redPlainsNameMan;
}

export function generateNameWoman() {
	const prefix = [ "Bro", "Brun", "Hus", "Gean", "Alma", "Alme", "He", "Min", "Mer", "Mich", "Vin", "Vich", "Vint", "Leo", "Cor" ];
	const suffix = [ "mavi", "len", "lee", "na", "tha", "rai", "meisti", "estra", "tavi" ];
	
	var redPlainsNameWoman = prefix[lib0.getRandomInt(0, 14)] + suffix[lib0.getRandomInt(0, 8)];

	return redPlainsNameWoman;
}

export function generateNameKing() {
	const prefix = [ "Theo", "Dhean", "Gus", "Gean", "Geo", "Thus", "Dhus", "Min", "Mer", "Mich", "Vin", "Vich", "Vint", "Leo", "Fe" ];
	const suffix = [ "res", "dosios", "ael", "arya", "fers", "riou", "tav", "and", "tavand" ];
	let number = lib0.getRandomInt(1, 18);
	
	var redPlainsNameKing = prefix[lib0.getRandomInt(0, 14)] + ' ' + prefix[lib0.getRandomInt(0, 14)] + suffix[lib0.getRandomInt(0, 8)] + " the " + `${number}` + '.';

	return redPlainsNameKing;
}