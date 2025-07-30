import { createClient } from '@supabase/supabase-js'
const URL = 'https://qnhrstukodtlbcriqgns.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaHJzdHVrb2R0bGJjcmlxZ25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NDIzMDIsImV4cCI6MjA2OTQxODMwMn0.HmjbPIHf1WimEd_LzkjS2OFwPi3TwUzU1UpGATx52B4'
export const supabase = createClient(URL, API_KEY)
