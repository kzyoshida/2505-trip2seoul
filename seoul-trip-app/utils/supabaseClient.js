import { createClient } from '@supabase/supabase-js';

// TODO: ここに自分のSupabaseプロジェクトのURLとanonキーを設定してください
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
