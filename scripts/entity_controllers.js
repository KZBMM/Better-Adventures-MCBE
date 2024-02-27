import * as minecraft_main_server from '@minecraft/server';
import * as dim from './libraries/dimension';
import * as lib0 from './libraries/getRandomInt';
import * as quests from './quests';

let hb = {
  is_at_power: true
};

hb.is_at_power = checkForHb();

function checkForHb() {
	const players = Array.from((dim.overworld.getPlayers()).concat(dim.nether.getPlayers()));
	for (const player of players) {
		if (player.hasTag("hasKilledHb")) {
			return false;
			break;
		} else {
			return true;
		}
	}
}

export function checkEntity(entity) {
	hb.is_at_power = checkForHb();
    if (hb.is_at_power == false) {
		switch (entity.typeId) {
			case 'better:evil_piglin':
			case 'better:scare':
			case 'better:piglin_giant':
			case 'better:army_zombie':
			case 'better:army_skeleton':
			case 'minecraft:creeper':
			case 'better:boglin':
			case 'better:billager_warrior':
			case 'better:dark_boss':
			case 'better:dark_death':
			case 'hb:hbb':
			case 'hb:hbl':
			case 'better:spawn_entity_hb':
				entity.teleport(
					{ 
						x: entity.getHeadLocation().x,
						y: 0,
						z: entity.getHeadLocation().z,
					}
				);
				entity.remove();
				break;
			case 'better:herobrine':
				hb.is_at_power = true;
				const players = Array.from((dim.overworld.getPlayers()).concat(dim.nether.getPlayers()));
				for (const player of players) {
					player.removeTag("hasKilledHb");
				}
		}
    }
}
export function checkDeadEntity(deadEntity, killEntity) {
	switch (deadEntity.typeId) {
		case 'better:herobrine':
		case 'better:herobrine_end':
			hb.is_at_power = false;
			const players = Array.from((dim.overworld.getPlayers()).concat(dim.nether.getPlayers()));
			for (const player of players) {
				player.addTag("hasKilledHb");
			}
	}
	if (killEntity.typeId === "minecraft:player") {
		quests.IncrementPlayerEntityKillCount(deadEntity, killEntity)
	}
}