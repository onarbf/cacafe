import Hero from "@/components/Hero";
import CoffeeSection from "@/components/CoffeeSection";
import { getTopRated, getBestOffers, getBestsellers } from "@/data/coffees";
import Link from "next/link";

export default function Home() {
  const topRated = getTopRated();
  const bestOffers = getBestOffers();
  const bestsellers = getBestsellers();

  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories Bar */}
        <div className="py-8 -mt-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { icon: "⚡", label: "Espresso", color: "from-amber-600 to-orange-700" },
              { icon: "🫗", label: "Filtro", color: "from-emerald-600 to-teal-700" },
              { icon: "✨", label: "Especialidad", color: "from-violet-600 to-purple-700" },
              { icon: "📍", label: "Origen Único", color: "from-rose-600 to-pink-700" },
              { icon: "🔀", label: "Blends", color: "from-sky-600 to-blue-700" },
              { icon: "🌙", label: "Descafeinado", color: "from-stone-600 to-stone-700" },
              { icon: "🏆", label: "Top Rated", color: "from-amber-500 to-yellow-600" },
              { icon: "🔥", label: "Ofertas", color: "from-red-600 to-rose-700" },
            ].map((cat) => (
              <Link
                key={cat.label}
                href="/explore"
                className="flex items-center gap-2 px-4 py-2.5 bg-stone-900/80 border border-stone-800/50 rounded-full hover:border-amber-500/30 transition-all shrink-0 group"
              >
                <span className="text-sm">{cat.icon}</span>
                <span className="text-xs font-medium text-stone-400 group-hover:text-stone-200 transition-colors whitespace-nowrap">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Specialist Selection */}
        <CoffeeSection
          title="Selección del especialista"
          subtitle="Favoritos seleccionados a mano en una colección curada de hallazgos excepcionales."
          coffees={topRated}
          viewAllHref="/explore"
        />

        {/* Best Offers */}
        <CoffeeSection
          title="Mejores ofertas"
          subtitle="Grandes descuentos. Servicio impecable. Cafés brillantes de los mejores tostadores."
          coffees={bestOffers}
          viewAllHref="/explore?filter=offers"
        />

        {/* CTA Banner */}
        <section className="my-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-900/40 via-stone-900 to-stone-900 border border-amber-500/10">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.3) 0%, transparent 50%)`,
          }} />
          <div className="relative px-8 py-12 sm:px-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 font-serif">
                Descarga la app de CaCafé
              </h2>
              <p className="text-stone-400 mt-2 max-w-md">
                Escanea cualquier bolsa de café para ver calificaciones, reseñas y precios al instante.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button className="flex items-center gap-2 px-5 py-3 bg-stone-800 border border-stone-700 rounded-xl hover:bg-stone-750 transition-colors">
                <span className="text-xl">🍎</span>
                <div className="text-left">
                  <p className="text-[10px] text-stone-400">Descargar en</p>
                  <p className="text-sm font-semibold text-stone-200">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-2 px-5 py-3 bg-stone-800 border border-stone-700 rounded-xl hover:bg-stone-750 transition-colors">
                <span className="text-xl">▶️</span>
                <div className="text-left">
                  <p className="text-[10px] text-stone-400">Descargar en</p>
                  <p className="text-sm font-semibold text-stone-200">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Bestsellers */}
        <CoffeeSection
          title="Bestsellers"
          subtitle="Los cafés más populares de nuestra comunidad."
          coffees={bestsellers}
          viewAllHref="/explore?filter=bestsellers"
        />
      </div>
    </>
  );
}
