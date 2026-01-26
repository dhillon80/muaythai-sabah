import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// 🕵️‍♂️ DEBUG LOGS (Kept for your peace of mind)
if (process.env.NODE_ENV !== 'production') {
    console.log("--- Supabase Connection Diagnostic ---");
    console.log("URL Status:", supabaseUrl ? "✅ DETECTED" : "❌ MISSING");
    console.log("Key Status:", supabaseAnonKey ? "✅ DETECTED" : "❌ MISSING");
}

// Check for keys and export the client
if (!supabaseUrl || !supabaseAnonKey) {
    console.error("❌ Supabase keys are missing! Check your Vercel Environment Variables.");
}

export const supabase = createClient(
    supabaseUrl || '', 
    supabaseAnonKey || ''
);