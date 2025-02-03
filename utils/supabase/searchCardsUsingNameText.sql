CREATE OR REPLACE FUNCTION search_cards_using_name_text(search_query TEXT)
RETURNS TABLE (
    id INTEGER,
    name VARCHAR,
    type VARCHAR,
    cost NUMERIC,
    might NUMERIC,
    abilities_markup VARCHAR,
    set_index NUMERIC,
    set_code VARCHAR,
    set_total NUMERIC,
    rarity VARCHAR,
    artist_name VARCHAR,
    art_public_id VARCHAR,
    runes TEXT[],
    recycle_serial VARCHAR,
    keywords JSON,
    tags TEXT[]
) AS $$
BEGIN
    RETURN QUERY
    WITH card_metadata AS (
        SELECT 
            c.id,
            c.full_card_name as name,
            c.type::VARCHAR,
            c.cost,
            c.might,
            c.abilities_markup,
            c.set_index,
            s.set_code,
            s.total as set_total,
            c.rarity::VARCHAR as rarity,
            a.name as artist_name,
            m.filename as art_public_id,
            ARRAY_AGG(DISTINCT r.value::TEXT) FILTER (WHERE r.value IS NOT NULL) as runes,
            c.recycle_serial,
            JSON_AGG(DISTINCT JSONB_BUILD_OBJECT('keyword', k.keyword, 'type', k.type, 'text', k.reminder_markup, 'position', k.position)) FILTER (WHERE k.keyword IS NOT NULL) as keywords,
            ARRAY_AGG(DISTINCT t.tag::TEXT) FILTER (WHERE t.tag IS NOT NULL) as tags
        FROM cards c
        LEFT JOIN cards_rels cr ON c.id = cr.parent_id
        LEFT JOIN keywords k ON cr.keywords_id = k.id
        LEFT JOIN tags t ON cr.tags_id = t.id
        LEFT JOIN cards_rune r ON c.id = r.parent_id
        LEFT JOIN sets s on s.id = c.set_id
        LEFT JOIN artists a on a.id = c.artist_id
        LEFT JOIN media m on m.id = c.card_art_id
        GROUP BY c.id, c.name, s.set_code, s.total, a.name, m.filename
        HAVING to_tsvector('english', c.full_card_name || ' ' || c.abilities_text) @@ to_tsquery(search_query || ':*')
    )
    SELECT 
        cm.id,
        cm.name,
        cm.type,
        cm.cost,
        cm.might,
        cm.abilities_markup,
        cm.set_index,
        cm.set_code,
        cm.set_total,
        cm.rarity,
        cm.artist_name,
        cm.art_public_id,
        COALESCE(cm.runes, ARRAY[]::TEXT[]) as runes,
        cm.recycle_serial,
        COALESCE(cm.keywords, '[]'::JSON) as keywords,
        COALESCE(cm.tags, ARRAY[]::TEXT[]) as tags
    FROM card_metadata cm;
END;
$$ LANGUAGE plpgsql;
