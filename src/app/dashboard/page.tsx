import UnwrappedInformationCard from "@/components/UnwrappedInformationCard";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 text-center sm:py-32">
      <div className="mx-auto w-3/4 items-start text-start">
        <h1 className="mb-4 text-5xl font-bold text-green-500">
          Welcome to your Dashboard 🎧
        </h1>
        <p className="text-gray-300">
          Your personalized Spotify insights will go here!
        </p>
        <UnwrappedInformationCard />
      </div>
    </main>
  );
};

export default DashboardPage;
