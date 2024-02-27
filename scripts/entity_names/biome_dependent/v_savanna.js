import * as lib0 from '../../libraries/getRandomInt';

export function generateNameMale() {
    let prefix = ["Ki", "La", "Aar", "Ge", "Laas", "Mi", "Graa", "Tahan", "Val", "Võidu", "Pelö", "Ki", "Ing", "Ral"];
    let sufix = ["saal", "jõn", "ne", "org", "lo", "laan", "fik", "sed", "ge", "mees", "es", "mään", "ver", "nõõ"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}

export function generateNameFemale() {
    let prefix = ["Ki", "La", "Aar", "Ge", "Laas", "Mi", "Graa", "Tahan", "Val", "Võidu", "Pelü", "Ki", "Ing", "Ral"];
    let sufix = ["sälee", "jeena", "nee", "orgiia", "naa", "lvänae", "nen", "sea", "meena", "meesa", "esnee", "naine", "ve", "ei"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}