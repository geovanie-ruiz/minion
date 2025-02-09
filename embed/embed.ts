import { EmbedBuilder } from "@discordjs/builders";
import type { APIEmbedField } from "discord.js";
import process from "process";
import { getCardsFromName } from "../api/cards";
import type { CardSearchResult, Keyword } from "../api/types";
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
import type { CardType, Color } from "../utils/supabase/tables.types";

type CardProps = {
  runes: Color[];
  type: CardType;
  abilities: string;
  keywords: Keyword[];
  tags: string[];
  set: {
    index: number;
    code: string;
    total: number;
  };
  rarity: string;
  artist: string;
};

const getTags = (tags: string[]) => {
  if (tags.length === 0) return "---";
  return tags.join(", ");
};

const getFields = ({
  runes,
  type,
  abilities,
  keywords,
  tags,
  set,
  rarity,
  artist,
}: CardProps): APIEmbedField[] => {
  const cardTags = getTags(tags);
  const abilitiesText = getAbilitiesText(abilities, keywords);
  const fields: APIEmbedField[] = [];

  if (runes.length > 0) {
    fields.push({
      name: "Rune",
      value: `${getRuneField(runes)}`,
      inline: true,
    });
  }

  fields.push({
    name: "Type",
    value: `${getCardTypeField(type, runes)}`,
    inline: true,
  });

  fields.push({ name: "Abilities", value: abilitiesText, inline: false });
  fields.push({ name: "Tags", value: cardTags, inline: false });
  fields.push({
    name: "Set",
    value: `${getCollectionId(set.index, set.code, set.total)} ‧ EN`, // set should have language
    inline: true,
  });
  fields.push({
    name: "Rarity",
    value: `${getRarityField(rarity)}`,
    inline: true,
  });
  fields.push({
    name: "Artist",
    value: `${artist || "Artist Unknown"}`,
    inline: true,
  });

  return fields;
};

export function embedCard(card: CardSearchResult): EmbedBuilder {
  const cardProps = {
    runes: card.runes,
    type: card.type,
    abilities: card.abilities_markup,
    keywords: card.keywords,
    tags: card.tags,
    set: {
      index: card.set_index,
      code: card.set_code,
      total: card.set_total,
    },
    rarity: card.rarity,
    artist: card.artist_name,
  };

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
    .addFields(...getFields(cardProps))
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
