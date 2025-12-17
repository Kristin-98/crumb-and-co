export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600">Authentication Error</h1>
      <p className="mt-4">
        There was a problem completing the sign-in process. Please try again or
        contact support if the issue persists.
      </p>
    </div>
  );
}
