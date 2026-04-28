import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800/50 mt-auto">
      {/* Trust Banner */}
      <div className="border-b border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "☕",
                title: "Millones de amantes del café",
                desc: "La comunidad cafetera más grande del mundo",
              },
              {
                icon: "🛡️",
                title: "Soporte siempre disponible",
                desc: "Nuestro equipo está aquí para ayudarte",
              },
              {
                icon: "📦",
                title: "Envío cuidado a tu puerta",
                desc: "Café fresco entregado con cariño",
              },
              {
                icon: "⭐",
                title: "Reseñas honestas",
                desc: "Opiniones reales antes de comprar",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <h4 className="text-sm font-semibold text-stone-200">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
              Compañía
            </h4>
            <ul className="space-y-2.5">
              {["Sobre nosotros", "Prensa", "Carreras", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-stone-500 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
              Comunidad
            </h4>
            <ul className="space-y-2.5">
              {["Top Cafés", "Reseñas", "Rankings", "Eventos"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-stone-500 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
              Para Negocios
            </h4>
            <ul className="space-y-2.5">
              {["Tostadores", "Cafeterías", "Distribuidores", "API"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-stone-500 hover:text-amber-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
              Soporte
            </h4>
            <ul className="space-y-2.5">
              {["Ayuda", "Contacto", "Envíos", "Devoluciones"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-stone-500 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-stone-800/50">
          <div className="flex items-center gap-2">
            <span className="text-lg">☕</span>
            <span className="text-sm font-bold text-amber-400 font-serif">
              CaCafé
            </span>
            <span className="text-xs text-stone-600 ml-2">
              © 2026. Todos los derechos reservados.
            </span>
          </div>
          <div className="flex items-center gap-4">
            {["Términos", "Privacidad", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-stone-500 hover:text-amber-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
