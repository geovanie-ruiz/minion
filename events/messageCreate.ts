import { Client, Events, Message, TextChannel } from "discord.js";
import { logger } from "../utils/logger";

import { EmbedBuilder } from "@discordjs/builders";
import { getEmbed } from "../embed/embed";
import { getMatchType, MatchType, type MissedTerm } from "../utils";

export default {
  event: Events.MessageCreate,
  handler: async (client: Client, message: Message) => {
    if (message.author.bot) return; // Ignore bot messages

    if (message.content === "Hi, Minion") {
      try {
        await message.reply(`Hello, ${message.author.username}!`);
      } catch (error) {
        logger.error(`Error replying to message: ${error}`);
      }
    } else {
      // use regex to find the pattern [[ match ]]
      const pattern = /\[\[([^\]]+)\]\]/g;
      const matches = message.content.match(pattern);

      if (!matches) return;

      // Make requests for all matches found in message
      const promises: Promise<EmbedBuilder | MissedTerm>[] = [];

      const channel: TextChannel = message.channel as TextChannel;
      channel.sendTyping();

      matches.slice(0, 5).forEach((match) => {
        // Clean up brackets from search term and make the request
        match = match.replace(/\[/g, "").replace(/\]/g, "");

        // Get argument indicator and adjust query term accordingly
        const matchType = getMatchType(match.charAt(0));
        const queryTerm =
          matchType === MatchType.default ? match : match.slice(1);

        const embed = getEmbed(queryTerm, matchType);

        promises.push(embed);
      });

      // Resolve all promises and iterate through each result sending the embed
      Promise.all(promises)
        .then((embeds) => {
          if (embeds) {
            const missedTerms = embeds
              .map((embed): string => {
                if (!embed) return "";

                if (embed instanceof EmbedBuilder) {
                  channel.send({ embeds: [embed] });
                  return "";
                }
                return (embed as MissedTerm).missedTerm;
              })
              .filter((value) => value !== "");

            if (missedTerms && missedTerms.length > 0) {
              const notice = [
                "There were some misses with your search terms:",
                `${missedTerms.join(", ")}.`,
                "This happens when the term can't be matched to a card.",
                "Please be patient as we work to improve the efficiency",
                "of context searching so that Minion can give you more",
                "hits than misses. Thanks!",
              ];
              message.author.send(notice.join(" "));
            }
          }
        })
        .catch((err) => logger.error("onMessage", err));
    }
  },
};
