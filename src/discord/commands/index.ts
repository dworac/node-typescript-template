import { Collection } from 'discord.js';
import ping from './ping';
import { Command } from './Command';

const commands = [ping];

const collection = new Collection<string, Command>();

commands.forEach((command) => {
	collection.set(command.data.name, command);
});

export default collection;
