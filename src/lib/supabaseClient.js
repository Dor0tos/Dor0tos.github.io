import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://mhetgcowvwbjthnolnpe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZXRnY293dndianRobm9sbnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2OTE4MDUsImV4cCI6MjAyMjI2NzgwNX0.v7R3UEJsgtPTwVC4bqeAPfR1qnL-XXR1nHLJjQtviUc'
)
