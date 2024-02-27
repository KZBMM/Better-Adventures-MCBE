import * as minecraft_main_server from "@minecraft/server"

export function CheckForPlayerWear() {
    const players = minecraft_main_server.world.getAllPlayers();
    for (const p of players) {
        const equipment = p.getComponent("minecraft:equippable");
        if (equipment) {
            let headwear = equipment.getEquipment(minecraft_main_server.EquipmentSlot.Head);
            let chest = equipment.getEquipment(minecraft_main_server.EquipmentSlot.Chest);
            let leg = equipment.getEquipment(minecraft_main_server.EquipmentSlot.Legs);
            let footwear = equipment.getEquipment(minecraft_main_server.EquipmentSlot.Feet);
            let rightItem = equipment.getEquipment(minecraft_main_server.EquipmentSlot.Mainhand);
            let leftItem = equipment.getEquipment(minecraft_main_server.EquipmentSlot.Offhand);
			if(headwear) {
				switch (headwear?.typeId) {
					case "better:crown_of_nether_king":
						p.addEffect("fire_resistance", 120, {
							amplifier: 1,
						});
						break;
					case "better:count_crown":
					case "better:king_helmet":
						p.addEffect("village_hero", 120, {
							amplifier: 1,
						});
						break;
					default:

				}
			}

        }
    }
}