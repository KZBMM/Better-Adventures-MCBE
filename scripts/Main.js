import * as minecraft_main_server from "@minecraft/server";
import * as names from './entityNameTag';
import * as mogus from './mogus';
import * as entity_controllers from './entity_controllers';
import * as spawners from './spawners';

minecraft_main_server.world.afterEvents.entityDie.subscribe((data) => {
	const deadEntity = data.deadEntity;
	entity_controllers.checkDeadEntity(data.deadEntity)
})

minecraft_main_server.world.afterEvents.entitySpawn.subscribe((data) => {
	const entity = data.entity;
	names.entityNameTag(data.entity)
	entity_controllers.checkEntity(data.entity)
	spawners.checkEntitySpawner(data.entity)
})

minecraft_main_server.world.afterEvents.playerSpawn.subscribe(() => {
	mogus.playerRoadmeet()
})