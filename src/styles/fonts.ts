import { Chivo, Antic } from "next/font/google";

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
});

const antic = Antic({
  weight: "400",
});

export { chivo, antic };
