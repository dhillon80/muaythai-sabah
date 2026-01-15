import { createClient } from '@supabase/supabase-js'

// This pulls the keys you saved in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// This creates the connection "client"
export const supabase = createClient(supabaseUrl, supabaseAnonKey)