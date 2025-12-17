"use client";

import { Button } from "@/components/ui/button";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useSearchParams } from "next/navigation";

export function LoginButton() {
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") ?? "/";

  const supabase = createBrowserSupabaseClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${
          window.location.origin
        }/auth/callback?next=${encodeURIComponent(redirectPath)}`,
      },
    });
  };

  return <Button onClick={handleLogin}>Sign in with Google</Button>;
}
