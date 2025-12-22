"use client";

import dynamic from "next/dynamic";

const LoginButton = dynamic(
  () =>
    import("@/components/ui/auth/login-button").then(
      (mod) => mod.LoginButton
    ),
  { ssr: false }
);

export default function LoginClient() {
  return <LoginButton />;
}
