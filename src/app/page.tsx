import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-green-500 sm:text-6xl">
          Dive Into Your Spotify Listening Habits
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-zinc-300 sm:text-xl">
          Visualize your music taste, explore trends in your top songs and
          artists, and unlock insights powered by audio features and machine
          learning.
        </p>
        <Link
          href="/sign-up"
          className="rounded-full bg-green-500 px-6 py-3 text-lg font-medium text-black transition hover:bg-green-400"
        >
          Get Started
        </Link>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full border-t border-zinc-800 py-4 text-center text-sm text-zinc-500">
        Built with ❤️ using the Spotify API & Clerk Auth
      </footer>
    </>
  );
}
