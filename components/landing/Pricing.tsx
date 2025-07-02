import React from "react";
import { PRICING_PLANS } from "../../constants";
import { Check } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

function Pricing() {
  return (
    <section id="pricing">
      <div className="container px-4 md:px-6 py-14 mx-auto">
        <div className="flex flex-col gap-2 items-center justify-center mb-8">
          <h3 className="section-title">Pricing</h3>
          <p className="text-center text-sm text-neutral-500 max-w-[600px]">
            Choose the plan that best suits your online education needs, from
            starting out to professional solutions. *Prices are in USD.
          </p>
        </div>

        {/* Tabbed Pricing Grids */}

        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-5">
            <TabsTrigger value="monthly" className="cursor-pointer">
              Monthly
            </TabsTrigger>
            <TabsTrigger value="annually" className="cursor-pointer">
              Annually
            </TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRICING_PLANS.map((plan, idx) => (
                <div
                  key={plan.name}
                  className={`price-box
                ${
                  plan.highlight
                    ? "from-pink-100/80 to-amber-100/80 dark:from-zinc-800 dark:to-zinc-900 border border-pink-400 hover:border-pink-300"
                    : "from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 hover:border-pink-300 dark:hover:border-pink-200"
                }
                ${idx === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <h4 className="text-xl font-bold mb-2 text-center text-amber-600">
                    {plan.name}
                  </h4>
                  <div className="text-3xl font-extrabold mb-2 text-center text-pink-800">
                    {plan.priceMonth}
                    {"priceSuffixM" in plan && plan.priceSuffixM && (
                      <span className="text-sm align-baseline ml-1 font-medium text-pink-800/50 dark:text-zinc-300">
                        {plan.priceSuffixM}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 text-center mb-4 max-w-[230px] mx-auto text-sm">
                    {plan.description}
                  </p>
                  <ul
                    className={`mb-6 grid grid-cols-1 gap-x-4 gap-y-2 ${
                      plan.name === "Professional"
                        ? "md:grid-cols-2 lg:grid-cols-1"
                        : ""
                    }`}
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200"
                      >
                        <Check
                          className="w-4 h-4 text-pink-400 shrink-0"
                          strokeWidth={4}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`pricing-btn ${
                      plan.highlight
                        ? "bg-pink-500 text-white hover:bg-pink-600"
                        : "bg-zinc-200 text-zinc-900 hover:bg-pink-600 hover:text-white dark:bg-zinc-700 dark:text-white dark:hover:bg-pink-600"
                    }`}
                  >
                    <Link href="/pricing">Get Started</Link>
                  </button>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="annually">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRICING_PLANS.map((plan, idx) => (
                <div
                  key={plan.name}
                  className={`price-box
                ${
                  plan.highlight
                    ? "from-pink-100/80 to-amber-100/80 dark:from-zinc-800 dark:to-zinc-900 border border-pink-400 hover:border-pink-300"
                    : "from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 hover:border-pink-300 dark:hover:border-pink-200"
                }
                ${idx === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <h4 className="text-xl font-bold mb-2 text-center text-amber-600">
                    {plan.name}
                  </h4>
                  <div className="text-3xl font-extrabold mb-2 text-center text-pink-800">
                    {plan.priceAnnual}
                    {"priceSuffixA" in plan && plan.priceSuffixA && (
                      <span className="text-sm align-baseline ml-1 font-medium text-pink-800/50 dark:text-zinc-300">
                        {plan.priceSuffixA}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 text-center mb-4 max-w-[230px] mx-auto text-sm">
                    {plan.description}
                  </p>
                  <ul
                    className={`mb-6 grid grid-cols-1 gap-x-4 gap-y-2 ${
                      plan.name === "Professional"
                        ? "md:grid-cols-2 lg:grid-cols-1"
                        : ""
                    }`}
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200"
                      >
                        <Check
                          className="w-4 h-4 text-pink-400 shrink-0"
                          strokeWidth={4}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`pricing-btn ${
                      plan.highlight
                        ? "bg-pink-500 text-white hover:bg-pink-600"
                        : "bg-zinc-200 text-zinc-900 hover:bg-pink-600 hover:text-white dark:bg-zinc-700 dark:text-white dark:hover:bg-pink-600"
                    }`}
                  >
                    <Link href="/pricing">Get Started</Link>
                  </button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Pricing;
