import { supabase } from "../dbClient";

export const signOut = async () => {
  await supabase.auth.signOut();
};
