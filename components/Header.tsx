import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { BsFire } from "react-icons/bs";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Button } from "./ui/button";
import { BiLogIn } from "react-icons/bi";
import ThemeToggle from "./themes/ThemeToggle";
import { FaUser } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

// bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-fuchsia-400

function Header() {
  return (
    <header className="bg-gradient-to-tr from-orange-600 to-fuchsia-400 dark:from-orange-800 dark:to-fuchsia-700 transition-colors">
      <div className="container mx-auto">
        <nav className="flex px-3 flex-row items-center justify-between h-16">
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
                  className="flex flex-row items-center uppercase px-6! text-orange-900 dark:text-orange-100 transition-all hover:bg-orange-100 dark:hover:bg-fuchsia-950"
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
        </nav>
      </div>

      <div className="flex flex-col justify-between gap-12 items-center pt-20 pb-28">
        <div className="flex flex-col gap-2 items-center">
          <BsFire className="text-fuchsia-200 h-14 w-14" />
          <h2 className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-200 to-fuchsia-200 font-extrabold text-[35px]! md:text-6xl! uppercase text-center md:max-w-[13em]">
            Forge next-level classes for your{" "}
            <span className="underline text-orange-100 decoration-3 underline-offset-10">
              online courses
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10! md:gap-7">
          <p className="text-white max-w-[600px] text-center">
            Your AI-powered teaching assistant. Get instant engaging course
            content, class plans, and homework tailored to your needs.
          </p>

          <div className="flex flex-col gap-7 md:flex-row md:gap-3">
            <Link href="/dashboard">
              <Button
                variant="secondary"
                className="flex items-center text-orange-900 w-[300px] md:w-[170px] py-5! cursor-pointer hover:bg-orange-100 transition-all dark:text-orange-100 dark:hover:bg-fuchsia-950"
              >
                <RiDashboardFill />
                Dashboard
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button
                variant="secondary"
                className="flex items-center text-orange-900 w-[300px] md:w-[170px] py-5! cursor-pointer hover:bg-orange-100 transition-all dark:text-orange-100 dark:hover:bg-fuchsia-950"
              >
                <FaUser />
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
