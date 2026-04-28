"use client";

import { useState, useMemo } from "react";
import CoffeeCard from "@/components/CoffeeCard";
import { coffees, categories } from "@/data/coffees";

const origins = [...new Set(coffees.map((c) => c.origin))];
const roastLevels = ["Light", "Medium", "Medium-Dark", "Dark"] as const;

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all");
  const [selectedRoast, setSelectedRoast] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const filtered = useMemo(() => {
    let result = [...coffees];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.roaster.toLowerCase().includes(q) ||
          c.origin.toLowerCase().includes(q) ||
          c.flavorNotes.some((n) => n.toLowerCase().includes(q))
      );
    }

    if (selectedOrigin !== "all") {
      result = result.filter((c) => c.origin === selectedOrigin);
    }

    if (selectedRoast !== "all") {
      result = result.filter((c) => c.roastLevel === selectedRoast);
    }

    result = result.filter(
      (c) => c.price >= priceRange[0] && c.price <= priceRange[1]
    );

    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        result.sort((a, b) => b.ratingsCount - a.ratingsCount);
        break;
      case "discount":
        result.sort((a, b) => {
          const dA = a.originalPrice
            ? ((a.originalPrice - a.price) / a.originalPrice) * 100
            : 0;
          const dB = b.originalPrice
            ? ((b.originalPrice - b.price) / b.originalPrice) * 100
            : 0;
          return dB - dA;
        });
        break;
    }

    return result;
  }, [search, selectedOrigin, selectedRoast, sortBy, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-100 font-serif">
          Explorar cafés
        </h1>
        <p className="text-stone-500 mt-2">
          {filtered.length} cafés encontrados
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-24 space-y-6">
            {/* Search */}
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 block">
                Buscar
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Nombre, tostador, origen..."
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-stone-900 border border-stone-800 rounded-xl text-stone-200 placeholder:text-stone-600 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Origin Filter */}
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 block">
                Origen
              </label>
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="w-full py-2.5 px-3 text-sm bg-stone-900 border border-stone-800 rounded-xl text-stone-200 outline-none focus:border-amber-500/50 transition-all appearance-none cursor-pointer"
              >
                <option value="all">Todos los orígenes</option>
                {origins.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Roast Level */}
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 block">
                Tueste
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedRoast("all")}
                  className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                    selectedRoast === "all"
                      ? "bg-amber-500/20 border-amber-500/40 text-amber-400"
                      : "bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700"
                  }`}
                >
                  Todos
                </button>
                {roastLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedRoast(level)}
                    className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                      selectedRoast === level
                        ? "bg-amber-500/20 border-amber-500/40 text-amber-400"
                        : "bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 block">
                Precio: €{priceRange[0]} — €{priceRange[1]}
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-full accent-amber-500"
              />
            </div>

            {/* Sort */}
            <div>
              <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 block">
                Ordenar por
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-2.5 px-3 text-sm bg-stone-900 border border-stone-800 rounded-xl text-stone-200 outline-none focus:border-amber-500/50 transition-all appearance-none cursor-pointer"
              >
                <option value="rating">Mejor puntuación</option>
                <option value="popular">Más popular</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="discount">Mayor descuento</option>
              </select>
            </div>

            {/* Reset */}
            <button
              onClick={() => {
                setSearch("");
                setSelectedOrigin("all");
                setSelectedRoast("all");
                setSortBy("rating");
                setPriceRange([0, 100]);
              }}
              className="w-full py-2 text-xs text-stone-500 hover:text-amber-400 border border-stone-800 rounded-xl hover:border-amber-500/30 transition-all"
            >
              Limpiar filtros
            </button>
          </div>
        </aside>

        {/* Results Grid */}
        <div className="flex-1">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((coffee) => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <span className="text-5xl mb-4">🔍</span>
              <h3 className="text-lg font-semibold text-stone-300">
                No se encontraron cafés
              </h3>
              <p className="text-sm text-stone-500 mt-1">
                Intenta ajustar los filtros o busca algo diferente.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
