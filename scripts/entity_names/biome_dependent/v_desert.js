import * as lib0 from '../../libraries/getRandomInt';

export function generateNameMale() {
    let prefix = ["Yirmē", "Tobiy", "Micha", "Eloh", "Ye", "Bajāz", "Șidqï", "Yah", "Gabri", "Ysh", "Ya'", "Daw", "Ad", "Fag"];
    let sufix = ["yāhu", "el", "im", "ša", "id", "ayhû", "weh", "āq", "qōb", "ām", "in"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}

export function generateNameFemale() {
    let prefix = ["Śerā", "Mir", "Micha", "Haw", "Est", "Mori", "Na'", "Rachē", "Gabrï", "Zachā", "Han", "Ziv", "Natā", "Yōšû"];
    let sufix = ["yāh", "l", "yām", "ida", "it", "āva", "wāh", "raz", "er", "elâ"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}