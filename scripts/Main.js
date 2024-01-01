import * as minecraft_main_server from "@minecraft/server";
import * as names from './entityNameTag';
import * as mogus from './mogus';
import * as entity_controllers from './entity_controllers';

minecraft_main_server.world.afterEvents.worldInitialize.subscribe(mogus.tick)

minecraft_main_server.world.afterEvents.playerJoin.subscribe(mogus.tick)

minecraft_main_server.world.afterEvents.entityDie.subscribe((data) => {
	const deadEntity = data.deadEntity;
	entity_controllers.checkDeadEntity(data.deadEntity)
})

minecraft_main_server.world.afterEvents.entitySpawn.subscribe((data) => {
	const entity = data.entity;
	names.entityNameTag(data.entity)
	entity_controllers.checkEntity(data.entity)
	entity_controllers.checkEntitySpawner(data.entity)
})

minecraft_main_server.world.afterEvents.playerSpawn.subscribe(() => {
	mogus.tick()
	mogus.playerRoadmeet()
})