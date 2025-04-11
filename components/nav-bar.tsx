"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="fixed left-0 top-0 z-20 mx-auto flex h-[70px] w-full items-center border-b-4 border-border bg-secondary-background px-5">
      <div className="mx-auto flex w-[1300px] text-foreground max-w-full items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link
            className="text-[22px] size-10 rounded-[var(--radius-base)] flex bg-main text-main-foreground border-2 border-border shadow-[var(--shadow)] items-center justify-center font-[var(--font-weight-heading)]"
            href={"/"}
          >
            N
          </Link>
        </div>

        {/* Center - Search */}
        <div className="hidden sm:flex flex-1 max-w-md mx-8">
          <form onSubmit={handleSearch} className="w-full relative">
            <Input
              type="search"
              placeholder="Search notes..."
              className="w-full pl-10 pr-4 py-2 border-2 border-border rounded-[var(--radius-base)] bg-background shadow-[var(--shadow)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground size-4" />
          </form>
        </div>

        {/* Right side - Nav links */}
        <div className="flex items-center gap-2">
          <Link
            href="/sign-in"
            className="flex gap-2 items-center justify-center rounded-[var(--radius-base)] border-2 border-border shadow-[var(--shadow)] px-4 h-10 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none bg-main"
          >
            <span className="font-semibold">Sign In</span>
          </Link>

          {/* Mobile search button */}
          <button
            className="sm:hidden flex items-center justify-center rounded-[var(--radius-base)] border-2 border-border shadow-[var(--shadow)] size-10 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
            onClick={() => {
              // Handle mobile search toggle
            }}
          >
            <Search className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile search bar (hidden by default) */}
      <div className="sm:hidden absolute left-0 top-full w-full bg-secondary-background border-b-2 border-border px-4 py-3 hidden">
        <form onSubmit={handleSearch} className="w-full relative">
          <Input
            type="search"
            placeholder="Search notes..."
            className="w-full pl-10 pr-4 py-2 border-2 border-border rounded-[var(--radius-base)]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground size-4" />
        </form>
      </div>
    </nav>
  );
}
