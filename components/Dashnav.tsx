import React from "react";
import { BsFire } from "react-icons/bs";
import ThemeToggle from "./themes/ThemeToggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { BiLogIn } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Dashnav() {
  return (
    <nav className="bg-gradient-to-tr from-orange-600 to-fuchsia-400 dark:from-orange-800 dark:to-fuchsia-700 transition-colors">
      <div className="container mx-auto flex flex-row items-center justify-between h-16">
        <div className="flex items-center gap-1">
          <BsFire className="text-white h-7 w-7" />
          <h2 className="text-2xl font-extrabold text-white">ClassForge</h2>
        </div>

        <div className="flex flex-row gap-5 md:gap-3">
          <ThemeToggle />

          <SignedOut>
            <Link href="/sign-in">
              <Button
                variant="secondary"
                className="flex flex-row items-center uppercase px-6! text-orange-900 dark:text-orange-100 transition-all hover:bg-orange-100"
              >
                Sign in
                <BiLogIn />
              </Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <div className="flex flex-row gap-3">
              <Link href="/manage-plan" className="hidden md:block">
                <Button
                  variant="secondary"
                  className="flex flex-row items-center uppercase text-orange-900 dark:text-orange-100 transition-all hover:bg-orange-100 dark:hover:bg-fuchsia-950"
                >
                  Manage Plan
                  <FaArrowAltCircleRight />
                </Button>
              </Link>

              <div className="bg-white rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition-all cursor-pointer">
                <UserButton />
              </div>
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Dashnav;
