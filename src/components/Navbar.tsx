"use client";

import { useState } from "react";
import type { NavbarProps } from "@/types";
import Link from "next/link";
import {
  FaRegEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaSquareFacebook,
} from "react-icons/fa6";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const Navbar = (props: NavbarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarVisbility = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`top-0 left-0 z-20 ${props.styling.bg} py-8`}>
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href={props.title.href}
              className={`${props.styling.title.font ?? ""} text-2xl font-bold transition-colors duration-200 ${props.styling.title.text} ${props.styling.title.hover}`}
            >
              {props.title.label}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              {props.navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${props.styling.item.font ?? ""} mt-2 transition-colors duration-200 ${props.styling.item.text} ${props.styling.item.hover}`}
                >
                  {item.label}
                </Link>
              ))}

              <SignedOut>
                <SignInButton mode="modal">
                  <span
                    className={`${props.styling.item.font ?? ""} mt-2 transition-colors duration-200 ${props.styling.item.text} ${props.styling.item.hover} cursor-pointer`}
                  >
                    Sign In
                  </span>
                </SignInButton>
              </SignedOut>

              {props.includeSocials && (
                <ul
                  className={`text-md inline-flex font-medium ${props.styling.icon.text}`}
                >
                  <li className="my-1 ml-8 w-full justify-between gap-4">
                    {props.includeSocials.github && (
                      <div className="mx-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href="https://github.com/udbhavbalaji"
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.hover}`}
                        >
                          <FaGithub />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.linkedin && (
                      <div className="mx-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href="https://linkedin.com/in/udbhav-balaji"
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.hover}`}
                        >
                          <FaLinkedin />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.email && (
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href="mailto:udbhavbalaji@gmail.com"
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.hover}`}
                        >
                          <FaRegEnvelope />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.instagram && (
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href=""
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.hover}`}
                        >
                          <FaInstagram />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.twitter && (
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href=""
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.hover}`}
                        >
                          <FaXTwitter />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.facebook && (
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href=""
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.hover}`}
                        >
                          <FaSquareFacebook />
                        </Link>
                      </div>
                    )}

                    <SignedIn>
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <UserButton />
                      </div>
                    </SignedIn>
                  </li>
                </ul>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`transition-colors duration-200 ${props.styling.icon.text} ${props.styling.icon.hover} cursor-pointer md:hidden`}
              onClick={toggleSidebarVisbility}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        {/* Overlay */}
        <div
          className="bg-opacity-70 fixed inset-0 bg-black"
          onClick={toggleSidebarVisbility}
        />

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 transform bg-inherit transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <button
            className={`absolute top-4 right-4 transition-colors duration-200 ${props.styling.icon.text} ${props.styling.icon.hover ?? ""} cursor-pointer`}
            onClick={toggleSidebarVisbility}
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Sidebar Navigation */}
          <nav className="mt-16 p-4">
            <div className="flex flex-col space-y-4">
              {props.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleSidebarVisbility}
                  className={`text-lg ${props.styling.item.text} transition-colors duration-200 ${props.styling.item.hover}`}
                >
                  {item.label}
                </Link>
              ))}

              {/*<SignedOut>
                <Link
                  href="/sign-in"
                  className={`${props.styling.item.font ?? ""} mt-2 transition-colors duration-200 ${props.styling.item.text} ${props.styling.item.hover}`}
                >
                  Sign In
                </Link>
              </SignedOut>*/}

              <SignedOut>
                <SignInButton mode="modal">
                  <span
                    className={`text-lg ${props.styling.item.text} transition-colors duration-200 ${props.styling.item.hover} cursor-pointer`}
                  >
                    Sign In
                  </span>
                </SignInButton>
              </SignedOut>

              {props.includeSocials && (
                <ul className="text-md absolute bottom-5 inline-flex font-medium">
                  <li className="my-1 ml-8 w-full justify-between gap-4">
                    {props.includeSocials.github && (
                      <div className="mx-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href="https://github.com/udbhavbalaji"
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.text} ${props.styling.icon.hover}`}
                        >
                          <FaGithub />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.linkedin && (
                      <div className="mx-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href="https://linkedin.com/in/udbhav-balaji"
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.text} ${props.styling.icon.hover}`}
                        >
                          <FaLinkedin />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.email && (
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href="mailto:udbhavbalaji@gmail.com"
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.text} ${props.styling.icon.hover}`}
                        >
                          <FaRegEnvelope />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.instagram && (
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href=""
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.text} ${props.styling.icon.hover}`}
                        >
                          <FaInstagram />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.twitter && (
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href=""
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.text} ${props.styling.icon.hover}`}
                        >
                          <FaXTwitter />
                        </Link>
                      </div>
                    )}

                    {props.includeSocials.facebook && (
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <Link
                          href=""
                          className={`rounded-full text-2xl transition-colors duration-200 ${props.styling.icon.hover}`}
                        >
                          <FaSquareFacebook />
                        </Link>
                      </div>
                    )}

                    <SignedIn>
                      <div className="ml-5 inline-flex h-6 w-6 rounded-full">
                        <UserButton />
                      </div>
                    </SignedIn>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
