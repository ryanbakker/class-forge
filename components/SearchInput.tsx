"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchInput() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const formBgClass =
    isFocused || searchQuery
      ? "bg-pink-100 dark:bg-pink-950"
      : "bg-neutral-100 dark:bg-neutral-900";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-row items-center ml-auto rounded-md px-2 py-1.5 ${formBgClass}`}
    >
      <Search
        strokeWidth={3}
        size={18}
        className="text-neutral-500 dark:text-neutral-200 mr-2"
      />
      <input
        type="text"
        placeholder="Search courses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="text-sm text-neutral-700 dark:text-neutral-200 focus:outline-none focus:ring-0"
      />
    </form>
  );
}

export default SearchInput;
