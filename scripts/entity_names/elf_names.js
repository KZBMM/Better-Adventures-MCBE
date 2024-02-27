import * as lib0 from '../libraries/getRandomInt';

export function generateNameMan() {
	const prefix = function() {
		let a = ["Y'", "A'", "O'", "I'"];
		if (lib0.getRandomInt(0, 10) > 6) {
			return a[lib0.getRandomInt(0, (a.length-1))];
		} else {
			return '';
		}
	};

	const word = ["Mae", "Mhae", "Elle", "Ele", "Lle", "Le", "Coed", "Deil", "Ddeil", "El", "Aurh", "Gwairh", "Tân", "Henaid", "Alda", "Lan", "Fran", "Hal", "Faen", "Afê", "Tï", "Nhï", "Thï", "Goed", "Nghoed", "Ngwairh", "Wairh", "Lin"];
	const addition = ['', "ddros", "on", "as", "o", "o'n", "en", "wyg", "rond", "e'n", "âas", "noro", "rohir", "hîr", "ihir", "rion", "ap", "dir", "lion"];
	const surname = ["Mahlund-haul", "Eiwir", "Ulaine", "na h-aife", "Aelwydcoetir", "Golauhaul", "Eainahw", "Seadmise", "Eôvalgus", "Y'Gwyrdd", "Ddearg", "E'Aine", "A'Ard", "Fâaine", "E'Lea", "E'Leht", "G'Deilen"];

	const interconnection = function() {
		let a = ["an ", "yr ", "y ", "ap ", "yn ", "ym ", "yng "];
		if (lib0.getRandomInt(0, 10) > 5) {
			return a[lib0.getRandomInt(0, (a.length-1))];
		} else {
			return '';
		}
	};

	let elfNameMan = function() {
		if (lib0.getRandomInt(0, 10) > 7) {
			return prefix() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))] + ' ' + interconnection() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))];
		} else if (lib0.getRandomInt(0, 10) > 8) {
			return prefix() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))] + ' ' + interconnection() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))] + ' ' + surname[lib0.getRandomInt(0, (surname.length-1))];
		} else if (lib0.getRandomInt(0, 10) > 8) {
			return prefix() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))] + ' ' + surname[lib0.getRandomInt(0, (surname.length-1))];
		} else {
			return prefix() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))];
		}
	}
	return elfNameMan();
}

export function generateNameWoman() {
	const prefix = function() {
		let a = ["Y'", "A'", "O'", "I'"];
		if (lib0.getRandomInt(0, 10) > 6) {
			return a[lib0.getRandomInt(0, (a.length-1))];
		} else {
			return '';
		}
	};

	const word = ["Blod", "Sead", "Glaod", "Coi", "Ele", "Lle", "Le", "Coed", "Cyn", "Ddail", "Rhi", "Arian", "Cefnyl", "Ar", "Enaid", "Alda", "Lan", "Nghefnyl", "Llyn", "Faen", "Afê", "Taur", "Nhaur", "Thaur", "Goed", "Nghoed", "Nglaod", "Aod", "Cla"];
	const addition = ["ane", "wen", "annon", "ariel", "iel", "wyn", "ena", "îe", "gaeth", "taf", "au", "të", "daire", "haire", "nor", "as", "ach", "ra"];
	const surname = ["Mahlund-haul", "Eiwir", "Ulaine", "na h-aife", "Aelwydcoetir", "Golauhaul", "Eainahw", "Seadmise", "Eôvalgus", "Y'Gwyrdd", "Ddearg", "E'Aine", "A'Ard", "Fâaine", "E'Lea", "E'Leht", "G'Deilen"];

	const interconnection = function() {
		let a = ["an ", "yr ", "y ", "ach ", "yn ", "ym ", "yng "];
		if (lib0.getRandomInt(0, 10) > 5) {
			return a[lib0.getRandomInt(0, (a.length-1))];
		} else {
			return '';
		}
	};

	let elfNameWoman = function() {
		if (lib0.getRandomInt(0, 10) > 7) {
			return prefix() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))] + ' ' + interconnection() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))];
		} else if (lib0.getRandomInt(0, 10) > 8) {
			return prefix() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))] + ' ' + interconnection() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))] + ' ' + surname[lib0.getRandomInt(0, (surname.length-1))];
		} else if (lib0.getRandomInt(0, 10) > 8) {
			return prefix() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))] + ' ' + surname[lib0.getRandomInt(0, (surname.length-1))];
		} else {
			return prefix() + word[lib0.getRandomInt(0, (word.length-1))] + addition[lib0.getRandomInt(0, (addition.length-1))];
		}
	}
	
	return elfNameWoman();
}