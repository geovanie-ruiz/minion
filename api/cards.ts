import { logger } from "../utils/logger";
import { SupabaseClient } from "../utils/supabase/client";
import type {
  CardType,
  Color,
  RecycleColor,
} from "../utils/supabase/tables.types";
import type {
  CardSearchQuery,
  CardSearchResult,
  CardsResponse,
  Keyword,
} from "./types";

const toRecycleColor = (data: string | null): RecycleColor[] => {
  if (!data) return [];
  const colors = data.split("");
  if (colors.length === 0) return [];
  return colors
    .map((color) => {
      if (color === "a") return "Any";
      if (color === "c") return "Calm";
      if (color === "k") return "Chaos";
      if (color === "f") return "Fury";
      if (color === "m") return "Mental";
      if (color === "o") return "Order";
      if (color === "p") return "Physical";
      return "";
    })
    .filter((color) => color !== "");
};

const toCardSearchResult = (data: CardSearchQuery): CardSearchResult => {
  return {
    ...data,
    type: data.type as CardType,
    runes: data.runes as Color[],
    recycle_serial: toRecycleColor(data.recycle_serial),
    keywords: data.keywords as Keyword[],
  };
};

export async function getCardsFromName(name: string): Promise<CardsResponse> {
  const client = SupabaseClient();

  const nameParts = name.split(" ").map((part) => `'${part}'`);
  const nameSearch = nameParts.join(" & ");

  const { data, error } = await client.rpc("search_cards_using_name_text", {
    search_query: nameSearch,
  });

  if (error) {
    logger.error(`getCardsFromName(${name})`, error);
  }

  return {
    cards: data ? data.map(toCardSearchResult) : [],
    miss: !!error || data.length === 0,
  };
}

export async function getCardFromId(
  cardId: number
): Promise<CardSearchResult | null> {
  const client = SupabaseClient();

  const { data, error } = await client
    .rpc("search_cards_using_id", { card_id: cardId })
    .single();

  if (error) {
    logger.error(`getCardFromId(${cardId})`, error);
    return null;
  }

  return data ? toCardSearchResult(data) : null;
}
