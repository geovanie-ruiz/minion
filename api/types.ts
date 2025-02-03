import type { Json } from "../utils/supabase/database.types";
import type {
  CardType,
  Color,
  RecycleColor,
} from "../utils/supabase/tables.types";

export type Position = "prefix" | "suffix";
export type KeywordType = "Effect" | "Timing" | "Trigger";

export type Keyword = {
  keyword: string;
  type: KeywordType;
  text: string;
  position: Position;
};

export type CardSearchQuery = {
  id: number;
  name: string;
  type: string;
  cost: number;
  might: number;
  abilities_markup: string;
  set_index: number;
  set_code: string;
  set_total: number;
  rarity: string;
  artist_name: string;
  art_public_id: string;
  runes: string[];
  recycle_serial: string;
  keywords: Json;
  tags: string[];
};

export type CardSearchResult = {
  id: number;
  name: string;
  type: CardType;
  cost: number;
  might: number;
  abilities_markup: string;
  set_index: number;
  set_code: string;
  set_total: number;
  rarity: string;
  artist_name: string;
  art_public_id: string;
  runes: Color[];
  recycle_serial: RecycleColor[];
  keywords: Keyword[];
  tags: string[];
};

export type CardsResponse = {
  cards: CardSearchResult[];
  miss: boolean;
};
