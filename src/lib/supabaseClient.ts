import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

// Aquí usamos createClient para crear la instancia supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
