import * as minecraft_main_server from '@minecraft/server';
import * as villager_names from './entity_names/villager_names.js';
import * as illager_names from './entity_names/illager_names.js';
import * as elf_names from './entity_names/elf_names.js';
import * as dwarf_names from './entity_names/dwarf_names.js';
import * as red_folk_names from './entity_names/red_folk_names.js';
import * as billager_names from './entity_names/billager_names.js';

export function entityNameTag() {
    const entities = Array.from(minecraft_main_server.world.getDimension("overworld").getEntities())
    for (const entity of entities) {
        if (!entity.hasTag("named")) {
            if (entity.typeId == 'minecraft:villager_v2' || entity.typeId == 'better:warrior' || entity.typeId == 'better:girl_warrior' || entity.typeId == 'better:villager_witch' || entity.typeId == 'minecraft:witch' || entity.typeId == 'better:archer' || entity.typeId == 'better:villager_slave') {
                entity.nameTag = villager_names.generateName()
            } else if (entity.typeId == 'better:count') {
                entity.nameTag = "Count " + villager_names.generateName() + " of the Castle"
            } else if (entity.typeId == 'better:heavy') {
                entity.nameTag = "Knight " + villager_names.generateName() + " of the Village"
            } else if (entity.typeId == 'minecraft:pillager' || entity.typeId == 'minecraft:vindicator' || entity.typeId == 'better:sollillager' || entity.typeId == 'better:iceologer' || entity.typeId == 'better:pirate' || entity.typeId == 'better:pirate_sword') {
                entity.nameTag = illager_names.generateName()
            } else if (entity.typeId == 'minecraft:evocation_illager') {
                entity.nameTag = "Lord " + illager_names.generateName()
            } else if (entity.typeId == 'better:illusionist') {
                entity.nameTag = "High-Lord " + illager_names.generateName()
            } else if (entity.typeId == 'better:illusioner') {
                entity.nameTag = "Tza-ar " + illager_names.generateName()
            } else if (entity.typeId == 'better:elfm' || entity.typeId == 'better:elf_warrior' || entity.typeId == 'better:elf_musician' || entity.typeId == 'better:party_elf_man' || entity.typeId == 'better:dark_elf_male') {
                entity.nameTag = elf_names.generateNameMan()
            } else if (entity.typeId == 'better:elff' || entity.typeId == 'better:wood_knight' || entity.typeId == 'better:elf_singer' || entity.typeId == 'better:party_elf_woman' || entity.typeId == 'better:dark_elf_female') {
                entity.nameTag = elf_names.generateNameWoman()
            } else if (entity.typeId == 'better:dwarf_hireable_warrior' || entity.typeId == 'better:dwarf_best_smith' || entity.typeId == 'better:alpine_dwarf_bartender' || entity.typeId == 'better:alpine_dwarf_in_tavern' || entity.typeId == 'better:alpine_dwarf_male' || entity.typeId == 'better:alpine_dwarf_warrior' || entity.typeId == 'better:mountain_dwarf_in_tavern' || entity.typeId == 'better:mountain_dwarf_male' || entity.typeId == 'better:mountain_dwarf_warrior') {
                entity.nameTag = dwarf_names.generateNameMan()
            } else if (entity.typeId == 'better:alpine_dwarf_female' || entity.typeId == 'better:mountain_dwarf_female') {
                entity.nameTag = dwarf_names.generateNameWoman()
            } else if (entity.typeId == 'better:alpine_dwarf_lord' ||  entity.typeId == 'better:mountain_dwarf_lord') {
                entity.nameTag = "Lord " + dwarf_names.generateNameMan()
            } else if (entity.typeId == 'better:alpine_dwarf_lady' || entity.typeId == 'better:mountain_dwarf_lady') {
                entity.nameTag = "Lady " + dwarf_names.generateNameWoman()
            } else if (entity.typeId == 'better:red_knight' || entity.typeId == 'better:humanm') {
                entity.nameTag = red_folk_names.generateNameMan()
            } else if (entity.typeId == 'better:red_king') {
                entity.nameTag = red_folk_names.generateNameKing()
            } else if (entity.typeId == 'better:red_lord') {
                entity.nameTag = "Lord " + red_folk_names.generateNameMan()
            } else if (entity.typeId == 'better:humanf') {
                entity.nameTag = red_folk_names.generateNameWoman()
            } else if (entity.typeId == 'better:billager') {
                entity.nameTag = billager_names.generateNameVillager()
            } else if (entity.typeId == 'better:billager_warrior') {
                entity.nameTag = billager_names.generateNameVillager()
            } else if (entity.typeId == 'better:billager_man') {
                entity.nameTag = billager_names.generateNameMan()
            } else if (entity.typeId == 'better:billager_woman') {
                entity.nameTag = billager_names.generateNameWoman()
            }
            entity.addTag("named")
        }
    }
}
