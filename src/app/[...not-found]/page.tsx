export default function NotFoundPage() {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-green-500 drop-shadow-md sm:text-7xl">
        Oops
      </h1>
      <p className="mt-4 text-lg text-gray-300 sm:text-xl">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="mt-6 inline-block rounded-full bg-green-500 px-6 py-3 text-sm font-medium transition-colors duration-200 hover:bg-green-600"
      >
        Go Back Home
      </a>
    </div>
  );
}
