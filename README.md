# minion

Discord bot for Riot's Project K TCG

## Overview

minion is a Discord bot designed to enhance your experience with Riot's Project K Trading Card Game (TCG). It allows users to summon cards, get card images, and search for spoilers using both in-line and slash commands.

## Usage

minion has two modes of use: in-line and slash commands.

### In-line Commands

#### Summon a Card

You can summon a card by using the `[[term]]` notation, where `term` is the character or descriptor of a card. For example, `[[Jinx]]` will summon a Jinx card, whereas `[[Loose Cannon]]` will summon specifically the Loose Cannon Jinx card.

#### Image Only

Use the exclamation modifier `[[!term]]` to set the bot to only return an image.

#### Spoiler

Use the question mark modifier `[[?term]]` to set the bot to return a spoiler.

### Slash Commands

#### /card card-name

This command provides a list of matching cards. For example, `/card miss fortune` will give you Miss Fortune Buccaneer and Miss Fortune Captain to choose from.

#### /spoiler search-term

This command provides a list of spoilers matching the search term.

## Testing

### Build Code

```sh
npm run build
```

### Run Bot

```sh
npm run start
```

## Notes

### Update Database Types

```sh
npx supabase gen types typescript --project-id <SUPABASE_PROJECT_ID> --schema public > src/supabase/database.types.ts
```

Supabase Project ID can be found in the interface under project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
