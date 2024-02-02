import {createClient} from "@supabase/supabase-js"

const supabaseUrl = 'https://vpvowchtxaflctpdhfre.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdm93Y2h0eGFmbGN0cGRoZnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4NzkzMjUsImV4cCI6MjAyMjQ1NTMyNX0.O1v5hX4-BxrHjbTEfAS9T2KpCy7DIYnIBlEMlxme0nY'
//tIfvgmq6uxj7addn
export const supabase  = createClient(supabaseUrl, supabaseKey)