import * as minecraft_main_server from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';
import * as Quest from './libraries/quest/QuestClass';
import * as questConstants from './libraries/quest/questConstants';
import * as lib0 from './libraries/getRandomInt';

export function RecoverGatherQuest(player) {
	let activeGatherQuest = new Quest.Gather(player);
	activeGatherQuest.gatherItem = JSON.parse(player.getDynamicProperty("better:activeGatherQuest")).gatherItem;
	activeGatherQuest.gatherAmount = JSON.parse(player.getDynamicProperty("better:activeGatherQuest")).gatherAmount;
	activeGatherQuest.questText = JSON.parse(player.getDynamicProperty("better:activeGatherQuest")).questText;
	activeGatherQuest.returnItemType = JSON.parse(player.getDynamicProperty("better:activeGatherQuest")).returnItemType;
	activeGatherQuest.typeId = JSON.parse(player.getDynamicProperty("better:activeGatherQuest")).typeId;

	activeGatherQuest.openUi();
}
export function RecoverHuntQuest(player) {
	let activeHuntQuest = new Quest.Hunt(player);
	activeHuntQuest.killEntityTypeId = JSON.parse(player.getDynamicProperty("better:activeHuntQuest")).killEntityTypeId;
	activeHuntQuest.killEntityAmount = JSON.parse(player.getDynamicProperty("better:activeHuntQuest")).killEntityAmount;
	activeHuntQuest.questText = JSON.parse(player.getDynamicProperty("better:activeHuntQuest")).questText;
	activeHuntQuest.returnItemType = JSON.parse(player.getDynamicProperty("better:activeHuntQuest")).returnItemType;
	activeHuntQuest.typeId = JSON.parse(player.getDynamicProperty("better:activeHuntQuest")).typeId;

	activeHuntQuest.openUi();
}

export function IncrementPlayerEntityKillCount(entity, player) {
	if (player.getDynamicProperty("better:activeHuntQuest")) {
		if (entity.typeId == JSON.parse(player.getDynamicProperty("better:activeHuntQuest")).killEntityTypeId) {
			let n = player.getDynamicProperty("better:hunt_quest_killed_entities") + 1;
			player.setDynamicProperty("better:hunt_quest_killed_entities", n);
		}
	}
}

export function townGatherQuest(player) {
	if (player.getDynamicProperty("better:is_questing_gather") == true && JSON.parse(player.getDynamicProperty("better:activeGatherQuest")).typeId == "townQuest") {
		RecoverGatherQuest(player);
	} else if (player.getDynamicProperty("better:is_questing_gather") == true && JSON.parse(player.getDynamicProperty("better:activeGatherQuest")).typeId != "townQuest") {
			player.runCommandAsync('title @s actionbar You have to complete your unfinished quests first.');
	} else {
		let activeGatherQuest = new Quest.Gather(player);
		const gatherItems = questConstants.townGatherQuestItems;
		activeGatherQuest.gatherItem = gatherItems[lib0.getRandomInt(0, (gatherItems.length - 1))];
		activeGatherQuest.gatherAmount = lib0.getRandomInt(1, 5);
		const texts = [
			`Dear Residents,\n\nIn light of the recent Illager raid, the Town Council urges all citizens to participate in the collection of§p ${activeGatherQuest.gatherItem[1]}§r, since our town has been severely lacking resources.\n\nWe kindly request all able-bodied individuals to take part in this endeavor.\n\nThank you for your cooperation. Sincerely,\n\n[Városi Rát]\n\n§7Collect §6${activeGatherQuest.gatherAmount} ${activeGatherQuest.gatherItem[1]}`,
			`Dear Residents,\n\nIn light of the recent influx of travelers, the Town Council urges all citizens to participate in the beautification of our town square, since our town has been lacking in aesthetic appeal.\n\nWe kindly request all able-bodied individuals to contribute to this endeavor.\n\nThank you for your cooperation. Sincerely,\n\n[Városi Rát]\n\n§7Assist in collection of §6${activeGatherQuest.gatherAmount} §p${activeGatherQuest.gatherItem[1]}`,
			`Dear Residents,\n\nIn light of the upcoming festival, the Town Council urges all citizens to participate in the preparation of decorations, since our town aims to celebrate in grandeur.\n\nWe kindly request all able-bodied individuals to lend their skills to this task.\n\nThank you for your cooperation. Sincerely,\n\n[Városi Rát]\n\n§7Help gather §6${activeGatherQuest.gatherAmount} ${activeGatherQuest.gatherItem[1]}`,
			`Dear Residents,\n\nIn light of the recent heavy rainfall, the Town Council urges all citizens to participate in the clearing of debris, since our town's pathways have been obstructed.\n\nWe kindly request all able-bodied individuals to assist in this effort.\n\nThank you for your cooperation. Sincerely,\n\n[Városi Rát]\n\n§7Join in gathering §6${activeGatherQuest.gatherAmount} ${activeGatherQuest.gatherItem[1]}`,
			`Dear Residents,\n\nIn light of the growing number of undead attacks, the Town Council urges all citizens to participate in fortifying the town's defenses, since our town's survival is in jeopardy.\n\nWe kindly request all able-bodied individuals to contribute to our defenses.\n\nThank you for your cooperation. Sincerely,\n\n[Városi Rát]\n\n§7Help gather §6${activeGatherQuest.gatherAmount} ${activeGatherQuest.gatherItem[1]}`,
			`Dear Residents,\n\nIn light of the recent shortage of§p ${activeGatherQuest.gatherItem[1]}§r, the Town Council urges all citizens to participate in mining expeditions, since our town's prosperity depends on these precious resources.\n\nWe kindly request all able-bodied individuals to join the mining efforts.\n\nThank you for your cooperation. Sincerely,\n\n[Városi Rát]\n\n§7Assist in gathering §6${activeGatherQuest.gatherAmount} ${activeGatherQuest.gatherItem[1]}`
		];
		activeGatherQuest.questText = texts[lib0.getRandomInt(0, (texts.length - 1))];
		activeGatherQuest.returnItemType = "better:town_gather_quest_complete";
		activeGatherQuest.typeId = "townQuest";

		activeGatherQuest.openUi();
		player.setDynamicProperty("better:activeGatherQuest", JSON.stringify(activeGatherQuest));
	}
}

export function townHuntQuest(player) {
	if (player.getDynamicProperty("better:is_questing_hunt") == true && JSON.parse(player.getDynamicProperty("better:activeHuntQuest")).typeId == "townQuest") {
		RecoverHuntQuest(player);
	} else if (player.getDynamicProperty("better:is_questing_hunt") == true && JSON.parse(player.getDynamicProperty("better:activeHuntQuest")).typeId != "townQuest") {
			player.runCommandAsync('title @s actionbar You have to complete your unfinished quests first.');
	} else {
		let activeHuntQuest = new Quest.Hunt(player);
		const killEntities = questConstants.townHuntQuestEntities;
		activeHuntQuest.killEntityTypeId = killEntities[lib0.getRandomInt(0, (killEntities.length - 1))];
		activeHuntQuest.killEntityAmount = lib0.getRandomInt(1, 5);
		const texts = [
			`Placeholder`
		];
		activeHuntQuest.questText = texts[lib0.getRandomInt(0, (texts.length - 1))];
		activeHuntQuest.returnItemType = "better:town_hunt_quest_complete";
		activeHuntQuest.typeId = "townQuest";

		activeHuntQuest.openUi();
		player.setDynamicProperty("better:activeHuntQuest", JSON.stringify(activeHuntQuest));
	}
}