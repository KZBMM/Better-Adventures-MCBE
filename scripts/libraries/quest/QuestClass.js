
import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';
import * as minecraft_main_server from '@minecraft/server';

//Gather Quest Class

export function Gather(selectedPlayer) {
	selectedPlayer.setDynamicProperty("better:is_questing_gather", true);

	this.typeId = "";
	this.gatherItem = "";
	this.gatherAmount = 0;
	this.questText = "";
	this.returnItemType = "";
	this.terminateQuest = function() {
		selectedPlayer.setDynamicProperty("better:is_questing_gather", false);
		selectedPlayer.setDynamicProperty("better:activeGatherQuest", undefined);
	};
	this.openUi = function() {
		const form = new ActionFormData();
		form.title("Gather Quest");
		form.body(this.questText);
		form.button("Complete Quest", "textures/ui/confirm");
		form.button("Abandon Quest", "textures/ui/cancel");
		form.show(selectedPlayer).then((response) => {
			switch (response.selection) {
				case 0:
					let playerInventory = selectedPlayer.getComponent("minecraft:inventory").container;
					let currentStack = undefined;
					for (let i = 0; i < playerInventory.size; i++) {
						currentStack = playerInventory.getItem(i);
						if (currentStack?.typeId == this.gatherItem[0] && currentStack?.amount >= this.gatherAmount) {
							if (currentStack?.amount > this.gatherAmount) {
								let newStack = currentStack;
								newStack.amount = newStack.amount - this.gatherAmount;
								playerInventory.setItem(i, newStack);
							} else if (currentStack?.amount == this.gatherAmount) {
								playerInventory.setItem(i, undefined);
							}
							selectedPlayer.runCommandAsync('title @s title Quest Completed');
							this.terminateQuest();
							let itemHeld = new minecraft_main_server.ItemStack(this.returnItemType, 1);
							selectedPlayer.getComponent("minecraft:equippable").setEquipment(minecraft_main_server.EquipmentSlot.Mainhand, itemHeld);
							return;
						}
					}
					selectedPlayer.runCommandAsync('title @s actionbar You have not gathered all the items yet to complete the quest.');
					break;

				case 1:
					selectedPlayer.runCommandAsync('title @s title Quest Abandoned');
					this.terminateQuest();
					selectedPlayer.getComponent("minecraft:equippable").setEquipment(minecraft_main_server.EquipmentSlot.Mainhand, undefined);
					break;

				default:
					// Use this when your button doesn't have a function yet
					// You don't need to use "break" on default case
					// Remember to place the default on very bottom
			}
		});
	}
}

//Slayyyy
//Wtf
//French Republik
//Basically a Hunt Quest -->

export function Hunt(selectedPlayer) {
	selectedPlayer.setDynamicProperty("better:is_questing_hunt", true);
	selectedPlayer.setDynamicProperty("better:hunt_quest_killed_entities", 0);
	
	this.typeId = '';
	this.killEntityTypeId = '';
	this.killEntityAmount = 0;
	this.questText = '';
	this.returnItemType = "";
	this.terminateQuest = function() {
		selectedPlayer.setDynamicProperty("better:is_questing_hunt", false);
		selectedPlayer.setDynamicProperty("better:activeHuntQuest", undefined);
		selectedPlayer.setDynamicProperty("better:hunt_quest_killed_entities", undefined);
	};
	this.openUi = function() {
		const form = new ActionFormData();
		form.title("Hunt Quest");
		form.body(this.questText);
		form.button("Complete Quest", "textures/ui/confirm");
		form.button("Abandon Quest", "textures/ui/cancel");
		form.show(selectedPlayer).then((response) => {
			switch (response.selection) {
				case 0:
					
					break;
				
				case 1:
					selectedPlayer.runCommandAsync('title @s title Quest Abandoned');
					this.terminateQuest();
					selectedPlayer.getComponent("minecraft:equippable").setEquipment(minecraft_main_server.EquipmentSlot.Mainhand, undefined);
					break;
					
				default:
					// Yeah, really no use for this thing here
					// I keep it just so more actions are added to the quest UI
					// Won't happen probably any time soon
					
			}
		});
	}
}