import * as minecraft_main_server from '@minecraft/server';
import * as lib0 from '../libraries/getRandomInt';
import * as vp from './biome_dependent/v_plains';
import * as vd from './biome_dependent/v_desert';
import * as vj from './biome_dependent/v_jungle';
import * as vs from './biome_dependent/v_savanna';
import * as vsn from './biome_dependent/v_snow';
import * as vsw from './biome_dependent/v_swamp';
import * as vt from './biome_dependent/v_taiga';

export function generateChooseName(entity) {
    if (entity.getComponent("minecraft:skin_id").value == 0 || entity.getComponent("minecraft:skin_id").value == 6) {
        return generateNameMale(entity); 
    } else if ((entity.getComponent("minecraft:skin_id").value > 0 && entity.getComponent("minecraft:skin_id").value < 6) || entity.getComponent("minecraft:skin_id").value == 7) {
        return generateNameFemale(entity);
    }
}

export function generateNameMale(entity) {
    switch (entity.getComponent("minecraft:mark_variant").value) {
        case 1:
            return vd.generateNameMale();
            break;
        case 2:
            return vj.generateNameMale();
            break;
        case 3:
            return vs.generateNameMale();
            break;
        case 4:
            return vsn.generateNameMale();
            break;
        case 5:
            return vsw.generateNameMale();
            break;
        case 6:
            return vt.generateNameMale();
            break;
        default:
            return vp.generateNameMale();
    }
}

export function generateNameFemale(entity) {
    switch (entity.getComponent("minecraft:mark_variant").value) {
        case 1:
            return vd.generateNameFemale();
            break;
        case 2:
            return vj.generateNameFemale();
            break;
        case 3:
            return vs.generateNameFemale();
            break;
        case 4:
            return vsn.generateNameFemale();
            break;
        case 5:
            return vsw.generateNameFemale();
            break;
        case 6:
            return vt.generateNameFemale();
            break;
        default:
            return vp.generateNameFemale();
    }
}