import { signOut } from "@/lib/supabase/auth";
import { Button } from "../button";

export function LogoutButton() {
  return <Button onClick={signOut}>Logout</Button>;
}
