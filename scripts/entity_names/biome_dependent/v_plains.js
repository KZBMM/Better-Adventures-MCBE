import * as lib0 from '../../libraries/getRandomInt';

export function generateNameMale() {
    let prefix = ["Ki", "La", "Ar", "Györ", "Lász", "Mi", "Gro", "Ist", "Bé", "Vi", "Zso", "Si", "Gi", "Ra", "Pa", "Ma", "Gá"];
    let sufix = ["s", "jos", "pád", "gy", "lo", "lán", "fo", "ván", "la", "czo", "lt", "món", "ngi", "bor"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}

export function generateNameFemale() {
    let prefix = ["Ki", "La", "Ar", "Györ", "Lász", "Mi", "Gro", "Is", "Bé", "Vi", "Zso", "Si", "Gi", "Ra", "Er", "Ma", "Né"];
    let sufix = ["sa", "jla", "zsiká", "gyina", "ná", "cza", "mna", "tena", "lika", "czá", "zsa", "móna", "na", "nyi"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}