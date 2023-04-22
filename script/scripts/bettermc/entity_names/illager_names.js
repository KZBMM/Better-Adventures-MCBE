
import * as minecraft_main_server from '@minecraft/server';
import * as minecraft_main_ui from '@minecraft/server-ui';


function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

export function generateName() {
	let prefix = [ "El", "Er", "Ar", "Har", "Var", "Il", "Al", "Ver", "Ner", "Ger", "La", "Van", "Gav", "Her", "Ir", "Sar", "Nir", "Nor", "Eur", "Vin", "Pil" ];
	let presuffix = [ '-ar', "-eur", "-er", "-a", "-var", "-ker", "-ger", "-vo", "-dica", "-di", "-ca", "-usio", "-an" ];
	let sufsuffix = [ "-ger", "-ner", "-er", "-ar", "-tor", "-ker", "-nist", "-ist" ];
	let suffix = presuffix[getRandomInt(0, 12)] + sufsuffix[getRandomInt(0, 7)];

	let illagerName = prefix[getRandomInt(0, 20)] + suffix;

	return illagerName;
}
