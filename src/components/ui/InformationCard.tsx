// "use client";
//
// import { FaArrowRight } from "react-icons/fa6";
// import Link from "next/link";
//
// const InformationCard = () => {
//   return (
//     <div className="mx-auto mt-10 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-white shadow-xl">
//       <h2 className="mb-2 text-2xl font-semibold">Connect your Spotify</h2>
//       <p className="mb-4 text-zinc-400">
//         To personalize your dashboard and generate insights, we need access to
//         your Spotify listening data.
//       </p>
//       <Link
//         href="/api/spotify/authorize"
//         className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 font-bold text-black transition hover:bg-green-600"
//       >
//         Connect Spotify
//         <FaArrowRight className="h-4 w-4" />
//       </Link>
//     </div>
//   );
// };
//
// export default InformationCard;
//

import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import type { InformationCardProps } from "@/types/ui";
import UnwrappedBlockButton from "../UnwrappedBlockButton";
import UnwrappedOutlineButton from "../UnwrappedOutlineButton";
import Button from "./Button";

const InformationCard: React.FC<InformationCardProps> = ({
  titleText,
  subtitleText,
  buttonText,
  styling,
}) => {
  // return (
  //   <div className="mx-auto mt-10 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-white shadow-xl">
  //     <h2 className="mb-2 text-2xl font-semibold">{titleText}</h2>
  //     <p className="mb-4 text-zinc-400">{subtitleText}</p>
  //     {/*<Link
  //       href="/api/spotify/authorize"
  //       className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 font-bold text-black transition hover:bg-green-600"
  //     >
  //       Connect Spotify
  //       <FaArrowRight className="h-4 w-4" />
  //     </Link>*/}
  //     <Button
  //       href="/api/spotify/authorize"
  //       className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 font-bold text-black transition hover:bg-green-600"
  //     >
  //       Connect Spotify
  //       <FaArrowRight className="h-4 w-4" />
  //     </Button>
  //   </div>
  // );

  return (
    <div
      className={`mx-auto mt-10 w-full rounded-2xl ${styling.borderColor ? `border ${styling.borderColor}` : ""} ${styling.backgroundColor} p-6 text-white shadow-xl`}
    >
      <h2
        className={`mb-2 ${styling.title.fontSize} ${styling.title.fontWeight} ${styling.title.textColor} ${styling.title.font}`}
      >
        {titleText}
      </h2>
      <p
        className={`mb-4 ${styling.subtitle.fontSize} ${styling.subtitle.fontWeight} ${styling.subtitle.textColor} ${styling.subtitle.font}`}
      >
        {subtitleText}
      </p>

      {buttonText && styling.buttonStyle && styling.buttonStyle === "block" && (
        <UnwrappedBlockButton href="/api/spotify/authorize">
          {buttonText}
        </UnwrappedBlockButton>
      )}

      {buttonText &&
        styling.buttonStyle &&
        styling.buttonStyle === "outline" && (
          <UnwrappedOutlineButton href="/api/spotify/authorize">
            <span className="mt-6 flex inline-flex gap-3 font-bold">
              {buttonText}
            </span>
          </UnwrappedOutlineButton>
        )}

      {/*<Link
        href="/api/spotify/authorize"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 font-bold text-black transition hover:bg-green-600"
      >
        Connect Spotify
        <FaArrowRight className="h-4 w-4" />
      </Link>*/}
    </div>
  );
};

export default InformationCard;
