import * as minecraft_main_server from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';
import * as quests from './quests';

export function ItemOnUse(player, items) {
	switch (items?.typeId) {
		case "better:town_gather_quest":
			quests.townGatherQuest(player);
			break;
			
		case "better:town_hunt_quest":
			quests.townHuntQuest(player);
			break;
			
		default:
		
		
	}
}