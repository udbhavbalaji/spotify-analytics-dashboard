import { SignIn, SignedOut, SignedIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
      <SignedOut>
        <SignIn routing="hash" />
      </SignedOut>
      <SignedIn>I'm signed in</SignedIn>
    </main>
  );
};

export default SignInPage;
