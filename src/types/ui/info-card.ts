import type { NextFont } from "next/dist/compiled/@next/font";

export type TextSizes =
  | "text-xs"
  | "text-sm"
  | "text-md"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl";

export type TextWeights =
  | "font-semibold"
  | "font-bold"
  | "font-normal"
  | "font-light"
  | "font-thin"
  | "font-extrabold";

export interface InformationCardProps {
  titleText: string;
  subtitleText: string;
  buttonText?: string;
  styling: {
    title: InformationCardTextStyling;
    subtitle: InformationCardTextStyling;
    borderColor?: string;
    backgroundColor: string;
    buttonStyle?: "outline" | "block";
    buttonColor?: string;
    buttonTextColor?: string;
  };
}

type InformationCardTextStyling = {
  fontSize: TextSizes;
  fontWeight: TextWeights;
  font: NextFont["className"];
  textColor: string;
};
