import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mt-20 text-center">
      <h1 className="text-6xl font-bold text-green-500 drop-shadow-md sm:text-7xl">
        Oops
      </h1>
      <p className="mt-4 mb-10 text-lg text-gray-300 sm:text-xl">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-green-500 px-6 py-3 text-lg font-medium text-black transition hover:bg-green-400"
      >
        Go Back Home
      </Link>
    </div>
  );
}
