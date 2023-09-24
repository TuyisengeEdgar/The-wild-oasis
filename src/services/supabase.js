import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tlapmpkkxegikifyeqvz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsYXBtcGtreGVnaWtpZnllcXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzODQ4NDQsImV4cCI6MjAwNTk2MDg0NH0.FSlkeeEsRzSbPSNqq_AUgL68o7uT5CEpWleExQAh3kY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
