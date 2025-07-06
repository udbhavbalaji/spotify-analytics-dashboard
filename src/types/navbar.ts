import type { NextFont } from "next/dist/compiled/@next/font";

type SocialPlatforms =
  | "linkedin"
  | "email"
  | "github"
  | "instagram"
  | "facebook"
  | "twitter";

export interface NavbarProps {
  title: {
    label: string;
    href: string;
  };
  styling: {
    title: TextStyling;
    item: TextStyling;
    icon: Omit<TextStyling, "font">;
    bg: string;
  };
  navItems: NavbarItem[];
  includeSocials: Partial<Record<SocialPlatforms, string>>;
}

export type NavbarItem = {
  label: string;
  href: string;
  downloadName?: string;
};

type TextStyling = {
  text: string;
  hover?: string;
  font?: NextFont["className"];
};
