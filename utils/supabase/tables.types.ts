import type { Database } from "./database.types";

export type Card = Database["public"]["Tables"]["cards"]["Row"];
export type Set = Database["public"]["Tables"]["sets"]["Row"];
export type Color = Database["public"]["Enums"]["enum_cards_rune"];
export type CardType = Database["public"]["Enums"]["enum_cards_type"];
export type RecycleColor =
  Database["public"]["Enums"]["enum_cards_recycle_rune"];
