import * as minecraft_main_server from '@minecraft/server';
import * as minecraft_main_ui from '@minecraft/server-ui';
import * as names from './entityNameTag.js';

// Here come all the events. NO VARIABLES (or functins) SHALL BE DECLARED IN THIS FILE! If you want a variable, create another file in which it's stored. 

// Subscribe to an event that calls every Minecraft tick
minecraft_main_server.system.runInterval(() => {
    //empty empty...
});

minecraft_main_server.world.events.entitySpawn.subscribe(names.entityNameTag)
