import * as lib0 from '../../libraries/getRandomInt';

export function generateNameMale() {
    let prefix = ["Eber", "Wil", "Al", "Hein", "Fried", "Karl", "Ger", "Rud", "Wol", "Sieg", "Bert", "Hart"];
    let sufix = ["mann", "rich", "bert", "win", "fried", "hard", "old", "wolf", "fried", "sieg", "hold", "brecht", "olf", "helm"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}

export function generateNameFemale() {
    let prefix = ["Brun", "Gi", "Ger", "Adel", "Fri", "Hilde", "Irm", "Si", "Theo", "Wal", "Mat", "Eli"];
    let sufix = ["hilde", "sela", "trud", "heid", "da", "gard", "wyn", "bylle", "dora", "traud", "tilde", "sabeth"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}