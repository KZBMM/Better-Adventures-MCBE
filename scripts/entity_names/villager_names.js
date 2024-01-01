import * as minecraft_main_server from '@minecraft/server';
import * as lib0 from '../libraries/getRandomInt';

export function generateChooseName(entity) {
    if (entity.getComponent("minecraft:skin_id").value == 0 || entity.getComponent("minecraft:skin_id").value == 6) {
        let prefix = ["Ki", "La", "Ar", "Györ", "Lász", "Mi", "Gro", "Ist", "Bé", "Vi", "Zso", "Si", "Gi", "Ra", "Pa", "Ma"];
        let sufix = ["s", "jos", "pád", "gy", "lo", "lán", "fo", "ván", "la", "czo", "lt", "món", "ngi"];
    
        let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
        return name; 
    } else if ((entity.getComponent("minecraft:skin_id").value > 0 && entity.getComponent("minecraft:skin_id").value < 6) || entity.getComponent("minecraft:skin_id").value == 7) {
        let prefix = ["Ki", "La", "Ar", "Györ", "Lász", "Mi", "Gro", "Is", "Bé", "Vi", "Zso", "Si", "Gi", "Ra", "Pa", "Ma"];
        let sufix = ["sa", "jla", "zsiká", "gyina", "ná", "cza", "füt", "tena", "lika", "czá", "zsa", "móna", "na"];
    
        let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
        return name;
    }
}

export function generateNameMale() {
    let prefix = ["Ki", "La", "Ar", "Györ", "Lász", "Mi", "Gro", "Ist", "Bé", "Vi", "Zso", "Si", "Gi", "Ra", "Pa", "Ma"];
    let sufix = ["s", "jos", "pád", "gy", "lo", "lán", "fo", "ván", "la", "czo", "lt", "món", "ngi"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}

export function generateNameFemale() {
    let prefix = ["Ki", "La", "Ar", "Györ", "Lász", "Mi", "Gro", "Is", "Bé", "Vi", "Zso", "Si", "Gi", "Ra", "Pa", "Ma"];
    let sufix = ["sa", "jla", "zsiká", "gyina", "ná", "cza", "füt", "tena", "lika", "czá", "zsa", "móna", "na"];

    let name = prefix[lib0.getRandomInt(0, (prefix.length -1))] + sufix[lib0.getRandomInt(0, (sufix.length -1))];
    return name;
}