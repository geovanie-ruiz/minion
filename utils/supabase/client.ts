import { createClient } from '@supabase/supabase-js';
import { type Database } from './database.types';

// Create a single supabase client for interacting with your database
export function SupabaseClient() {
  if (!process.env.API_HOST || process.env.API_HOST === '')
    throw new Error("API Host not configured")

  if (!process.env.API_ANON_KEY || process.env.API_ANON_KEY === '')
    throw new Error("API Key not configured")

  return createClient<Database>(
    process.env.API_HOST,
    process.env.API_ANON_KEY
  )
}
