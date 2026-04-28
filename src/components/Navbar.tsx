"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-950 border-b border-stone-800/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">☕</span>
            <span className="text-xl font-bold tracking-tight text-amber-400 font-serif">
              CaCafé
            </span>
          </Link>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-1 ml-8">
            {[
              { href: "/explore", label: "Cafés" },
              { href: "/explore?filter=offers", label: "Ofertas" },
              { href: "/explore?filter=origins", label: "Orígenes" },
              { href: "/explore?filter=roasters", label: "Tostadores" },
              { href: "/explore?filter=specialty", label: "Especialidad" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-stone-300 hover:text-amber-400 transition-colors rounded-lg hover:bg-stone-800/50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md mx-6">
            <div
              className={`relative w-full transition-all duration-200 ${
                searchFocused ? "scale-[1.02]" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Buscar cafés, tostadores, orígenes..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full pl-10 pr-4 py-2 text-sm rounded-full transition-all duration-200 outline-none
                  ${
                    searchFocused
                      ? "bg-stone-800 border-amber-500/50 text-white ring-2 ring-amber-500/20"
                      : "bg-stone-900 border-stone-700 text-stone-300"
                  }
                  border placeholder:text-stone-500`}
              />
              <svg
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                  searchFocused ? "text-amber-400" : "text-stone-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <Link
              href="/explore"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-colors"
            >
              Explorar
            </Link>
            <button className="relative p-2 text-stone-400 hover:text-amber-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-bold flex items-center justify-center bg-amber-500 text-stone-950 rounded-full">
                3
              </span>
            </button>
            <button className="p-2 text-stone-400 hover:text-amber-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-stone-400 hover:text-amber-400 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-800/50 bg-stone-950">
          <div className="px-4 py-3">
            <input
              type="text"
              placeholder="Buscar cafés..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-900 border border-stone-700 rounded-full text-stone-300 placeholder:text-stone-500 outline-none focus:border-amber-500/50"
            />
          </div>
          <nav className="px-2 pb-3 space-y-1">
            {[
              { href: "/explore", label: "Cafés" },
              { href: "/explore?filter=offers", label: "Ofertas" },
              { href: "/explore?filter=origins", label: "Orígenes" },
              { href: "/explore?filter=roasters", label: "Tostadores" },
              { href: "/explore?filter=specialty", label: "Especialidad" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm text-stone-300 hover:text-amber-400 hover:bg-stone-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
