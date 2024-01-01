import * as minecraft_main_server from '@minecraft/server';
import * as dim from './libraries/dimension';

export function tick() {
	const players = Array.from(dim.overworld.getPlayers())
	for (const player of players) {
		player.runCommandAsync('function tick_for_mogus');
	}
}

export function playerRoadmeet() {
	const players = Array.from(dim.overworld.getPlayers())
	for (const player of players) {
		if (!player.hasTag("hasJoined")) {
			player.teleport(
				{ 
					x: 0,
					y: 256,
					z: 0,
				}
			);
			const mogus = dim.overworld.spawnEntity("better:mogus", {
				x: 0,
				y: 255,
				z: 0,
			});
			player.addEffect(minecraft_main_server.EffectTypes.get('resistance'), 200, {
				amplifier: 128,
			});
			player.addTag("hasJoined");
		}
	}
}