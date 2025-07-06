"use client";

import { SignUp, SignedOut, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const { user } = useUser();

  if (user) redirect("/dashboard");

  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 text-center sm:py-32">
      <SignedOut>
        <SignUp routing="hash" />
      </SignedOut>
    </main>
  );
};

export default SignUpPage;
