/**
 * @file discord/events/onInteraction.ts
 * @author dworac <mail@dworac.com>
 *
 * Execute the slash command that was called.
 */
import { Interaction } from 'discord.js';
import Logger from '../../utils/logger';
import commands from '../commands';

export default async (interaction: Interaction): Promise<void> => {
	try {
		if (interaction.isCommand()) {
			const command = commands.get(interaction.commandName);
			if (!command) return;
			await command.execute(interaction);
		}
	} catch (err) {
		if (err instanceof Error) Logger.logError(err);
	}
};
