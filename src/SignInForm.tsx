"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "./components/ui/button";

export function SignInForm() {
  const { signIn } = useAuthActions();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Button onClick={() => signIn("anonymous")}>Sign in anonymously</Button>
    </div>
  );
}
