"use client";

import Link from "next/link";
import { Coffee } from "@/data/coffees";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const fill = Math.min(Math.max(rating - star + 1, 0), 1);
          return (
            <svg key={star} className="w-3.5 h-3.5" viewBox="0 0 20 20">
              <defs>
                <linearGradient id={`star-fill-${star}-${rating}`}>
                  <stop offset={`${fill * 100}%`} stopColor="#f59e0b" />
                  <stop offset={`${fill * 100}%`} stopColor="#44403c" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#star-fill-${star}-${rating})`}
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          );
        })}
      </div>
      <span className="text-xs font-semibold text-amber-400">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const discount = coffee.originalPrice
    ? Math.round(((coffee.originalPrice - coffee.price) / coffee.originalPrice) * 100)
    : null;

  return (
    <Link
      href={`/coffee/${coffee.id}`}
      className="group relative flex flex-col bg-stone-900/50 border border-stone-800/50 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:bg-stone-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/10"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {discount && (
          <span className="px-2 py-0.5 text-xs font-bold bg-rose-500 text-white rounded-full">
            −{discount}%
          </span>
        )}
        {coffee.badge && (
          <span className="px-2 py-0.5 text-xs font-semibold bg-amber-500/90 text-stone-950 rounded-full">
            {coffee.badge}
          </span>
        )}
      </div>

      {/* Image Placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center overflow-hidden">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
          ☕
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
        <div className="absolute bottom-2 left-3 right-3">
          <span className="text-[10px] text-stone-400 bg-stone-900/80 px-2 py-0.5 rounded-full backdrop-blur-sm">
            {coffee.origin} · {coffee.roastLevel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <p className="text-[11px] text-amber-500/80 font-medium tracking-wide uppercase">
          {coffee.roaster}
        </p>
        <h3 className="text-sm font-semibold text-stone-100 leading-tight line-clamp-2 group-hover:text-amber-300 transition-colors">
          {coffee.name}
        </h3>

        <StarRating rating={coffee.rating} />

        <p className="text-[11px] text-stone-500">
          {coffee.ratingsCount.toLocaleString()} valoraciones
        </p>

        {/* Flavor Notes */}
        <div className="flex flex-wrap gap-1 mt-auto pt-2">
          {coffee.flavorNotes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="px-1.5 py-0.5 text-[10px] text-stone-400 bg-stone-800/80 rounded-md"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-2 border-t border-stone-800/50 mt-2">
          <span className="text-lg font-bold text-stone-100">
            €{coffee.price.toFixed(2)}
          </span>
          {coffee.originalPrice && (
            <span className="text-xs text-stone-500 line-through">
              €{coffee.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="w-full mt-2 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
        >
          Añadir al carrito
        </button>
      </div>
    </Link>
  );
}
