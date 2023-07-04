import * as lib0 from '../libraries/getRandomInt';

export function generateNameMan() {
	let prefix = [ "Now", "El", "Loo", "Al", "Gwa", "Go", "Tör", "Mae", "Elw", "Faen", "Laure", "Á", "E", "L", "Le", "Efe", "Lefe", "Eai", "Olw", "Sead", "Ööval", "Nów", "Coed", "Hal", "Dei", "Rú", "Jõe", "Af", "Ffâ", "N" ];
	let suffix = [ "saar", "eon", "a'as", "juv", "eas", "daon", "ir", "lau", "viku", "dhros", "findelë", "hael", "noro", "on", "leon", "leas", "las", "glas", "und", "gus", "ë", "den", "en", "len", "ap", "mil", "ain", "ë"  ];
	let surnamePrefix = [ "an ", 'seni ', "", "", '', '', '', '', '', '', '', '' ]
	let chooseSurname = surnamePrefix[lib0.getRandomInt(0, 11)] + prefix[lib0.getRandomInt(0, 29)] + suffix[lib0.getRandomInt(0, 27)]
	let selectSurname = [ '', (' ' + chooseSurname) ];

	var elfNameMan = prefix[lib0.getRandomInt(0, 29)] + suffix[lib0.getRandomInt(0, 27)] + selectSurname[lib0.getRandomInt(0, 1)];

	return elfNameMan;
}

export function generateNameWoman() {
	let prefix = [ "Sao", "Glaod", "Coi", "Al", "Nú", "Go", "Vaness", "Eu", "Llan", "Faen", "Afe", "La", "Ka", "L", "Lo", "Efe", "Lefe", "Eai", "Kla", "Sead", "Ar", "Tau", "Vean", "Kefnyl", "Fann", "El", "Vani", "Af", "Ffâ", "N", "Al" ];
	let suffix = [ "na", "eona", "nórë", "mise", "si", "daona", "sanae", "lana", "nêa'na", "menä", "ach", "ména", "ssa", "sen", "leona", "lesa", "ï", "glasa", "one", "ë", "ra", "dna", "eielï", "leena", "aiõl", "win", "aine", "e", "ma", "melda", "la", "tta"  ];

	let surnamePrefix = [ "an ", 'ä ', '', '', '', '', '', '', '', '', '', '' ]
	let chooseSurname = surnamePrefix[Math.round((Math.random() * 11) + 0)] + prefix[Math.round((Math.random() * 30) + 0)] + suffix[Math.round((Math.random() * 31) + 0)];
	let selectSurname = [ '', (' ' + chooseSurname) ];

	var elfNameWoman = prefix[Math.round((Math.random() * 30) + 0)] + suffix[Math.round((Math.random() * 31) + 0)] + selectSurname[Math.round((Math.random() * 1) + 0)];

	return elfNameWoman;
}