import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fbmkdkvnkvxpyvymrxpv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZibWtka3Zua3Z4cHl2eW1yeHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNTQ1MTksImV4cCI6MjA3MzYzMDUxOX0.0FlkAHUgr0YDGzRrqC1Ryw3-gXJR0bx6ETb3dDnut7k'
export const supabase = createClient(supabaseUrl, supabaseKey)