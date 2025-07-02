"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ThemeToggleAlt() {
  const { theme, setTheme } = useTheme();

  return (
    <p onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <span className="dark:text-white">Toggle Theme</span>
    </p>
  );
}
