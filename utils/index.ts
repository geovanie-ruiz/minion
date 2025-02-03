import type { RGBTuple } from "discord.js";
import type { Keyword } from "../api/types";
import { logger } from "./logger";
import type { CardType, Color, RecycleColor } from "./supabase/tables.types";

export type MissedTerm = { missedTerm: string };

enum COLOR_CODES {
  red = "#a22824",
  orange = "#bd762e",
  yellow = "#c9b63e",
  green = "#469761",
  blue = "#3e7aa5",
  purple = "#704a87",
  white = "#f3f3f4",
}

export enum MatchType {
  image = "!",
  default = "",
}

const COLORS = new Map<Color, COLOR_CODES>([
  ["Calm", COLOR_CODES.green],
  ["Chaos", COLOR_CODES.purple],
  ["Fury", COLOR_CODES.red],
  ["Mental", COLOR_CODES.blue],
  ["Order", COLOR_CODES.yellow],
  ["Physical", COLOR_CODES.orange],
]);

const RUNES = new Map<Color, string>([
  ["Calm", "<:calm:1318806072647090247>"],
  ["Chaos", "<:chaos:1318806127584084038>"],
  ["Fury", "<:fury:1318806153550889030>"],
  ["Mental", "<:mental:1318806178158870581>"],
  ["Order", "<:order:1318806203182350437>"],
  ["Physical", "<:physical:1318806225512828939>"],
]);

function getRuneIcon(color: Color) {
  return `${RUNES.get(color)}`;
}

export function getMatchType(flag: string): MatchType {
  if (flag === "!") return MatchType.image;
  return MatchType.default;
}

export function getColor(colors: Color[]): RGBTuple {
  let color = COLOR_CODES.white;

  // Only bother getting single colors, multi-
  // color cards will be white
  if (colors && colors.length === 1) {
    const cardColor = colors.at(0);
    if (cardColor) {
      const systemColor = COLORS.get(cardColor);
      if (systemColor) color = systemColor;
    }
  }

  const hex = color.replace("#", "");

  // Check if the hex code is valid
  if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
    throw new Error("Invalid hex color code");
  }

  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];
}

export function getRuneField(colors: Color[]) {
  const color_text = colors.map((color) => {
    return `${getRuneIcon(color)} ${color}`;
  });
  return color_text.join("  ‧  ");
}

export function getCollectionId(
  index: number,
  setCode: string,
  setTotal: number
) {
  return `${setCode.toUpperCase()}-${index
    .toString()
    .padStart(3, "0")}/${setTotal}`;
}

export function getRarityField(rarity: string) {
  if (rarity === "Purple Diamond") return "<:rarity4:1318831980330094622>";
  if (rarity === "Green Triangle") return "<:rarity3:1318831866236895243>";
  if (rarity === "Golden Pentagon") return "<:rarity5:1318832011598762088>";
  if (rarity === "White Circle") return "<:rarity1:1318831788478435338>";
  if (rarity === "None") return "None";
  if (rarity === "Promo") return "Promo";
  return "Unknown Rarity";
}

export function getCardTypeField(type: CardType, colors: Color[]) {
  if (type === "Battlefield") return "<:battlefield:1318843660271616072>";
  if (type === "Champion") return "<:champion:1318843684631875615>";
  if (type === "Gear") return "<:gear:1318843695432208424>";
  if (type === "Legend") return "<:legend:1318843709206302722>";
  if (type === "Rune") return "<:rune:1335745787971375124>";
  if (type === "Spell") return "<:spell:1318843730282811392>";
  if (type === "Unit") return "<:unit:1318843757973737523>";
}

const COST: string[] = [
  "<:cost0:1319064857445929010>",
  "<:cost1:1319064868036284457>",
  "<:cost2:1319064878417182802>",
  "<:cost3:1319064888261214208>",
  "<:cost4:1319064898881196082>",
  "<:cost5:1319064908725354548>",
  "<:cost6:1319064920809148529>",
  "<:cost7:1319064931584442441>",
  "<:cost8:1319064940522246242>",
  "<:cost9:1319064949376684102>",
  "<:cost10:1319064958868394014>",
  "<:cost11:1319064974177337374>",
  "<:cost12:1336054319698542702>",
];

function getRecycle(recycle: RecycleColor[]) {
  return recycle
    .map((rune) => {
      if (rune === "Any") return `<:anyrune:1318855069869015131> `;
      return `${getRuneIcon(rune)}`;
    })
    .join(" ");
}

export function getDescription(
  type: CardType,
  cost: number | null,
  recycle: RecycleColor[],
  might: number | null
) {
  try {
    const description: string[] = [];

    if (cost) description.push(`${COST[cost]}`);
    if (recycle.length > 0) {
      const recycleCost = getRecycle(recycle);
      description.push(`Recycle ${recycleCost}`);
    }
    if (type === "Champion" || type === "Unit") {
      description.push(`${might} <:might:1318853651883753483>`);
    }

    if (description.length === 0) return null;
    return description.join(" ‧ ");
  } catch (e) {
    logger.error(e);
    return null;
  }
}

export function getAbilitiesText(abilities: string, keywords: Keyword[]) {
  const nonEffectKeywords = keywords
    .filter((keyword) => keyword.type !== "Effect")
    .map((keyword) => `\`${keyword.keyword}\` (${keyword.text})`);

  const effectKeywords = keywords.filter(
    (keyword) => keyword.type === "Effect"
  );

  const keywordLine = effectKeywords
    .map((keyword) => `\`${keyword.keyword}\``)
    .join(" ");

  const beforeAbilityLine = effectKeywords.filter(
    (keyword) => keyword.position === "prefix"
  );

  const afterAbilityLine = effectKeywords.filter(
    (keyword) => keyword.position === "suffix"
  );

  const abilitiesText = [];

  if (nonEffectKeywords.length > 0) {
    abilitiesText.push(nonEffectKeywords.join("\n"), "\n");
  }

  abilitiesText.push(keywordLine);

  if (beforeAbilityLine.length > 0) {
    abilitiesText.push(
      `(${beforeAbilityLine.map((keyword) => keyword.text).join(" ")})\n`
    );
  }

  abilitiesText.push(abilities);

  if (afterAbilityLine.length > 0) {
    abilitiesText.push(
      `(${afterAbilityLine.map((keyword) => keyword.text).join(" ")})`
    );
  }

  return abilitiesText.join(" ");
}
