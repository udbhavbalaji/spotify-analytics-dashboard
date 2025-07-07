import { FaArrowRight } from "react-icons/fa6";
import UnwrappedBlockButton from "./UnwrappedBlockButton";

const InformationCard = () => {
  return (
    <div
      // className="mx-auto mt-10 w-full rounded-2xl border border-zinc-800 bg-[#031903] p-6 text-white shadow-xl"
      className="mx-auto mt-10 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-white shadow-xl"
    >
      <h2 className="mb-2 text-2xl font-semibold">Connect your Spotify</h2>
      <p className="mb-4 text-zinc-400">
        To personalize your dashboard and generate insights, we need access to
        your Spotify listening data.
      </p>
      <UnwrappedBlockButton href="/api/spotify/authorize">
        <span className="mt-10 mb-4 flex inline-flex items-center gap-3 text-center">
          Connect Spotify
          <FaArrowRight className="h-4 w-4" />
        </span>
      </UnwrappedBlockButton>
    </div>
  );
};

export default InformationCard;
