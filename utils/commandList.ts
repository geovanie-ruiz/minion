import type {
  CommandInteraction,
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";
import cardFinder from "../commands/cardFinder";
import ping from "../commands/ping";

export interface SlashCommand {
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
  execute(data: { interaction: CommandInteraction }): Promise<void>;
}

export const CommandList: SlashCommand[] = [cardFinder, ping];
