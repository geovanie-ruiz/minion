import { Client, Events, type Interaction } from "discord.js";
import { getCardFromId } from "../api/cards";
import { embedCard } from "../embed/embed";
import { logger } from "../utils/logger";

export default {
  event: Events.InteractionCreate,
  handler: async (client: Client, interaction: Interaction) => {
    if (interaction.isStringSelectMenu()) {
      if (interaction.customId === "cardChoice") {
        try {
          await interaction.deferReply();

          const selectedId = parseInt(interaction.values[0]);
          const card = await getCardFromId(selectedId);

          if (card) {
            const embed = embedCard(card);
            await interaction.editReply({ embeds: [embed] });
          } else {
            await interaction.editReply("Card not found.");
          }
        } catch (e) {
          logger.error(e);
        }
      }
    }
  },
};
