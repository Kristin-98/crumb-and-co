"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/dbClient";

export function LoginButton() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return <Button onClick={handleLogin}>Sign in with Google</Button>;
}
