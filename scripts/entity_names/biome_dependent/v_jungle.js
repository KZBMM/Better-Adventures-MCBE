import * as lib0 from '../../libraries/getRandomInt';

export function generateNameMale() {
    let prefix = ["Aleks", "Niko", "Eero", "Mikk", "Yannis", "Dimitri", "Aris", "Ilias", "Jüri", "Toomas", "Kauri", "Ezra", "Amir"];
    let sufix = ["as", "os", "io", "is", "kos", "noff", "tas", "mir", "lo", "eis", "mar", "el", "ai"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}

export function generateNameFemale() {
    let prefix = ["Athena", "Kaisa", "Lumi", "Minna", "Sophia", "Elena", "Katerina", "Liis", "Mai", "Siiri", "Katrin", "Noa", "Talia"];
    let sufix = ["ra", "e", "a", "na", "raia", "nne", "i", "tä", "li", "se", "leen", "el", "aiah"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}