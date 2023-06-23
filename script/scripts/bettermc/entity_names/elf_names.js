import * as minecraft_main_server from '@minecraft/server';
import * as lib0 from '../libraries/getRandomInt.js';

export function generateNameMan() {
	let preprefix = [ "A'", "E'", "Ae'", "Ea'", "Y'", "", "", "Ay'", "Ey'", "Ai'", "Yr'", "O'", "G'", '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	let prefix = [ "Argl", "El", "Lô", "Al", "Gwa", "Go", "Theor", "Mae", "Lan", "Faen", "Afe", "A", "E", "L", "Le", "Efe", "Lefe", "Eai", "Mahl", "Sead", "Eôval", "Goed", "Coed", "Hal", "Dei", "Gw", "Dde", "Af", "Ffâ", "N" ];
	let suffix = [ "wydd", "eon", "a'as", "iwf", "eas", "daon", "ir", "lau", "fycy", "ddros", "ihir", "hael", "noro", "on", "leon", "leas", "las", "glas", "und", "gus", "wig", "den", "en", "len", "ach", "arg", "ain", "e"  ];
	let surnamePrefix = [ "an ", '', '', '', '', '', '', '', '', '', '', '' ]
	let surnameSuffix = [ "'u", "-haul", " Eiwir", " Ulaine", " na h-aife", " Aelwydcoetir", '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	let chooseSurname = surnamePrefix[lib0.getRandomInt(0, 11)] + preprefix[lib0.getRandomInt(0, 25)] + prefix[lib0.getRandomInt(0, 29)] + suffix[lib0.getRandomInt(0, 27)] + surnameSuffix[lib0.getRandomInt(0, 18)];
	let selectSurname = [ '', (' ' + chooseSurname) ];

	var elfNameMan = preprefix[lib0.getRandomInt(0, 25)] + prefix[lib0.getRandomInt(0, 29)] + suffix[lib0.getRandomInt(0, 27)] + selectSurname[lib0.getRandomInt(0, 1)];

	return elfNameMan;
}

export function generateNameWoman() {
	let preprefix = [ "A'", "E'", "Ae'", "Ea'", "Y'", "Ie'", "Ia'", "Ay'", "Ey'", "Ai'", "Yr'", "O'", "G'", '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	let prefix = [ "Sao", "Glaod", "Coi", "Al", "Gwa", "Go", "Cyn", "Eu", "Llan", "Faen", "Afe", "A", "E", "L", "Le", "Efe", "Lefe", "Eai", "Cla", "Sead", "Ar", "Tau", "Coed", "Cefnyl", "Dei", "Gw", "Dde", "Af", "Ffâ", "N", "Rhi" ];
	let suffix = [ "na", "eona", "a'asa", "mise", "si", "daona", "a", "lana", "nêa'na", "taf", "gaeth", "haire", "nora", "ona", "leona", "lesa", "i", "glasa", "one", "ane", "ra", "dna", "eiel", "lena", "aiel", "riel", "aine", "e", "the", "raidd", "wen", "annon"  ];

	let surnamePrefix = [ "an ", '', '', '', '', '', '', '', '', '', '', '' ]
	let surnameSuffix = [ "'u", "-haul", " Eiwir", " Ulaine", " na h-aife", " Aelwydcoetir", '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	let chooseSurname = surnamePrefix[Math.round((Math.random() * 11) + 0)] + preprefix[Math.round((Math.random() * 25) + 0)] + prefix[Math.round((Math.random() * 30) + 0)] + suffix[Math.round((Math.random() * 31) + 0)] + surnameSuffix[Math.round((Math.random() * 18) + 0)];
	let selectSurname = [ '', (' ' + chooseSurname) ];

	var elfNameWoman = preprefix[Math.round((Math.random() * 25) + 0)] + prefix[Math.round((Math.random() * 30) + 0)] + suffix[Math.round((Math.random() * 31) + 0)] + selectSurname[Math.round((Math.random() * 1) + 0)];

	return elfNameWoman;
}