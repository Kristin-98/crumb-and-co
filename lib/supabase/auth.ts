"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export async function signOut() {
  const supabase = createBrowserSupabaseClient();
  await supabase.auth.signOut();
}
