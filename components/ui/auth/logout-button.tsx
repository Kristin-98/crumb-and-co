"use client";

import { signOut } from "@/lib/supabase/auth";
import { Button } from "../button";

export function LogoutButton() {
  return (
    <Button
      type="button"
      onClick={async () => {
        await signOut();
        window.location.href = "/";
      }}
    >
      Log out
    </Button>
  );
}
