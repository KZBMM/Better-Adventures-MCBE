import * as minecraft_main_server from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';
import * as names from './entityNameTag.js';
import * as mogus from './mogus.js';
import * as entity_controllers from './entity_controllers.js';
import * as spawners from './spawners.js';
import * as armour_effects from './armour_effects.js';
import * as item_controllers from './item_controllers.js';

minecraft_main_server.world.afterEvents.itemUse.subscribe(data => {
	let { source: player } = data;
    let items = player.getComponent("minecraft:equippable").getEquipment(minecraft_main_server.EquipmentSlot.Mainhand);
	item_controllers.ItemOnUse(player, items);
});

minecraft_main_server.system.runInterval(() => {
    armour_effects.CheckForPlayerWear();
}, 100);

minecraft_main_server.world.afterEvents.entityDie.subscribe((data) => {
	const deadEntity = data.deadEntity;
	entity_controllers.checkDeadEntity(data.deadEntity, data.damageSource.damagingEntity)
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

//Custom Commands !command

minecraft_main_server.world.beforeEvents.chatSend.subscribe((eventData) => {
	const player = eventData.sender;
	switch (eventData.message) {
		case '!ClearDynamicProps':
			eventData.cancel = true;
			player.clearDynamicProperties();
			player.runCommandAsync('say Cleared all my Dynamic Properties');
			break;

		default: break;
	}
});