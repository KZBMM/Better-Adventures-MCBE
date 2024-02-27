import * as lib0 from '../../libraries/getRandomInt';

export function generateNameMale() {
    let prefix = ["Bori", "Vladi", "Ter", "Kru", "Ase", "Iva", "Konsta", "Geo", "Ka", "Iva", "To"];
    let sufix = ["slav", "vel", "m", "n", "ylo", "ntin", "rgi", "lin", "dor"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}

export function generateNameFemale() {
    let prefix = ["Desi", "Ger", "Rosi", "Iskr", "Lyu", "Mili", "Sta", "Ned", "Pe", "Rad", "Sve", "Vesel"];
    let sufix = ["slava", "gana", "tsa", "a", "bka", "nka", "tla"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}