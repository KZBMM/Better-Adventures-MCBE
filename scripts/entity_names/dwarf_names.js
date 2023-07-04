import * as lib0 from '../libraries/getRandomInt';

export function generateNameMan() {
	const l0 = [ "V", "B", "J", "G", "Th", "D", "Dh", "C", "M", "N", "F", "H", "K", "L", "P", "R", "T", "Z" ];
	const l1 = [ "o", "ö", "i", "å", "in", "ri" ];
	const l01 = [ "r", "v", "rn", "p", "l", "d", "s", "f", "gh" ];
	var prefix = [ "", ( l0[lib0.getRandomInt(0, 17)] + l1[lib0.getRandomInt(0, 5)] + l01[lib0.getRandomInt(0, 8)] + ' ' ) ];
	var suffix = l0[lib0.getRandomInt(0, 17)] + l1[lib0.getRandomInt(0, 5)] + l01[lib0.getRandomInt(0, 8)] + l1[lib0.getRandomInt(0, 5)];
	
	var dwarfNameMan = prefix[lib0.getRandomInt(0, 1)] + suffix;

	return dwarfNameMan;
}

export function generateNameWoman() {
	const l0 = [ "V", "B", "J", "G", "Th", "D", "Dh", "C", "M", "N", "F", "H", "K", "L", "P", "R", "T", "Z" ];
	const l1 = [ "e", "a", "æ", "ä", "ea" ];
	const l01 = [ "r", "v", "rn", "p", "l", "d", "s", "f", "gh" ];
	var prefix = [ "", ( l0[lib0.getRandomInt(0, 17)] + l1[lib0.getRandomInt(0, 4)] + l01[lib0.getRandomInt(0, 8)] + ' ' ) ];
	var suffix = l0[lib0.getRandomInt(0, 17)] + l1[lib0.getRandomInt(0, 4)] + l01[lib0.getRandomInt(0, 8)] + l1[lib0.getRandomInt(0, 4)];
	
	var dwarfNameWoman = prefix[lib0.getRandomInt(0, 1)] + suffix;

	return dwarfNameWoman;
}