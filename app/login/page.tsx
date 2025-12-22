import LoginClient from "./login-client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
        <h2 className="text-3xl font-bold">Sign in to continue</h2>

        <p className="text-muted-foreground">
          You need to be signed in to complete your checkout and place your
          order.
        </p>

        <LoginClient />

        <p className="text-sm text-muted-foreground">
          We’ll bring you back to checkout after signing in.
        </p>
      </div>
    </div>
  );
}
