"use client";

import React from "react";
import { FEATURES } from "../../constants";

function Features() {
  // Handler to update CSS variables for interactive hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section>
      <div className="container px-4 md:px-6 py-10 md:py-16 mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h3 className="section-title">Features</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className={`relative group bg-gradient-to-tr from-amber-50/60 to-pink-50/60 dark:bg-zinc-900 border border-pink-900/10 dark:border-zinc-700 rounded-xl shadow-lg dark:shadow-zinc-900 p-8 transition-all duration-300 cursor-pointer overflow-hidden feature-box ${
                idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onMouseMove={handleMouseMove}
            >
              <div className="flex items-center justify-center mb-4 text-neutral-800 dark:text-neutral-500">
                {React.createElement(feature.icon, {
                  className: "w-12 h-12",
                  "aria-label": feature.title,
                })}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center">
                {feature.title}
              </h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-center max-w-[500px] mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
