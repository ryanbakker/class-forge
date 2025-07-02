import { Anvil, LayoutPanelLeft, LogIn } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { NAV_ITEMS } from "../../constants";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className="min-h-[80vh] lg:min-h-[60vh] bg-gradient-to-tr from-amber-500 dark:from-amber-700 to-pink-500 dark:to-pink-700">
      <div className="container px-4 md:px-6 mx-auto">
        <nav className="flex flex-row items-center justify-between py-3">
          <div className="flex flex-row items-center space-x-2 text-white">
            <Anvil />
            <h2 className="font-semibold text-lg tracking-tight">ClassForge</h2>
          </div>
          <ul className="flex flex-row items-center space-x-3 md:space-x-6 text-white">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative text-white hover:text-amber-200 transition-colors duration-200 ease-in-out group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-200 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <SignedIn>
              <li className="flex items-center justify-center">
                <UserButton />
              </li>
            </SignedIn>
            <SignedOut>
              <li>
                <Button
                  variant="outline"
                  asChild
                  size="sm"
                  className="bg-white/5 rounded-full cursor-pointer"
                >
                  <SignInButton mode="modal" />
                </Button>
              </li>
            </SignedOut>
            <li className="text-neutral-900">
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <div className="flex flex-col items-center py-20 gap-12">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase text-center max-w-[600px] md:max-w-[850px]">
            Kickstart and grow your online courses today with ease!
          </h1>

          <p className="text-white/90 text-sm text-center max-w-[800px] lg:text-base">
            ClassForge allows you to easily create and manage your online
            courses all in one place. Use the Studio to preview and quickly edit
            course content, or use built in AI when you get writer's block.
          </p>

          <div className="flex flex-row items-center gap-5 justify-center">
            <Button variant="secondary" asChild>
              <Link href="/dashboard">
                <LayoutPanelLeft /> Dashboard
              </Link>
            </Button>

            <Button variant="outline" className="bg-white/5 text-white" asChild>
              <Link href="/sign-up">
                <LogIn /> Sign up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
