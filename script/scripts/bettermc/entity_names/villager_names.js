
import * as minecraft_main_server from '@minecraft/server';
import * as minecraft_main_ui from '@minecraft/server-ui';


function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

export function generateName() {
	var prefix = [ "V", "B", "J", "G", "W", "D", "S", "C", "M", "N", "F", "H", "K", "L", "P", "R", "T", "Z" ];
	var presuffix = [ '', "il", "g", "j", "w", "v", "d" ];
	var sufsuffix = [ "illager", "illagar", "illeger", "illegar", "allager", "ellager" ];
	var suffix = presuffix[getRandomInt(0, 6)] + sufsuffix[getRandomInt(0, 5)];

	var villagerName = prefix[getRandomInt(0, 17)] + suffix;

	return villagerName;
}
