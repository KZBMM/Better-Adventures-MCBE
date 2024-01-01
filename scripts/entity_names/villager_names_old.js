import * as lib0 from '../libraries/getRandomInt';

export function generateName() {
	var prefix = [ "V", "B", "J", "G", "W", "D", "S", "C", "M", "N", "F", "H", "K", "L", "P", "R", "T", "Z" ];
	var presuffix = [ '', "il", "g", "j", "w", "v", "d", '' ];
	var sufsuffix = [ "illager", "illagar", "illeger", "illegar", "allager", "ellager" ];
	var suffix = presuffix[lib0.getRandomInt(0, 7)] + sufsuffix[lib0.getRandomInt(0, 5)];

	var villagerName = prefix[lib0.getRandomInt(0, 17)] + suffix;

	return villagerName;
}
