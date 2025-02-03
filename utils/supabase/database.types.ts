export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _articles_v: {
        Row: {
          autosave: boolean | null
          created_at: string
          id: number
          latest: boolean | null
          parent_id: number | null
          updated_at: string
          version__status:
            | Database["public"]["Enums"]["enum__articles_v_version_status"]
            | null
          version_author_id: number | null
          version_author_name: string | null
          version_content: Json | null
          version_cover_image_id: number | null
          version_created_at: string | null
          version_excerpt: string | null
          version_published_at: string | null
          version_slug: string | null
          version_title: string | null
          version_updated_at: string | null
        }
        Insert: {
          autosave?: boolean | null
          created_at?: string
          id?: number
          latest?: boolean | null
          parent_id?: number | null
          updated_at?: string
          version__status?:
            | Database["public"]["Enums"]["enum__articles_v_version_status"]
            | null
          version_author_id?: number | null
          version_author_name?: string | null
          version_content?: Json | null
          version_cover_image_id?: number | null
          version_created_at?: string | null
          version_excerpt?: string | null
          version_published_at?: string | null
          version_slug?: string | null
          version_title?: string | null
          version_updated_at?: string | null
        }
        Update: {
          autosave?: boolean | null
          created_at?: string
          id?: number
          latest?: boolean | null
          parent_id?: number | null
          updated_at?: string
          version__status?:
            | Database["public"]["Enums"]["enum__articles_v_version_status"]
            | null
          version_author_id?: number | null
          version_author_name?: string | null
          version_content?: Json | null
          version_cover_image_id?: number | null
          version_created_at?: string | null
          version_excerpt?: string | null
          version_published_at?: string | null
          version_slug?: string | null
          version_title?: string | null
          version_updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "_articles_v_parent_id_articles_id_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_articles_v_version_author_id_users_id_fk"
            columns: ["version_author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_articles_v_version_cover_image_id_media_id_fk"
            columns: ["version_cover_image_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
        ]
      }
      _articles_v_rels: {
        Row: {
          categories_id: number | null
          id: number
          order: number | null
          parent_id: number
          path: string
        }
        Insert: {
          categories_id?: number | null
          id?: number
          order?: number | null
          parent_id: number
          path: string
        }
        Update: {
          categories_id?: number | null
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
        }
        Relationships: [
          {
            foreignKeyName: "_articles_v_rels_categories_fk"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_articles_v_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "_articles_v"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          _status: Database["public"]["Enums"]["enum_articles_status"] | null
          article_search_vector: unknown | null
          author_id: number | null
          author_name: string | null
          content: Json | null
          cover_image_id: number | null
          created_at: string
          excerpt: string | null
          id: number
          published_at: string | null
          slug: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          _status?: Database["public"]["Enums"]["enum_articles_status"] | null
          article_search_vector?: unknown | null
          author_id?: number | null
          author_name?: string | null
          content?: Json | null
          cover_image_id?: number | null
          created_at?: string
          excerpt?: string | null
          id?: number
          published_at?: string | null
          slug?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          _status?: Database["public"]["Enums"]["enum_articles_status"] | null
          article_search_vector?: unknown | null
          author_id?: number | null
          author_name?: string | null
          content?: Json | null
          cover_image_id?: number | null
          created_at?: string
          excerpt?: string | null
          id?: number
          published_at?: string | null
          slug?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "articles_author_id_users_id_fk"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_cover_image_id_media_id_fk"
            columns: ["cover_image_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
        ]
      }
      articles_rels: {
        Row: {
          categories_id: number | null
          id: number
          order: number | null
          parent_id: number
          path: string
        }
        Insert: {
          categories_id?: number | null
          id?: number
          order?: number | null
          parent_id: number
          path: string
        }
        Update: {
          categories_id?: number | null
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
        }
        Relationships: [
          {
            foreignKeyName: "articles_rels_categories_fk"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      artists: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      card_collection: {
        Row: {
          created_at: string
          id: number
          owner_id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          owner_id: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          owner_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "card_collection_owner_id_users_id_fk"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      card_collection_sets: {
        Row: {
          _order: number
          _parent_id: number
          completion: string | null
          id: string
          set_id: number | null
        }
        Insert: {
          _order: number
          _parent_id: number
          completion?: string | null
          id: string
          set_id?: number | null
        }
        Update: {
          _order?: number
          _parent_id?: number
          completion?: string | null
          id?: string
          set_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "card_collection_sets_parent_id_fk"
            columns: ["_parent_id"]
            isOneToOne: false
            referencedRelation: "card_collection"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "card_collection_sets_set_id_sets_id_fk"
            columns: ["set_id"]
            isOneToOne: false
            referencedRelation: "sets"
            referencedColumns: ["id"]
          },
        ]
      }
      card_collection_sets_cards: {
        Row: {
          _order: number
          _parent_id: string
          card_id: number | null
          foil: number | null
          id: string
          normal: number | null
        }
        Insert: {
          _order: number
          _parent_id: string
          card_id?: number | null
          foil?: number | null
          id: string
          normal?: number | null
        }
        Update: {
          _order?: number
          _parent_id?: string
          card_id?: number | null
          foil?: number | null
          id?: string
          normal?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "card_collection_sets_cards_card_id_cards_id_fk"
            columns: ["card_id"]
            isOneToOne: false
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "card_collection_sets_cards_parent_id_fk"
            columns: ["_parent_id"]
            isOneToOne: false
            referencedRelation: "card_collection_sets"
            referencedColumns: ["id"]
          },
        ]
      }
      cards: {
        Row: {
          abilities: Json | null
          abilities_markup: string | null
          abilities_text: string | null
          artist_id: number | null
          card_art_id: number | null
          card_name_text_vector: unknown | null
          card_name_vector: unknown | null
          card_text_vector: unknown | null
          character_id: number | null
          cost: number | null
          created_at: string
          flavor: string | null
          full_card_name: string | null
          id: number
          might: number | null
          name: string
          rarity: Database["public"]["Enums"]["enum_cards_rarity"]
          recycle_serial: string | null
          set_id: number
          set_index: number
          subtitle: string | null
          type: Database["public"]["Enums"]["enum_cards_type"]
          updated_at: string
        }
        Insert: {
          abilities?: Json | null
          abilities_markup?: string | null
          abilities_text?: string | null
          artist_id?: number | null
          card_art_id?: number | null
          card_name_text_vector?: unknown | null
          card_name_vector?: unknown | null
          card_text_vector?: unknown | null
          character_id?: number | null
          cost?: number | null
          created_at?: string
          flavor?: string | null
          full_card_name?: string | null
          id?: number
          might?: number | null
          name: string
          rarity: Database["public"]["Enums"]["enum_cards_rarity"]
          recycle_serial?: string | null
          set_id: number
          set_index: number
          subtitle?: string | null
          type: Database["public"]["Enums"]["enum_cards_type"]
          updated_at?: string
        }
        Update: {
          abilities?: Json | null
          abilities_markup?: string | null
          abilities_text?: string | null
          artist_id?: number | null
          card_art_id?: number | null
          card_name_text_vector?: unknown | null
          card_name_vector?: unknown | null
          card_text_vector?: unknown | null
          character_id?: number | null
          cost?: number | null
          created_at?: string
          flavor?: string | null
          full_card_name?: string | null
          id?: number
          might?: number | null
          name?: string
          rarity?: Database["public"]["Enums"]["enum_cards_rarity"]
          recycle_serial?: string | null
          set_id?: number
          set_index?: number
          subtitle?: string | null
          type?: Database["public"]["Enums"]["enum_cards_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cards_artist_id_artists_id_fk"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cards_card_art_id_media_id_fk"
            columns: ["card_art_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cards_character_id_characters_id_fk"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cards_set_id_sets_id_fk"
            columns: ["set_id"]
            isOneToOne: false
            referencedRelation: "sets"
            referencedColumns: ["id"]
          },
        ]
      }
      cards_recycle: {
        Row: {
          _order: number
          _parent_id: number
          id: string
          rune: Database["public"]["Enums"]["enum_cards_recycle_rune"] | null
        }
        Insert: {
          _order: number
          _parent_id: number
          id: string
          rune?: Database["public"]["Enums"]["enum_cards_recycle_rune"] | null
        }
        Update: {
          _order?: number
          _parent_id?: number
          id?: string
          rune?: Database["public"]["Enums"]["enum_cards_recycle_rune"] | null
        }
        Relationships: [
          {
            foreignKeyName: "cards_recycle_parent_id_fk"
            columns: ["_parent_id"]
            isOneToOne: false
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
        ]
      }
      cards_rels: {
        Row: {
          id: number
          keywords_id: number | null
          order: number | null
          parent_id: number
          path: string
          tags_id: number | null
        }
        Insert: {
          id?: number
          keywords_id?: number | null
          order?: number | null
          parent_id: number
          path: string
          tags_id?: number | null
        }
        Update: {
          id?: number
          keywords_id?: number | null
          order?: number | null
          parent_id?: number
          path?: string
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cards_rels_keywords_fk"
            columns: ["keywords_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cards_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cards_rels_tags_fk"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      cards_rune: {
        Row: {
          id: number
          order: number
          parent_id: number
          value: Database["public"]["Enums"]["enum_cards_rune"] | null
        }
        Insert: {
          id?: number
          order: number
          parent_id: number
          value?: Database["public"]["Enums"]["enum_cards_rune"] | null
        }
        Update: {
          id?: number
          order?: number
          parent_id?: number
          value?: Database["public"]["Enums"]["enum_cards_rune"] | null
        }
        Relationships: [
          {
            foreignKeyName: "cards_rune_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          id: number
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      characters: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      decks: {
        Row: {
          author_id: number
          created_at: string
          deck_name_vector: unknown | null
          guide: Json | null
          id: number
          likes: number
          name: string
          preview: string
          public: boolean
          slug: string | null
          updated_at: string
        }
        Insert: {
          author_id: number
          created_at?: string
          deck_name_vector?: unknown | null
          guide?: Json | null
          id?: number
          likes?: number
          name: string
          preview: string
          public?: boolean
          slug?: string | null
          updated_at?: string
        }
        Update: {
          author_id?: number
          created_at?: string
          deck_name_vector?: unknown | null
          guide?: Json | null
          id?: number
          likes?: number
          name?: string
          preview?: string
          public?: boolean
          slug?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "decks_author_id_users_id_fk"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      decks_cardlist: {
        Row: {
          _order: number
          _parent_id: number
          card_id: number | null
          id: string
          quantity: number | null
        }
        Insert: {
          _order: number
          _parent_id: number
          card_id?: number | null
          id: string
          quantity?: number | null
        }
        Update: {
          _order?: number
          _parent_id?: number
          card_id?: number | null
          id?: string
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "decks_cardlist_card_id_cards_id_fk"
            columns: ["card_id"]
            isOneToOne: false
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "decks_cardlist_parent_id_fk"
            columns: ["_parent_id"]
            isOneToOne: false
            referencedRelation: "decks"
            referencedColumns: ["id"]
          },
        ]
      }
      decks_highlights: {
        Row: {
          _order: number
          _parent_id: number
          highlight_id: number | null
          id: string
        }
        Insert: {
          _order: number
          _parent_id: number
          highlight_id?: number | null
          id: string
        }
        Update: {
          _order?: number
          _parent_id?: number
          highlight_id?: number | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "decks_highlights_highlight_id_cards_id_fk"
            columns: ["highlight_id"]
            isOneToOne: false
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "decks_highlights_parent_id_fk"
            columns: ["_parent_id"]
            isOneToOne: false
            referencedRelation: "decks"
            referencedColumns: ["id"]
          },
        ]
      }
      decks_rels: {
        Row: {
          id: number
          order: number | null
          parent_id: number
          path: string
          tags_id: number | null
        }
        Insert: {
          id?: number
          order?: number | null
          parent_id: number
          path: string
          tags_id?: number | null
        }
        Update: {
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "decks_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "decks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "decks_rels_tags_fk"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          approved: boolean | null
          contributor_id: number
          created_at: string
          description: string
          end_date: string
          id: number
          start_date: string
          title: string
          type: Database["public"]["Enums"]["enum_events_type"]
          updated_at: string
        }
        Insert: {
          approved?: boolean | null
          contributor_id: number
          created_at?: string
          description: string
          end_date: string
          id?: number
          start_date: string
          title: string
          type: Database["public"]["Enums"]["enum_events_type"]
          updated_at?: string
        }
        Update: {
          approved?: boolean | null
          contributor_id?: number
          created_at?: string
          description?: string
          end_date?: string
          id?: number
          start_date?: string
          title?: string
          type?: Database["public"]["Enums"]["enum_events_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_contributor_id_users_id_fk"
            columns: ["contributor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      keywords: {
        Row: {
          color: Database["public"]["Enums"]["enum_keywords_color"] | null
          created_at: string
          id: number
          keyword: string | null
          position: Database["public"]["Enums"]["enum_keywords_position"] | null
          reminder_markup: string | null
          reminder_plaintext: string | null
          reminder_text: Json | null
          type: Database["public"]["Enums"]["enum_keywords_type"] | null
          updated_at: string
        }
        Insert: {
          color?: Database["public"]["Enums"]["enum_keywords_color"] | null
          created_at?: string
          id?: number
          keyword?: string | null
          position?:
            | Database["public"]["Enums"]["enum_keywords_position"]
            | null
          reminder_markup?: string | null
          reminder_plaintext?: string | null
          reminder_text?: Json | null
          type?: Database["public"]["Enums"]["enum_keywords_type"] | null
          updated_at?: string
        }
        Update: {
          color?: Database["public"]["Enums"]["enum_keywords_color"] | null
          created_at?: string
          id?: number
          keyword?: string | null
          position?:
            | Database["public"]["Enums"]["enum_keywords_position"]
            | null
          reminder_markup?: string | null
          reminder_plaintext?: string | null
          reminder_text?: Json | null
          type?: Database["public"]["Enums"]["enum_keywords_type"] | null
          updated_at?: string
        }
        Relationships: []
      }
      media: {
        Row: {
          alt: string
          created_at: string
          filename: string | null
          filesize: number | null
          focal_x: number | null
          focal_y: number | null
          height: number | null
          id: number
          mime_type: string | null
          thumbnail_u_r_l: string | null
          updated_at: string
          url: string | null
          width: number | null
        }
        Insert: {
          alt: string
          created_at?: string
          filename?: string | null
          filesize?: number | null
          focal_x?: number | null
          focal_y?: number | null
          height?: number | null
          id?: number
          mime_type?: string | null
          thumbnail_u_r_l?: string | null
          updated_at?: string
          url?: string | null
          width?: number | null
        }
        Update: {
          alt?: string
          created_at?: string
          filename?: string | null
          filesize?: number | null
          focal_x?: number | null
          focal_y?: number | null
          height?: number | null
          id?: number
          mime_type?: string | null
          thumbnail_u_r_l?: string | null
          updated_at?: string
          url?: string | null
          width?: number | null
        }
        Relationships: []
      }
      payload_locked_documents: {
        Row: {
          created_at: string
          global_slug: string | null
          id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          global_slug?: string | null
          id?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          global_slug?: string | null
          id?: number
          updated_at?: string
        }
        Relationships: []
      }
      payload_locked_documents_rels: {
        Row: {
          articles_id: number | null
          artists_id: number | null
          card_collection_id: number | null
          cards_id: number | null
          categories_id: number | null
          characters_id: number | null
          decks_id: number | null
          events_id: number | null
          id: number
          keywords_id: number | null
          media_id: number | null
          order: number | null
          parent_id: number
          path: string
          sets_id: number | null
          spoilers_id: number | null
          tags_id: number | null
          users_id: number | null
        }
        Insert: {
          articles_id?: number | null
          artists_id?: number | null
          card_collection_id?: number | null
          cards_id?: number | null
          categories_id?: number | null
          characters_id?: number | null
          decks_id?: number | null
          events_id?: number | null
          id?: number
          keywords_id?: number | null
          media_id?: number | null
          order?: number | null
          parent_id: number
          path: string
          sets_id?: number | null
          spoilers_id?: number | null
          tags_id?: number | null
          users_id?: number | null
        }
        Update: {
          articles_id?: number | null
          artists_id?: number | null
          card_collection_id?: number | null
          cards_id?: number | null
          categories_id?: number | null
          characters_id?: number | null
          decks_id?: number | null
          events_id?: number | null
          id?: number
          keywords_id?: number | null
          media_id?: number | null
          order?: number | null
          parent_id?: number
          path?: string
          sets_id?: number | null
          spoilers_id?: number | null
          tags_id?: number | null
          users_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payload_locked_documents_rels_articles_fk"
            columns: ["articles_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_artists_fk"
            columns: ["artists_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_card_collection_fk"
            columns: ["card_collection_id"]
            isOneToOne: false
            referencedRelation: "card_collection"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_cards_fk"
            columns: ["cards_id"]
            isOneToOne: false
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_categories_fk"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_characters_fk"
            columns: ["characters_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_decks_fk"
            columns: ["decks_id"]
            isOneToOne: false
            referencedRelation: "decks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_events_fk"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_keywords_fk"
            columns: ["keywords_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_media_fk"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "payload_locked_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_sets_fk"
            columns: ["sets_id"]
            isOneToOne: false
            referencedRelation: "sets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_spoilers_fk"
            columns: ["spoilers_id"]
            isOneToOne: false
            referencedRelation: "spoilers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_tags_fk"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_locked_documents_rels_users_fk"
            columns: ["users_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payload_migrations: {
        Row: {
          batch: number | null
          created_at: string
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          batch?: number | null
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Update: {
          batch?: number | null
          created_at?: string
          id?: number
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      payload_preferences: {
        Row: {
          created_at: string
          id: number
          key: string | null
          updated_at: string
          value: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          key?: string | null
          updated_at?: string
          value?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          key?: string | null
          updated_at?: string
          value?: Json | null
        }
        Relationships: []
      }
      payload_preferences_rels: {
        Row: {
          id: number
          order: number | null
          parent_id: number
          path: string
          users_id: number | null
        }
        Insert: {
          id?: number
          order?: number | null
          parent_id: number
          path: string
          users_id?: number | null
        }
        Update: {
          id?: number
          order?: number | null
          parent_id?: number
          path?: string
          users_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payload_preferences_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "payload_preferences"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payload_preferences_rels_users_fk"
            columns: ["users_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      sets: {
        Row: {
          collectible: number | null
          created_at: string
          description: string | null
          id: number
          key_art_id: number | null
          name: string
          released_at: string | null
          set_code: string
          total: number
          updated_at: string
        }
        Insert: {
          collectible?: number | null
          created_at?: string
          description?: string | null
          id?: number
          key_art_id?: number | null
          name: string
          released_at?: string | null
          set_code: string
          total: number
          updated_at?: string
        }
        Update: {
          collectible?: number | null
          created_at?: string
          description?: string | null
          id?: number
          key_art_id?: number | null
          name?: string
          released_at?: string | null
          set_code?: string
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sets_key_art_id_media_id_fk"
            columns: ["key_art_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
        ]
      }
      spoilers: {
        Row: {
          abilities: Json | null
          artist_id: number | null
          card_art_id: number | null
          card_id: number | null
          character_id: number | null
          cost: number | null
          created_at: string
          description: string | null
          id: number
          might: number | null
          name: string | null
          rarity: Database["public"]["Enums"]["enum_spoilers_rarity"] | null
          set_id: number | null
          set_index: number | null
          source_description: string
          source_url: string
          subtitle: string | null
          title: string
          type: Database["public"]["Enums"]["enum_spoilers_type"] | null
          updated_at: string
        }
        Insert: {
          abilities?: Json | null
          artist_id?: number | null
          card_art_id?: number | null
          card_id?: number | null
          character_id?: number | null
          cost?: number | null
          created_at?: string
          description?: string | null
          id?: number
          might?: number | null
          name?: string | null
          rarity?: Database["public"]["Enums"]["enum_spoilers_rarity"] | null
          set_id?: number | null
          set_index?: number | null
          source_description: string
          source_url: string
          subtitle?: string | null
          title: string
          type?: Database["public"]["Enums"]["enum_spoilers_type"] | null
          updated_at?: string
        }
        Update: {
          abilities?: Json | null
          artist_id?: number | null
          card_art_id?: number | null
          card_id?: number | null
          character_id?: number | null
          cost?: number | null
          created_at?: string
          description?: string | null
          id?: number
          might?: number | null
          name?: string | null
          rarity?: Database["public"]["Enums"]["enum_spoilers_rarity"] | null
          set_id?: number | null
          set_index?: number | null
          source_description?: string
          source_url?: string
          subtitle?: string | null
          title?: string
          type?: Database["public"]["Enums"]["enum_spoilers_type"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "spoilers_artist_id_artists_id_fk"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spoilers_card_art_id_media_id_fk"
            columns: ["card_art_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spoilers_card_id_cards_id_fk"
            columns: ["card_id"]
            isOneToOne: false
            referencedRelation: "cards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spoilers_character_id_characters_id_fk"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spoilers_set_id_sets_id_fk"
            columns: ["set_id"]
            isOneToOne: false
            referencedRelation: "sets"
            referencedColumns: ["id"]
          },
        ]
      }
      spoilers_recycle: {
        Row: {
          _order: number
          _parent_id: number
          id: string
          rune: Database["public"]["Enums"]["enum_spoilers_recycle_rune"] | null
        }
        Insert: {
          _order: number
          _parent_id: number
          id: string
          rune?:
            | Database["public"]["Enums"]["enum_spoilers_recycle_rune"]
            | null
        }
        Update: {
          _order?: number
          _parent_id?: number
          id?: string
          rune?:
            | Database["public"]["Enums"]["enum_spoilers_recycle_rune"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "spoilers_recycle_parent_id_fk"
            columns: ["_parent_id"]
            isOneToOne: false
            referencedRelation: "spoilers"
            referencedColumns: ["id"]
          },
        ]
      }
      spoilers_rels: {
        Row: {
          id: number
          keywords_id: number | null
          order: number | null
          parent_id: number
          path: string
          tags_id: number | null
        }
        Insert: {
          id?: number
          keywords_id?: number | null
          order?: number | null
          parent_id: number
          path: string
          tags_id?: number | null
        }
        Update: {
          id?: number
          keywords_id?: number | null
          order?: number | null
          parent_id?: number
          path?: string
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spoilers_rels_keywords_fk"
            columns: ["keywords_id"]
            isOneToOne: false
            referencedRelation: "keywords"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spoilers_rels_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "spoilers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spoilers_rels_tags_fk"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      spoilers_rune: {
        Row: {
          id: number
          order: number
          parent_id: number
          value: Database["public"]["Enums"]["enum_spoilers_rune"] | null
        }
        Insert: {
          id?: number
          order: number
          parent_id: number
          value?: Database["public"]["Enums"]["enum_spoilers_rune"] | null
        }
        Update: {
          id?: number
          order?: number
          parent_id?: number
          value?: Database["public"]["Enums"]["enum_spoilers_rune"] | null
        }
        Relationships: [
          {
            foreignKeyName: "spoilers_rune_parent_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "spoilers"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          created_at: string
          id: number
          region: boolean | null
          tag: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          region?: boolean | null
          tag?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          region?: boolean | null
          tag?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          author_name: string | null
          clerk_id: string | null
          created_at: string
          email: string | null
          id: number
          role: Database["public"]["Enums"]["enum_users_role"] | null
          updated_at: string
          username: string | null
        }
        Insert: {
          author_name?: string | null
          clerk_id?: string | null
          created_at?: string
          email?: string | null
          id?: number
          role?: Database["public"]["Enums"]["enum_users_role"] | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          author_name?: string | null
          clerk_id?: string | null
          created_at?: string
          email?: string | null
          id?: number
          role?: Database["public"]["Enums"]["enum_users_role"] | null
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      users_links: {
        Row: {
          _order: number
          _parent_id: number
          id: string
          site: Database["public"]["Enums"]["enum_users_links_site"]
          url: string
        }
        Insert: {
          _order: number
          _parent_id: number
          id: string
          site: Database["public"]["Enums"]["enum_users_links_site"]
          url: string
        }
        Update: {
          _order?: number
          _parent_id?: number
          id?: string
          site?: Database["public"]["Enums"]["enum_users_links_site"]
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_links_parent_id_fk"
            columns: ["_parent_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_cards_using_id: {
        Args: {
          card_id: number
        }
        Returns: {
          id: number
          name: string
          type: string
          cost: number
          might: number
          abilities_markup: string
          set_index: number
          set_code: string
          set_total: number
          rarity: string
          artist_name: string
          art_public_id: string
          runes: string[]
          recycle_serial: string
          keywords: Json
          tags: string[]
        }[]
      }
      search_cards_using_name_text: {
        Args: {
          search_query: string
        }
        Returns: {
          id: number
          name: string
          type: string
          cost: number
          might: number
          abilities_markup: string
          set_index: number
          set_code: string
          set_total: number
          rarity: string
          artist_name: string
          art_public_id: string
          runes: string[]
          recycle_serial: string
          keywords: Json
          tags: string[]
        }[]
      }
    }
    Enums: {
      enum__articles_v_version_status: "draft" | "published"
      enum_articles_status: "draft" | "published"
      enum_cards_rarity:
        | "None"
        | "White Circle"
        | "Green Triangle"
        | "Purple Diamond"
        | "Golden Pentagon"
        | "Promo"
      enum_cards_recycle_rune:
        | "Any"
        | "Calm"
        | "Chaos"
        | "Fury"
        | "Mental"
        | "Order"
        | "Physical"
      enum_cards_rune:
        | "Calm"
        | "Chaos"
        | "Fury"
        | "Mental"
        | "Order"
        | "Physical"
      enum_cards_type:
        | "Unit"
        | "Champion"
        | "Legend"
        | "Spell"
        | "Battlefield"
        | "Gear"
        | "Rune"
      enum_events_type:
        | "Community Event"
        | "National Tournament"
        | "Pre-Release"
        | "Regional Tournament"
        | "Release"
        | "Special Event"
        | "World Tournament"
      enum_keywords_color:
        | "#699667"
        | "#835b86"
        | "#a74e56"
        | "#566f94"
        | "#ab972c"
        | "#ba7152"
        | "#536878"
        | "#8F7236"
      enum_keywords_position: "prefix" | "suffix"
      enum_keywords_type: "Effect" | "Timing" | "Trigger"
      enum_spoilers_rarity:
        | "White Circle"
        | "Green Triangle"
        | "Purple Diamond"
        | "Golden Pentagon"
      enum_spoilers_recycle_rune:
        | "Any"
        | "Calm"
        | "Chaos"
        | "Fury"
        | "Mental"
        | "Order"
        | "Physical"
      enum_spoilers_rune:
        | "Calm"
        | "Chaos"
        | "Fury"
        | "Mental"
        | "Order"
        | "Physical"
      enum_spoilers_type:
        | "Unit"
        | "Champion"
        | "Legend"
        | "Spell"
        | "Battlefield"
        | "Gear"
        | "Rune"
      enum_users_links_site:
        | "Blog"
        | "Bluesky"
        | "Discord"
        | "Mobalytics"
        | "OP.GG"
        | "Podcast"
        | "TCGplayer"
        | "TikTok"
        | "Twitch"
        | "YouTube"
      enum_users_role: "admin" | "creator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
