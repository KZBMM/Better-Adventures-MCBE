import * as lib0 from '../../libraries/getRandomInt';

export function generateNameMale() {
    let prefix = ["Václav", "Jiří", "Miroslav", "Tomáš", "Pavel", "Josef", "Milan", "Lukáš", "Jakub", "Martin", "Andreas", "Wolfgang", "Klaus", "Matthias", "Makyta", "Heidlberg", "Hans", "Karl"];
    let trans = [" van des ", " von dem ", "ov ", "ův ", " von ", ' '];

    let name = [prefix[lib0.getRandomInt(0, (prefix.length - 1))] + trans[lib0.getRandomInt(0, (trans.length - 1))] + prefix[lib0.getRandomInt(0, (prefix.length - 1))], prefix[lib0.getRandomInt(0, (prefix.length - 1))]];
    return name[lib0.getRandomInt(0, (name.length - 1))];
}

export function generateNameFemale() {
    let prefix = ["Ev", "Jan", "Ann", "Lenk", "Martin", "Luci", "Iren", "Zuzan", "Mári", "Katarín", "Michael", "Silvi", "Sabin", "Ingrid", "Monik", "Beatric", "Dank"];
    let name = function() {
        let mod = prefix[lib0.getRandomInt(0, (prefix.length - 1))];
        if (mod == prefix[5] || mod == prefix[12] || mod == prefix[15]) {
            return mod + 'e';
        } else if (mod != prefix[13]) {
            return mod + 'a';
        } else {
            return mod;
        }
    }
    let trans = [name() + " van der " + name(), name() + " von der " + name(), name() + "-" + name(), name() + " " + name(), prefix[lib0.getRandomInt(0, (prefix.length - 1))] + "ina " + name(), name() + " van " + name()];
    if (lib0.getRandomInt(1, 10) > 6) {
        return trans[lib0.getRandomInt(0, trans.length -1)];
    } else {
        return name();
    }
}