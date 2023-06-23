import * as minecraft_main_server from '@minecraft/server';
import * as lib0 from '../libraries/getRandomInt.js';

export function generateNameMan() {
	const prefix = [ "Voz", "Pez", "Kah", "Denh", "Arh", "Az", "Paz", "Goz", "Gaz", "Alz", "Al", "Ir", "Er", "Erh", "Irh", "Dir", "Nir", "Nor" ];
	const presuffix = [ 'mi', "ki", "li", "i", "a", "fi", "u" ];
	const sufsuffix = [ "r", "l", "thor", "ther", "rr", "ar" ];
	let suffix = presuffix[lib0.getRandomInt(0, 6)] + sufsuffix[lib0.getRandomInt(0, 5)];

	let billagerName0 = prefix[lib0.getRandomInt(0, 17)] + suffix;
	let billagerName1 = prefix[lib0.getRandomInt(0, 17)] + suffix;
	let isNoble = [ '', '', '', (" son of " + billagerName1) ];
	
	var billagerNameMan = billagerName0 + isNoble[lib0.getRandomInt(0, 3)];

	return billagerNameMan;
}

export function generateNameWoman() {
	const prefix = [ "Voz", "Pez", "Kah", "Denh", "Arh", "Az", "Paz", "Goz", "Gaz", "Alz", "Al", "Ir", "Er", "Erh", "Irh", "Dir", "Nir", "Nor" ];
	const presuffix = [ 'mi', "ki", "li", "i", "a", "fi", "u" ];
	const sufsuffix = [ "ra", "la", "thora", "thera", "rra", "ara" ];
	let suffix = presuffix[lib0.getRandomInt(0, 6)] + sufsuffix[lib0.getRandomInt(0, 5)];

	let billagerName0 = prefix[lib0.getRandomInt(0, 17)] + suffix;
	let billagerName1 = prefix[lib0.getRandomInt(0, 17)] + suffix;
	let isNoble = [ '', '', '', (" daughter of " + billagerName1) ];
	
	var billagerNameWoman = billagerName0 + isNoble[lib0.getRandomInt(0, 3)];

	return billagerNameWoman;
}

export function generateNameVillager() {
	const prefix = [ "Voz", "Pez", "Kah", "Denh", "Arh", "Az", "Paz", "Goz", "Gaz", "Alz", "Al", "Ir", "Er", "Erh", "Irh", "Dir", "Nir", "Nor" ];
	const presuffix = [ 'mi', "ki", "li", "i", "a", "fi", "u" ];
	const sufsuffix0 = [ "r", "l", "thor", "ther", "rr", "ar" ];
	const sufsuffix1 = [ "'a", "'la", "'ora", "'era", "'ra", "'ar" ];
	let suffix0 = presuffix[lib0.getRandomInt(0, 6)] + sufsuffix0[lib0.getRandomInt(0, 5)];
	let suffix1 = presuffix[lib0.getRandomInt(0, 6)] + sufsuffix1[lib0.getRandomInt(0, 5)];

	let billagerName0 = prefix[lib0.getRandomInt(0, 17)] + suffix1;
	let billagerName1 = prefix[lib0.getRandomInt(0, 17)] + suffix0;
	
	var billagerNameVillager = billagerName0 + ' ' + billagerName1;

	return billagerNameVillager;
}