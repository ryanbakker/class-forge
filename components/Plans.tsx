import Link from "next/link";
import { Button } from "./ui/button";
import { FaCheck } from "react-icons/fa";
import {
  emberPlanFeatures,
  infernoPlanFeatures,
  sparkPlanFeatures,
} from "@/types/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function Plans() {
  return (
    <section className="py-20 dark:bg-neutral-950">
      <div className="container! mx-4 md:mx-auto">
        <h3 className="text-4xl font-bold pb-8 bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-fuchsia-600 underline underline-offset-6 decoration-orange-600 decoration-2">
          Plans
        </h3>
      </div>
      <div className="container md:mx-auto flex flex-col items-center px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          <div className="flex justify-center items-start bg-gradient-to-tr from-orange-100 to-orange-50 dark:from-orange-700/60 dark:to-fuchsia-700/60 py-6 md:p-6 rounded-lg border-fuchsia-300/40 border hover:border-fuchsia-300 transition-all cursor-default max-w-full">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <h4 className="text-3xl font-medium text-orange-700/70 dark:text-orange-400/70">
                  Spark
                </h4>
                <span className="text-xl text-black/70 dark:text-white/60">
                  Free
                </span>
              </div>
              <p className="text-black/70 text-sm dark:text-white/60 ">
                Try out the AI agent and services for free
              </p>
              <ul className="flex flex-col gap-2">
                {sparkPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex flex-row items-center gap-2">
                    <FaCheck className="text-orange-700/70 dark:text-orange-400/70" />
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-start bg-gradient-to-tr from-orange-100 to-orange-50 dark:from-orange-700/60 dark:to-fuchsia-700/60 p-6 rounded-lg border-fuchsia-300/40 border hover:border-fuchsia-300 transition-all cursor-default max-w-full">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <h4 className="text-3xl font-medium text-orange-700/70 dark:text-orange-400/70">
                  Ember
                </h4>
                <span className="text-xl text-black/70 dark:text-white/60">
                  $9.99
                </span>
              </div>
              <p className="text-black/70 text-sm dark:text-white/60">
                Use in-depth tools to enhance your course
              </p>
              <ul className="flex flex-col gap-2">
                {emberPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex flex-row items-center gap-2">
                    <FaCheck className="text-orange-700/70 dark:text-orange-400/70" />
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-start bg-gradient-to-tr from-orange-100 to-orange-50 dark:from-orange-700/60 dark:to-fuchsia-700/60 p-6 rounded-lg border-fuchsia-300/40 border hover:border-fuchsia-300 transition-all cursor-default max-w-full">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <h4 className="text-3xl font-medium text-orange-700/70 dark:text-orange-400/70">
                  Inferno
                </h4>
                <span className="text-xl text-black/70 dark:text-white/60">
                  $29.99
                </span>
              </div>
              <p className="text-black/70 text-sm dark:text-white/60">
                The ultimate tailoured ClassForge assistant
              </p>
              <ul className="flex flex-col gap-2">
                {infernoPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex flex-row items-center gap-2">
                    <FaCheck className="text-orange-700/70 dark:text-orange-400/70" />
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SignedOut>
            <Link href="/manage-plan">
              <Button className="px-10! bg-orange-800 hover:bg-orange-700 transition-all">
                Purchase Plan
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/manage-plan">
              <Button className="px-10! bg-orange-800 hover:bg-orange-700 transition-all">
                Manage Plan
              </Button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </section>
  );
}

export default Plans;
