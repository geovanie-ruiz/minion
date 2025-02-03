import {
  ActionRowBuilder,
  ChatInputCommandInteraction,
  MessageFlags,
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  type SelectMenuComponentOptionData,
} from "discord.js";
import { getCardsFromName } from "../api/cards";
import { getCollectionId } from "../utils";
import { logger } from "../utils/logger";

export default {
  data: new SlashCommandBuilder()
    .setName("card")
    .setDescription("Search for a Project K card")
    .addStringOption((option) =>
      option
        .setName("card-name")
        .setDescription("Name of a card, preferable including the subtitle")
        .setRequired(true)
        .setMinLength(2)
        .setMaxLength(255)
    ) as SlashCommandBuilder,

  async execute(data: { interaction: ChatInputCommandInteraction }) {
    try {
      const interaction = data.interaction;

      const cardName = interaction.options.getString("card-name")!;
      const cards = await getCardsFromName(cardName);

      if (!cards.miss && cards.cards.length > 0) {
        const options: SelectMenuComponentOptionData[] = cards.cards.map(
          (card) => {
            return {
              label: card.name,
              description: getCollectionId(
                card.set_index,
                card.set_code,
                card.set_total
              ),
              value: `${card.id}`,
            };
          }
        );

        const select =
          new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("cardChoice")
              .setPlaceholder("Nothing selected")
              .addOptions(options)
          );
        await interaction.reply({
          content: "Select a specific card",
          components: [select],
          flags: MessageFlags.Ephemeral,
        });
      } else {
        await interaction.reply({
          content: "No cards found",
          flags: MessageFlags.Ephemeral,
        });
      }
    } catch (e) {
      logger.error(e);
    }
  },
};
