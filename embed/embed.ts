import { EmbedBuilder } from "@discordjs/builders";
import type { APIEmbedField } from "discord.js";
import process from "process";
import { getCardsFromName } from "../api/cards";
import type { CardSearchResult } from "../api/types";
import {
  getAbilitiesText,
  getCardTypeField,
  getCollectionId,
  getColor,
  getDescription,
  getRarityField,
  getRuneField,
  MatchType,
} from "../utils";

export function embedCard(card: CardSearchResult): EmbedBuilder {
  let cardTags = "---";
  if (card.tags.length > 0) cardTags = card.tags.join(", ");

  const abilitiesText = getAbilitiesText(card.abilities_markup, card.keywords);

  const fields: APIEmbedField[] = [
    { name: "Rune", value: `${getRuneField(card.runes)}`, inline: true },
    {
      name: "Type",
      value: `${getCardTypeField(card.type, card.runes)}`,
      inline: true,
    },
    { name: "Abilities", value: abilitiesText, inline: false },
    { name: "Tags", value: cardTags, inline: false },
    {
      name: "Set",
      value: `${getCollectionId(
        card.set_index,
        card.set_code,
        card.set_total
      )} ‧ EN`, // set should have language
      inline: true,
    },
    { name: "Rarity", value: `${getRarityField(card.rarity)}`, inline: true },
    {
      name: "Artist",
      value: `${card.artist_name || "Artist Unknown"}`,
      inline: true,
    },
  ];

  return new EmbedBuilder()
    .setColor(getColor(card.runes))
    .setTitle(card.name)
    .setURL(`https://2Runes.gg/cards/${card.id}`)
    .setDescription(
      getDescription(
        card.type,
        card.cost ?? null,
        card.recycle_serial,
        card.might ?? null
      )
    )
    .addFields(...fields)
    .setThumbnail(`${process.env.CLOUDINARY_HOST}/${card.art_public_id}`)
    .setTimestamp()
    .setFooter({
      text: "Brought to you by 2Runes.gg",
      iconURL: `${process.env.CLOUDINARY_HOST}/discord-embed-footer-icon`,
    });
}

function embedImage(card: CardSearchResult) {
  return new EmbedBuilder()
    .setColor(getColor(card.runes))
    .setURL(`https://2Runes.gg/cards/${card.id}`)
    .setImage(`${process.env.CLOUDINARY_HOST}/${card.art_public_id}`)
    .setTimestamp()
    .setFooter({
      text: "Brought to you by 2Runes.gg",
      iconURL: `${process.env.CLOUDINARY_HOST}/discord-embed-footer-icon`,
    });
}

export async function getEmbed(
  queryTerm: string,
  type: MatchType
): Promise<EmbedBuilder | { missedTerm: string }> {
  const response = await getCardsFromName(queryTerm);
  if (response.miss) return { missedTerm: queryTerm };
  if (!response.cards || response.cards.length === 0)
    return { missedTerm: queryTerm };
  const firstCard = response.cards[0];
  const embed =
    type === MatchType.image ? embedImage(firstCard) : embedCard(firstCard);

  return embed;
}
