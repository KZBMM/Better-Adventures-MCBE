import * as minecraft_main_server from '@minecraft/server';
import * as dim from './libraries/dimension';
import * as lib0 from './libraries/getRandomInt';
import * as lib1 from './libraries/calcDistance'

export function checkEntitySpawner(entity) {
	switch (entity.typeId) {
		case 'better:spawn_midge':
			for (let i = 0; i < lib0.getRandomInt(1, 5); i++) {
				let midge = dim.overworld.spawnEntity('better:midge', entity.getHeadLocation());
			}
			entity.remove();
			break;
		case 'better:fox_chicken':
			let rndInt = lib0.getRandomInt(1, 10);
			let spawnLoc = {
				x: entity.getHeadLocation().x,
				y: 0,
				z: entity.getHeadLocation().z
			};
			if (rndInt > 5) {
				spawnLoc.x += lib0.getRandomInt(10, 16);
			} else {
				spawnLoc.x += lib0.getRandomInt(-16, -10);
			}
			rndInt = lib0.getRandomInt(1, 10);
			if (rndInt > 5) {
				spawnLoc.z += lib0.getRandomInt(10, 16);
			} else {
				spawnLoc.z += lib0.getRandomInt(-16, -10);
			}
			for (spawnLoc.y = 255; spawnLoc.y >= 0; spawnLoc.y = spawnLoc.y - 1) {
				if (!dim.overworld.getBlock(spawnLoc).isAir) {
					if (!dim.overworld.getBlock(spawnLoc).isLiquid) {
						spawnLoc.y++;
						break;
					}
				}
			}
			let fox = dim.overworld.spawnEntity('minecraft:fox<minecraft:hunt_chicken>', spawnLoc)
			entity.remove();
			break;
		default:
			
	}
}
