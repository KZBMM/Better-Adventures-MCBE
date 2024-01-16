import * as minecraft_main_server from '@minecraft/server';
import * as villager_names from './entity_names/villager_names';
import * as illager_names from './entity_names/illager_names';
import * as elf_names from './entity_names/elf_names';
import * as dwarf_names from './entity_names/dwarf_names';
import * as red_folk_names from './entity_names/red_folk_names';
import * as billager_names from './entity_names/billager_names';
import * as gnome_names from './entity_names/gnome_names';

export function entityNameTag(entity) {
    if (!entity.hasTag("named")) {
		switch (entity.typeId) {
			case 'minecraft:villager_v2':
				entity.nameTag = villager_names.generateChooseName(entity);
				break;
			case 'better:warrior':
			case 'better:archer':
				entity.nameTag = villager_names.generateNameMale();
				break;
			case 'better:count':
				entity.nameTag = "Count " + villager_names.generateNameMale() + " of the Castle";
				break;
			case 'better:heavy':
				entity.nameTag = "Knight " + villager_names.generateNameMale() + " of the Village";
				break;
  			case 'better:girl_warrior':
 			case 'better:villager_witch':
  			case 'minecraft:witch':
				entity.nameTag = villager_names.generateNameFemale();
				break;
			case 'minecraft:pillager':
			case 'minecraft:vindicator':
			case 'better:sollillager':
			case 'better:iceologer':
			case 'better:pirate':
			case 'better:pirate_sword':
				entity.nameTag = illager_names.generateName();
				break;
			case 'minecraft:evocation_illager':
				entity.nameTag = "Lord " + illager_names.generateName();
				break;
			case 'better:illusionist':
				entity.nameTag = "High-Lord " + illager_names.generateName();
				break;
			case 'better:illusioner':
				entity.nameTag = "Tza-ar " + illager_names.generateName();
				break;
			case 'better:elfm':
			case 'better:elf_warrior':
			case 'better:elf_musician':
			case 'better:party_elf_man':
			case 'better:dark_elf_male':
				entity.nameTag = elf_names.generateNameMan();
				break;
			case 'better:elff':
			case 'better:wood_knight':
			case 'better:elf_singer':
			case 'better:party_elf_woman':
			case 'better:dark_elf_female':
				entity.nameTag = elf_names.generateNameWoman();
				break;
			case 'better:dwarf_hireable_warrior':
			case 'better:dwarf_best_smith':
			case 'better:alpine_dwarf_bartender':
			case 'better:alpine_dwarf_in_tavern':
			case 'better:alpine_dwarf_male':
			case 'better:alpine_dwarf_warrior':
			case 'better:mountain_dwarf_in_tavern':
			case 'better:mountain_dwarf_male':
			case 'better:shepherd_dwarf_male':
			case 'better:shepherd_dwarf_sheepmaster':
			case 'better:mountain_dwarf_warrior':
				entity.nameTag = dwarf_names.generateNameMan();
				break;
			case 'better:alpine_dwarf_female':
			case 'better:shepherd_dwarf_female':
			case 'better:mountain_dwarf_female':
				entity.nameTag = dwarf_names.generateNameWoman();
				break;
			case 'better:alpine_dwarf_lord':
			case 'better:mountain_dwarf_lord':
				entity.nameTag = "Lord " + dwarf_names.generateNameMan();
				break;
			case 'better:alpine_dwarf_lady':
			case 'better:mountain_dwarf_lady':
				entity.nameTag = "Lady " + dwarf_names.generateNameWoman();
				break;
			case 'better:red_knight':
			case 'better:humanm':
				entity.nameTag = red_folk_names.generateNameMan();
				break;
			case 'better:red_king':
				entity.nameTag = red_folk_names.generateNameKing();
				break;
			case 'better:red_lord':
				entity.nameTag = "Lord " + red_folk_names.generateNameMan();
				break;
			case 'better:humanf':
				entity.nameTag = red_folk_names.generateNameWoman();
				break;
			case 'better:billager':
			case 'better:billager_warrior':
				entity.nameTag = billager_names.generateNameVillager();
				break;
			case 'better:billager_man':
				entity.nameTag = billager_names.generateNameMan();
				break;
			case 'better:billager_woman':
				entity.nameTag = billager_names.generateNameWoman();
				break;
			case 'better:gnomef':
				entity.nameTag = gnome_names.generateNameWoman();
				break;
			case 'better:gnomem':
			case 'better:gnome_hireable':
				entity.nameTag = gnome_names.generateNameMan();
		}
		entity.addTag("named")
    }
}
