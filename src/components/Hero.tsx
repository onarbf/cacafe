import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/30" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(217, 119, 6, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(180, 83, 9, 0.1) 0%, transparent 50%)`,
      }} />
      
      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-amber-400">
                La comunidad cafetera más grande
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-100 font-serif leading-[1.1] tracking-tight">
              Descubre el café
              <span className="block text-amber-400 mt-1">perfecto para ti</span>
            </h1>
            
            <p className="text-lg text-stone-400 mt-6 leading-relaxed">
              Explora, califica y compra los mejores cafés del mundo. 
              Desde granos de especialidad hasta blends clásicos, 
              encontrados y calificados por nuestra comunidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explorar cafés
              </Link>
              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-300 border border-stone-700 hover:border-amber-500/50 hover:text-amber-400 rounded-full transition-all duration-200"
              >
                Escanear etiqueta
                <span className="text-base">📸</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-stone-800/50">
              {[
                { value: "150K+", label: "Cafés evaluados" },
                { value: "2M+", label: "Reseñas" },
                { value: "89", label: "Países" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-amber-400 font-serif">
                    {stat.value}
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full scale-75" />
              
              {/* Coffee Bean Illustration */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-amber-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-4 border border-amber-500/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute inset-8 border border-dashed border-amber-500/10 rounded-full animate-[spin_25s_linear_infinite]" />
                
                <div className="text-[120px] animate-bounce" style={{ animationDuration: "3s" }}>
                  ☕
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-stone-900/90 backdrop-blur-sm border border-stone-800/50 rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  <div>
                    <p className="text-xs font-bold text-stone-200">4.8</p>
                    <p className="text-[10px] text-stone-500">Geisha Panamá</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -left-4 bg-stone-900/90 backdrop-blur-sm border border-stone-800/50 rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏆</span>
                  <div>
                    <p className="text-xs font-bold text-stone-200">Top #1</p>
                    <p className="text-[10px] text-stone-500">Etiopía Natural</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 bg-stone-900/90 backdrop-blur-sm border border-stone-800/50 rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌍</span>
                  <div>
                    <p className="text-xs font-bold text-stone-200">89 países</p>
                    <p className="text-[10px] text-stone-500">Origen único</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
