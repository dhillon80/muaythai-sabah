import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// 🕵️‍♂️ DEBUG LOGS (Check these in F12 Console)
console.log("--- Supabase Connection Diagnostic ---");
console.log("URL Status:", supabaseUrl ? "✅ DETECTED" : "❌ MISSING");
console.log("Key Status:", supabaseAnonKey ? "✅ DETECTED" : "❌ MISSING");
console.log("Environment:", process.env.NODE_ENV);

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null