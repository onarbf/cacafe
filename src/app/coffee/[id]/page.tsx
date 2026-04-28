import { notFound } from "next/navigation";
import Link from "next/link";
import { getCoffeeById, coffees } from "@/data/coffees";

export function generateStaticParams() {
  return coffees.map((c) => ({ id: String(c.id) }));
}

function StarRatingLarge({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const fill = Math.min(Math.max(rating - star + 1, 0), 1);
          return (
            <svg key={star} className="w-5 h-5" viewBox="0 0 20 20">
              <defs>
                <linearGradient id={`detail-star-${star}-${rating}`}>
                  <stop offset={`${fill * 100}%`} stopColor="#f59e0b" />
                  <stop offset={`${fill * 100}%`} stopColor="#44403c" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#detail-star-${star}-${rating})`}
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          );
        })}
      </div>
      <span className="text-xl font-bold text-amber-400">{rating.toFixed(1)}</span>
    </div>
  );
}

export default async function CoffeeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const coffee = getCoffeeById(Number(id));

  if (!coffee) {
    notFound();
  }

  const discount = coffee.originalPrice
    ? Math.round(((coffee.originalPrice - coffee.price) / coffee.originalPrice) * 100)
    : null;

  // Mock reviews
  const reviews = [
    {
      id: 1,
      user: "María G.",
      rating: 5,
      date: "Hace 2 días",
      text: "Increíble café, notas florales muy marcadas. Lo compraría de nuevo sin dudarlo.",
      avatar: "🧑‍🦰",
    },
    {
      id: 2,
      user: "Carlos R.",
      rating: 4,
      date: "Hace 1 semana",
      text: "Muy bueno para filtro. La acidez es brillante y el final es largo. Quizás un poco caro.",
      avatar: "👨",
    },
    {
      id: 3,
      user: "Ana L.",
      rating: 5,
      date: "Hace 2 semanas",
      text: "El mejor café que he probado este año. La relación calidad-precio es excelente.",
      avatar: "👩",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8">
        <Link href="/" className="hover:text-amber-400 transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <Link href="/explore" className="hover:text-amber-400 transition-colors">
          Explorar
        </Link>
        <span>/</span>
        <span className="text-stone-300">{coffee.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left - Image */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl flex items-center justify-center overflow-hidden border border-stone-800/50">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              {discount && (
                <span className="px-3 py-1 text-sm font-bold bg-rose-500 text-white rounded-full">
                  −{discount}%
                </span>
              )}
              {coffee.badge && (
                <span className="px-3 py-1 text-sm font-semibold bg-amber-500/90 text-stone-950 rounded-full">
                  {coffee.badge}
                </span>
              )}
            </div>
            <div className="text-[140px]">☕</div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-20 h-20 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
                  i === 1
                    ? "bg-stone-800 border-amber-500/50"
                    : "bg-stone-900 border-stone-800 hover:border-stone-700"
                }`}
              >
                <span className="text-2xl">☕</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-amber-500 font-medium mb-1">
              {coffee.roaster}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-100 font-serif">
              {coffee.name}
            </h1>
            <p className="text-stone-400 mt-1">
              {coffee.origin} · {coffee.region}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <StarRatingLarge rating={coffee.rating} />
            <span className="text-sm text-stone-500">
              {coffee.ratingsCount.toLocaleString()} valoraciones
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-stone-100">
              €{coffee.price.toFixed(2)}
            </span>
            {coffee.originalPrice && (
              <span className="text-lg text-stone-500 line-through">
                €{coffee.originalPrice.toFixed(2)}
              </span>
            )}
            {discount && (
              <span className="text-sm font-semibold text-rose-400">
                Ahorras €{(coffee.originalPrice! - coffee.price).toFixed(2)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-stone-400 leading-relaxed">{coffee.description}</p>

          {/* Flavor Notes */}
          <div>
            <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
              Notas de sabor
            </h3>
            <div className="flex flex-wrap gap-2">
              {coffee.flavorNotes.map((note) => (
                <span
                  key={note}
                  className="px-3 py-1.5 text-sm bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-full"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Tueste", value: coffee.roastLevel },
              { label: "Proceso", value: coffee.process },
              { label: "Altitud", value: coffee.altitude || "—" },
              { label: "Variedad", value: coffee.variety || "—" },
            ].map((detail) => (
              <div
                key={detail.label}
                className="bg-stone-900/50 border border-stone-800/50 rounded-xl p-4"
              >
                <p className="text-[11px] text-stone-500 uppercase tracking-wider">
                  {detail.label}
                </p>
                <p className="text-sm font-semibold text-stone-200 mt-1">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20">
              Añadir al carrito
            </button>
            <button className="px-4 py-3.5 text-stone-400 hover:text-rose-400 border border-stone-800 hover:border-rose-500/30 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="px-4 py-3.5 text-stone-400 hover:text-sky-400 border border-stone-800 hover:border-sky-500/30 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-16 pt-12 border-t border-stone-800/50">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-stone-100 font-serif">
              Reseñas de la comunidad
            </h2>
            <p className="text-sm text-stone-500 mt-1">
              {coffee.ratingsCount.toLocaleString()} valoraciones
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-amber-400 border border-amber-500/30 rounded-xl hover:bg-amber-500/10 transition-all">
            Escribir reseña
          </button>
        </div>

        {/* Rating Distribution */}
        <div className="bg-stone-900/50 border border-stone-800/50 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-400">{coffee.rating.toFixed(1)}</p>
              <StarRatingLarge rating={coffee.rating} />
              <p className="text-xs text-stone-500 mt-1">
                {coffee.ratingsCount.toLocaleString()} total
              </p>
            </div>
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => {
                const widths: Record<number, string> = { 5: "65%", 4: "22%", 3: "8%", 2: "3%", 1: "2%" };
                return (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="text-xs text-stone-500 w-3">{stars}</span>
                    <svg className="w-3 h-3 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="flex-1 h-2 bg-stone-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: widths[stars] }}
                      />
                    </div>
                    <span className="text-xs text-stone-500 w-8 text-right">
                      {widths[stars]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-stone-900/30 border border-stone-800/50 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{review.avatar}</span>
                  <div>
                    <p className="text-sm font-semibold text-stone-200">
                      {review.user}
                    </p>
                    <p className="text-xs text-stone-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-3.5 h-3.5 ${
                        star <= review.rating ? "text-amber-500" : "text-stone-700"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
